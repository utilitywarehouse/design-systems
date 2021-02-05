const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

/**
 * Comments on the active PR the URL for the storybook deployment
 * 
 * @returns {Promise<void>}
 */
const run = async () => {
  await octokit.request('POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews', {
    owner: process.env.CIRCLE_PROJECT_USERNAME,
    repo: process.env.CIRCLE_PROJECT_REPONAME,
    pull_number: process.env.PR_NUMBER,
    commit_id: process.env.CIRCLE_SHA1,
    event: "COMMENT",
    body: `## Automated deployments

Storybook preview URL: [${process.env.STORYBOOK_URL}](${process.env.STORYBOOK_URL})
`,
  });
};

run();
