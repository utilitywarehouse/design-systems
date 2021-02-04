const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const run = async () => {
  await octokit.request('POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews', {
    owner: process.env.CIRCLE_PROJECT_USERNAME,
    repo: process.env.CIRCLE_PROJECT_REPONAME,
    pull_number: process.env.PR_NUMBER,
    commit_id: process.env.CIRCLE_SHA1,
    event: "COMMENT",
    body: `[Storybook deployment preview URL](${process.env.STORYBOOK_URL})`,
  });
};

run();
