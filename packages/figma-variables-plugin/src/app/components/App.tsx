import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/ui.css';

function App() {
  const [githubToken, setGithubToken] = React.useState('');
  const [statusMessage, setStatusMessage] = React.useState('');
  const [filename, setFilename] = React.useState('');
  const [exporting, setExporting] = React.useState(false);
  const repoOwner = 'utilitywarehouse';
  const repoName = 'design-systems';
  const branchName = 'main';
  const filePath = `packages/design-tokens/tokens/${filename}.json`;

  React.useEffect(() => {
    // Load saved GitHub token from clientStorage
    parent.postMessage({ pluginMessage: { type: 'load-token' } }, '*');
    parent.postMessage({ pluginMessage: { type: 'get-filename' } }, '*');
  }, []);

  // Handle messages from the plugin code
  window.onmessage = async event => {
    const { pluginMessage } = event.data;

    if (pluginMessage.type === 'token-loaded') {
      setGithubToken((pluginMessage?.token as string) || '');
      setStatusMessage('GitHub token loaded.');
    } else if (pluginMessage.type === 'variables-exported') {
      const variablesData = pluginMessage.data;
      setStatusMessage('Variables exported. Creating PR...');
      await createPullRequest(variablesData);
      setExporting(false);
    }
    if (pluginMessage.type === 'filename') {
      setFilename(pluginMessage.data);
    }
  };

  // Save GitHub token to clientStorage
  const saveToken = () => {
    parent.postMessage({ pluginMessage: { type: 'save-token', token: githubToken } }, '*');
    setStatusMessage('GitHub token saved.');
  };

  // Export variables and initiate PR creation
  const exportVariables = () => {
    setExporting(true);
    parent.postMessage({ pluginMessage: { type: 'export-variables' } }, '*');
  };

  // Create a pull request on GitHub
  const createPullRequest = async variablesData => {
    try {
      const apiBase = 'https://api.github.com';
      const headers = {
        Authorization: `token ${githubToken}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      };

      // Get the SHA of the base branch
      const branchResponse = await fetch(
        `${apiBase}/repos/${repoOwner}/${repoName}/git/ref/heads/${branchName}`,
        {
          headers,
        }
      );
      if (!branchResponse.ok) throw new Error('Failed to fetch branch information.');
      const branchData = await branchResponse.json();
      const baseSha = branchData.object.sha;

      // Create a new branch
      const newBranchName = `figma-export-${Date.now()}`;
      const refResponse = await fetch(`${apiBase}/repos/${repoOwner}/${repoName}/git/refs`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          ref: `refs/heads/${newBranchName}`,
          sha: baseSha,
        }),
      });
      if (!refResponse.ok) throw new Error('Failed to create new branch.');

      // Prepare the file content
      const content = btoa(decodeURIComponent(encodeURIComponent(variablesData)));

      // Create or update the file in the new branch
      const fileResponse = await fetch(
        `${apiBase}/repos/${repoOwner}/${repoName}/contents/${filePath}`,
        {
          method: 'PUT',
          headers,
          body: JSON.stringify({
            message: 'Export Figma variables',
            content: content,
            branch: newBranchName,
          }),
        }
      );
      if (!fileResponse.ok) throw new Error('Failed to create or update the file.');

      // Create a pull request
      const prResponse = await fetch(`${apiBase}/repos/${repoOwner}/${repoName}/pulls`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          title: 'Export Figma Variables',
          head: newBranchName,
          base: branchName,
          body: `This PR contains exported Figma variables. It includes the following changes:\n\n- Exported variables to ${filename}.json`,
        }),
      });
      if (!prResponse.ok) throw new Error('Failed to create pull request.');

      setStatusMessage('Pull request created successfully.');
    } catch (error) {
      console.error(error);
      setStatusMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <img src={logo} />
      <h2>Export Figma Variables</h2>
      <div>
        <label>GitHub Token:</label>
        <input type="password" value={githubToken} onChange={e => setGithubToken(e.target.value)} />
        <button onClick={saveToken}>Save Token</button>
      </div>
      <button onClick={exportVariables} disabled={exporting} className="export">
        {exporting ? 'Exporting...' : 'Export Variables & Create PR'}
      </button>
      <p>{statusMessage}</p>
    </div>
  );
}

export default App;
