/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import logo from '../assets/logo.svg';
import '@utilitywarehouse/css-reset';
// import '@utilitywarehouse/fontsource';
import '../styles/ui.css';
import { encodeContent, kebabCase } from '../utils';

const LoadingSpinner = () => (
  <div className="spinner-container">
    <div className="loading-spinner"></div>
  </div>
);

function App() {
  const [githubToken, setGithubToken] = React.useState('');
  const [tokenLoaded, setTokenLoaded] = React.useState(false);
  const [showTokenInput, setShowTokenInput] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState('');
  const [exporting, setExporting] = React.useState(false);
  const [collections, setCollections] = React.useState([]);
  const [selectedCollections, setSelectedCollections] = React.useState([]);
  const [loadingImport, setLoadingImport] = React.useState(false);
  const repoOwner = 'utilitywarehouse';
  const repoName = 'design-systems';
  const branchName = 'main';
  const [selectAll, setSelectAll] = React.useState(false);
  const [statusType, setStatusType] = React.useState<'success' | 'error' | ''>('');

  React.useEffect(() => {
    // Load saved GitHub token from clientStorage
    parent.postMessage({ pluginMessage: { type: 'load-token' } }, '*');
    parent.postMessage({ pluginMessage: { type: 'get-filename' } }, '*');
    // Request available collections from the plugin
    parent.postMessage({ pluginMessage: { type: 'get-collections' } }, '*');
  }, []);

  // Handle messages from the plugin code
  window.onmessage = async event => {
    const { pluginMessage } = event.data;
    if (pluginMessage.type === 'token-loaded') {
      setGithubToken((pluginMessage?.token as string) || '');
      if (pluginMessage?.token) {
        setTokenLoaded(true);
        setStatusMessage('GitHub token loaded.');
      }
    } else if (pluginMessage.type === 'variables-exported') {
      const tokensData = pluginMessage.data;
      setStatusMessage('Variables exported. Creating PRs...');
      setStatusType('success');
      await createPullRequests(tokensData);
      setExporting(false);
    }
    if (pluginMessage.type === 'collections-loaded') {
      console.log('Collections loaded:', pluginMessage.data);
      setCollections(pluginMessage.data);
    } else if (pluginMessage.type === 'show-loading') {
      setLoadingImport(true);
    } else if (pluginMessage.type === 'hide-loading') {
      setLoadingImport(false);
    }
  };

  // Save GitHub token to clientStorage
  const saveToken = () => {
    parent.postMessage({ pluginMessage: { type: 'save-token', token: githubToken } }, '*');
    setShowTokenInput(false);
    setStatusMessage('GitHub token saved.');
    setStatusType('success');
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCollections([]);
    } else {
      const allKeys = collections.map(collection => collection.key);
      setSelectedCollections(allKeys);
    }
    setSelectAll(!selectAll);
  };

  const handleCollectionSelection = (collectionKey: string) => {
    setSelectedCollections(prevSelected => {
      let updatedSelected;
      if (prevSelected.includes(collectionKey)) {
        updatedSelected = prevSelected.filter(key => key !== collectionKey);
      } else {
        updatedSelected = [...prevSelected, collectionKey];
      }
      setSelectAll(updatedSelected.length === collections.length);
      return updatedSelected;
    });
  };

  // Export variables and initiate PR creation
  const exportVariables = () => {
    setExporting(true);
    console.log('Exporting with selectedCollections:', selectedCollections);
    parent.postMessage(
      {
        pluginMessage: {
          type: 'export-variables',
          selectedCollections: selectedCollections,
        },
      },
      '*'
    );
  };

  // Add a function to fetch the latest SHA before updating
  async function getFileSha(
    apiBase: string,
    repoOwner: string,
    repoName: string,
    filePath: string,
    branchName: string,
    headers: Record<string, string>
  ): Promise<string | undefined> {
    const getFileResponse = await fetch(
      `${apiBase}/repos/${repoOwner}/${repoName}/contents/${filePath}?ref=${branchName}`,
      { headers }
    );
    if (getFileResponse.ok) {
      const fileData = await getFileResponse.json();
      return fileData.sha;
    } else if (getFileResponse.status === 404) {
      return undefined; // File does not exist
    } else {
      throw new Error(`Failed to get file information for ${filePath}.`);
    }
  }

  // Create pull requests for all collections in a single PR
  const createPullRequests = async tokensData => {
    setStatusMessage('Creating a single pull request for all collections...');
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
        { headers }
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

      // Prepare all file updates
      for (const { collectionName, tokensJson } of tokensData) {
        const kebabCollectionName = kebabCase(collectionName);
        const filePath = `packages/design-tokens/tokens/${kebabCollectionName}.json`;

        let fileSha;
        try {
          fileSha = await getFileSha(
            apiBase,
            repoOwner,
            repoName,
            filePath,
            newBranchName,
            headers
          );
        } catch (error) {
          throw new Error(`Failed to fetch SHA for ${collectionName}.json: ${error.message}`);
        }

        const content = encodeContent(tokensJson);
        let fileBody = {
          message: `Export Figma variables for ${collectionName}`,
          content: content,
          branch: newBranchName,
          ...(fileSha && { sha: fileSha }),
        };

        let fileResponse = await fetch(
          `${apiBase}/repos/${repoOwner}/${repoName}/contents/${filePath}`,
          {
            method: 'PUT',
            headers,
            body: JSON.stringify(fileBody),
          }
        );

        if (fileResponse.status === 422 && fileSha) {
          console.warn(`Conflict detected for ${collectionName}.json. Retrying...`);
          fileSha = await getFileSha(
            apiBase,
            repoOwner,
            repoName,
            filePath,
            newBranchName,
            headers
          );
          if (fileSha) {
            fileBody = { ...fileBody, sha: fileSha };
            fileResponse = await fetch(
              `${apiBase}/repos/${repoOwner}/${repoName}/contents/${filePath}`,
              {
                method: 'PUT',
                headers,
                body: JSON.stringify(fileBody),
              }
            );
            if (!fileResponse.ok)
              throw new Error(`Failed to update ${collectionName}.json on retry.`);
          } else {
            throw new Error(`Failed to resolve conflict for ${collectionName}.json.`);
          }
        } else if (!fileResponse.ok) {
          throw new Error(`Failed to update ${collectionName}.json.`);
        }
      }

      // Create a single pull request
      const prResponse = await fetch(`${apiBase}/repos/${repoOwner}/${repoName}/pulls`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          title: `Export Figma Variables - All Collections`,
          head: newBranchName,
          base: branchName,
          body: `This PR contains exported Figma variables for all selected collections. It includes the following changes:\n\n${tokensData
            .map(
              ({ collectionName }) =>
                `- Exported variables to packages/design-tokens/tokens/${kebabCase(
                  collectionName
                )}.json`
            )
            .join('\n')}`,
        }),
      });
      if (!prResponse.ok) throw new Error('Failed to create pull request.');

      setStatusMessage('Pull request created successfully.');
      setStatusType('success');
    } catch (error) {
      console.error(error);
      setStatusMessage(`Error: ${error.message}`);
      setStatusType('error');
    } finally {
      setExporting(false);
    }
  };

  const editToken = () => {
    setShowTokenInput(true);
  };

  return (
    <div>
      {tokenLoaded && !showTokenInput && (
        <button onClick={editToken} className="edit-token-button">
          Edit Token
        </button>
      )}
      <img src={logo} />
      <h2>Export Figma Variables</h2>
      {!githubToken && (
        <p className="token-message">Enter your GitHub token to export variables and create PRs.</p>
      )}
      {((tokenLoaded && showTokenInput) || !tokenLoaded) && (
        <div className="token-wrap">
          <label>GitHub Token:</label>
          <input
            type="password"
            value={githubToken}
            onChange={e => setGithubToken(e.target.value)}
          />
          <button onClick={saveToken}>Save Token</button>
        </div>
      )}
      {githubToken && (
        <div>
          <div>
            <div className="top-content">
              <h3>Select Collections to Export:</h3>
              <div>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  id="select-all"
                />
                <label htmlFor="select-all">Select All</label>
              </div>
            </div>
            {collections.map(collection => (
              <div key={collection.key} className="checkbox-group">
                <input
                  type="checkbox"
                  id={`checkbox-${collection.key}`}
                  value={collection.key}
                  checked={selectedCollections.includes(collection.key)}
                  onChange={() => handleCollectionSelection(collection.key)}
                />
                <label htmlFor={`checkbox-${collection.key}`}>
                  {collection.libraryName} - {collection.name}
                </label>
              </div>
            ))}
          </div>
          {loadingImport && <p>Importing variables, please wait...</p>}
          <button
            onClick={exportVariables}
            disabled={exporting || loadingImport}
            className="export"
          >
            {exporting ? 'Exporting...' : 'Export Variables'}
          </button>
        </div>
      )}
      {(exporting || loadingImport) && <LoadingSpinner />}
      <p className={statusType ? `status-${statusType}` : '' + ' status-message'}>
        {statusMessage}
      </p>
    </div>
  );
}

export default App;
