const execa = require("execa");
const path = require("path");
const fs = require("fs");
const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

/**
 * This script finds any packages which have changed on the current git branch
 * and runs the packages "ci-package-changed" npm script.
 *
 * For branches included in GIT_BRANCHES_TO_ALWAYS_RUN_ON, each packages
 * "ci-package-changed" npm script will be run.
 *
 * The idea behind this is to allow for packages to run scripts in CI when the
 * package has been changed. For example to add deployment previews to PR's, or
 * to deploy documentation etc.
 */

const monorepoRoot = path.resolve(__dirname, "..");
const GIT_BRANCHES_TO_ALWAYS_RUN_ON = ["alpha", "master"];

const gitCommandCache = {};

/**
 * Execute a git command and return the stdout
 *
 * @param {Array}  args Array of arguments
 * @param {Object} options Optional options object passed to execa
 * @returns {Promise<string>} Promise resolving to stdout of executed git command
 */
const git = async (args, options = {}) => {
  const cacheKey = JSON.stringify({ args, options });
  if (gitCommandCache[cacheKey]) return gitCommandCache[cacheKey];
  const { stdout } = await execa("git", args, options);
  gitCommandCache[cacheKey] = stdout;
  return stdout;
};

/**
 * Get files changed since tip of base branch
 *
 * @param {string} hash current commit hash
 * @param {string} base tip of base branch for PR's commit hash
 */
const getCommitFiles = async (hash, base) => {
  const files = await git([
    "diff-tree",
    "--no-commit-id",
    "--name-only",
    "-r",
    `${hash}..${base}`,
  ]);

  return files.split("\n");
};

/**
 * Get the base tip from GitHub for the PR
 *
 * @returns {Promise<string>} Promise resolving to the base tip sha1 commit hash
 */
const getBaseTip = async () => {
  const pr = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls/{pull_number}",
    {
      owner: process.env.CIRCLE_PROJECT_USERNAME,
      repo: process.env.CIRCLE_PROJECT_REPONAME,
      pull_number: process.env.PR_NUMBER,
    }
  );

  return pr.data.base.sha;
};

/**
 * Detects if a package has changed since the tip of the base
 * branch for PR's or is included in the GIT_BRANCHES_TO_ALWAYS_RUN_ON
 * list of branches
 *
 * @param {Package} package
 * @param {string} package.relativePath
 * @returns {Promise<boolean>}
 */
const hasPackageChanged = async ({ relativePath }) => {
  const branch = process.env.CIRCLE_BRANCH;
  if (GIT_BRANCHES_TO_ALWAYS_RUN_ON.includes(branch)) {
    return true;
  }

  // When a PR has yet to be created
  if (!process.env.PR_NUMBER) return false;
  const hash = process.env.CIRCLE_SHA1;
  const baseTip = await getBaseTip();
  const commitFiles = await getCommitFiles(hash, baseTip);
  while (commitFiles.length > 0) {
    const file = commitFiles.shift();
    if (file.substring(0, relativePath.length) === relativePath) return true;
  }

  return false;
};

/**
 * Gets list of all packages in the monorepo
 *
 * @returns {Package[]}
 */
const getPackages = () => {
  const packagesDirectory = path.join(monorepoRoot, "packages");
  const packageDirectories = fs
    .readdirSync(packagesDirectory)
    .filter((item) => {
      if ([".", ".."].includes(item)) return false;
      if (!fs.statSync(path.join(packagesDirectory, item)).isDirectory()) {
        return false;
      }

      if (
        !fs
          .statSync(path.join(packagesDirectory, item, "package.json"))
          .isFile()
      ) {
        return false;
      }

      return true;
    });

  return packageDirectories.map((packageDirectory) => {
    const packageJSON = require(path.join(
      packagesDirectory,
      packageDirectory,
      "package.json"
    ));

    return {
      ...packageJSON,
      relativePath: `packages/${packageDirectory}`,
      path: path.join(packagesDirectory, packageDirectory),
    };
  });
};

/**
 * Ensures the script can be run by checking CI environment
 *
 * @throws  {Error} when unable to run
 * @returns {void}
 */
const preflightCheck = () => {
  if (process.env.CI !== "true") {
    throw new Error("the package changed script should only be run on CI");
  }
};

/**
 * Fetches a list of packages to run the `ci-package-changed`
 * script for
 *
 * @returns {Promise<Package[]>} Array of packages
 */
const getPackagesToRun = async () => {
  const packages = await getPackages();
  const packagesToRun = await Promise.all(
    packages.map(async (package) => {
      const shouldRun = await hasPackageChanged(package);
      if (shouldRun) return package;
    })
  );

  return packagesToRun.filter((package) => Boolean(package));
};

/**
 * Entry function to process the script
 *
 * @returns {Promise<void>}
 */
const run = async () => {
  try {
    try {
      preflightCheck();
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }

    const packagesToRun = await getPackagesToRun();
    if (packagesToRun.length === 0) {
      console.log("No changes made");
    } else {
      const packagePaths = packagesToRun
        .map(({ relativePath, name }) => `- ${relativePath} (${name})`)
        .join("\n");

      console.log(
        `Running on change scripts for the following packages:\n\n${packagePaths}\n`
      );
    }

    while (packagesToRun.length > 0) {
      const { relativePath, name } = packagesToRun.shift();
      console.log(
        `Running on change scripts for: - ${relativePath} (${name})\n\n`
      );

      const { exitCode } = await execa(
        "npx",
        ["lerna", "run", "ci-package-changed", "--scope", name],
        {
          stdout: process.stdout,
          stderr: process.stderr,
        }
      );

      if (exitCode > 0) {
        process.exit(1);
      }
    }

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
