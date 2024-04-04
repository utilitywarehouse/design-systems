const fetch = require('node-fetch');
const fs = require('fs');
const unzipper = require('unzipper');

async function getArtifacts() {
  const artifacts = await fetch(
    'https://api.github.com/repos/utilitywarehouse/design-systems/actions/artifacts',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PAT_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );
  const response = await artifacts.json();
  const artifactObject = response.artifacts.find(
    artifact => artifact.name === process.env.ARTIFACT_NAME
  );
  if (!artifactObject?.archive_download_url) {
    return console.error('No artifact found');
  }

  const archive = await fetch(artifactObject.archive_download_url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_PAT_TOKEN}`,
      Accept: 'application/vnd.github.v3+zip',
    },
  });
  const dest = fs.createWriteStream('./artifact.zip');
  archive.body.pipe(dest);

  dest.on('finish', function () {
    fs.createReadStream('./artifact.zip').pipe(unzipper.Extract({ path: './' }));
    console.error(`Unzipped ${process.env.ARTIFACT_NAME}`);
  });
}

getArtifacts();
