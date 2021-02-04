const execa = require("execa");
const path = require("path");
const fs = require("fs");

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

const git = async (args, options = {}) => {
  const cacheKey = JSON.stringify({ args, options });
  if (gitCommandCache[cacheKey]) return gitCommandCache[cacheKey];
  const { stdout } = await execa("git", args, options);
  gitCommandCache[cacheKey] = stdout;
  return stdout;
};

const getCommitFiles = async (hash) => {
  const files = await git([
    "diff-tree",
    "--no-commit-id",
    "--name-only",
    "-r",
    hash,
  ]);

  return files.split("\n");
};

const hasPackageChanged = async ({ relativePath }) => {
  const branch = process.env.CIRCLE_BRANCH;
  if (GIT_BRANCHES_TO_ALWAYS_RUN_ON.includes(branch)) {
    return true;
  }

  const hash = process.env.CIRCLE_SHA1;
  const commitFiles = await getCommitFiles(hash);
  while (commitFiles.length > 0) {
    const file = commitFiles.shift();
    if (file.substring(0, relativePath.length) === relativePath) return true;
  }

  return false;
};

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

const preflightCheck = () => {
  if (process.env.CI !== "true") {
    throw new Error("the deployment preview script should only be run on CI");
  }
};

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

const run = async () => {
  try {
    preflightCheck();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  const packagesToRun = await getPackagesToRun();
  if (packagesToRun.length === 0) {
    console.log("No previews to deploy");
  } else {
    const packagePaths = packagesToRun
      .map(({ relativePath, name }) => `- ${relativePath} (${name})`)
      .join("\n");

    console.log(
      `Running preview deployments for the following packages:\n\n${packagePaths}\n`
    );
  }

  const output = await Promise.all(
    packagesToRun.map(({ name }) => {
      return execa("npx", [
        "lerna",
        "run",
        "ci-package-changed",
        "--scope",
        name,
      ]);
    })
  );

  let err;
  while (output.length > 0) {
    const { stderr, stdout, exitCode } = output.shift();
    if (exitCode > 0) {
      err = true;
      console.error(stderr);
    }

    console.log(stdout);
  }

  if (err) {
    process.exit(1);
  } else {
    process.exit(0);
  }
};

run();
