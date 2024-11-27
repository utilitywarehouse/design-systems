/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable  @typescript-eslint/no-unsafe-return */
/* eslint-disable  @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react';
import logo from '../assets/logo.svg';
import '@utilitywarehouse/css-reset';
import '../styles/ui.css';
import { encodeContent, kebabCase } from '../utils';
import {
  Heading,
  Button,
  CheckboxGroup,
  Checkbox,
  Box,
  Flex,
  Alert,
  TextField,
  Text,
} from '@utilitywarehouse/web-ui';

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
  const [statusType, setStatusType] = React.useState<'green' | 'red' | 'cyan'>('cyan');

  React.useEffect(() => {
    // Load saved GitHub token from clientStorage
    parent.postMessage({ pluginMessage: { type: 'load-token' } }, '*');
    parent.postMessage({ pluginMessage: { type: 'get-filename' } }, '*');
    // Request available collections from the plugin
    parent.postMessage({ pluginMessage: { type: 'get-collections' } }, '*');
  }, []);

  useEffect(() => {
    if (statusMessage) {
      const timeout = setTimeout(() => {
        setStatusMessage('');
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [statusMessage]);

  // Handle messages from the plugin code
  window.onmessage = async event => {
    const { pluginMessage } = event.data;
    if (pluginMessage.type === 'token-loaded') {
      setGithubToken((pluginMessage?.token as string) || '');
      if (pluginMessage?.token) {
        setTokenLoaded(true);
        setStatusMessage('GitHub token loaded.');
        setStatusType('green');
      }
    } else if (pluginMessage.type === 'variables-exported') {
      const tokensData = pluginMessage.data;
      setStatusMessage('Variables exported. Creating PRs...');
      setStatusType('cyan');
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
    if (githubToken) {
      setTokenLoaded(true);
    }
    setStatusMessage('GitHub token saved.');
    setStatusType('green');
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

  // Export variables and initiate PR creation
  const exportVariables = () => {
    setExporting(true);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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
      setStatusType('green');
    } catch (error) {
      console.error(error);
      setStatusMessage(`Error: ${error.message}`);
      setStatusType('red');
    } finally {
      setExporting(false);
    }
  };

  const editToken = () => {
    setShowTokenInput(true);
  };

  function resizeWindow(e) {
    const size = {
      w: Math.max(50, Math.floor(e.clientX + 5)),
      h: Math.max(50, Math.floor(e.clientY + 5)),
    };
    parent.postMessage({ pluginMessage: { type: 'resize', size: size } }, '*');
  }

  return (
    <div>
      {tokenLoaded && !showTokenInput && (
        <Button
          onClick={editToken}
          className="edit-token-button"
          size="small"
          sx={{ position: 'absolute', top: 16, right: 16 }}
        >
          Edit Token
        </Button>
      )}
      <img src={logo} />
      <Heading variant="h3" sx={{ my: 2 }}>
        Export Figma Variables
      </Heading>
      {!githubToken && (
        <Alert
          colorScheme="cyan"
          text="Enter your GitHub token to be able to export the variables and create a PR."
          sx={{ mb: 3 }}
        />
      )}
      {loadingImport && (
        <Alert colorScheme="cyan" text="Importing variables, please wait..." sx={{ mb: 3 }} />
      )}
      {((tokenLoaded && showTokenInput) || !tokenLoaded) && (
        <Box sx={{ padding: 3, backgroundColor: '#fff', borderRadius: '14px', mb: 3 }}>
          <TextField
            id="github-token"
            type="password"
            label="GitHub Token"
            value={githubToken}
            onChange={e => setGithubToken(e.target.value)}
          />
          <Button onClick={saveToken}>Save Token</Button>
        </Box>
      )}
      {statusMessage && <Alert colorScheme={statusType} text={statusMessage} sx={{ mb: 3 }} />}
      {githubToken && (
        <Box sx={{ padding: 3, backgroundColor: '#fff', borderRadius: '14px' }}>
          <Box mb={2}>
            <CheckboxGroup
              direction="column"
              label="Select Collections to Export:"
              helperText="Published library collections in this file"
              sx={{ mb: 3 }}
            >
              <Checkbox
                id="select-all"
                value="select-all"
                label="Select All"
                checked={selectAll}
                onCheckedChange={handleSelectAll}
              />
            </CheckboxGroup>
            <CheckboxGroup
              direction="row"
              value={selectedCollections}
              onValueChange={val => setSelectedCollections(val)}
            >
              {collections.map(collection => (
                <Checkbox
                  key={collection.key}
                  id={`checkbox-${collection.key}`}
                  value={collection.key}
                  label={collection.name}
                  helperText={collection.libraryName}
                />
              ))}
            </CheckboxGroup>
          </Box>

          <Flex direction="column" align={{ mobile: 'stretch', desktop: 'start' }}>
            <Button onClick={exportVariables} disabled={exporting || loadingImport}>
              {exporting ? 'Exporting...' : 'Export Variables'}
            </Button>
          </Flex>
        </Box>
      )}
      {(exporting || loadingImport) && <LoadingSpinner />}

      <svg
        id="corner"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onPointerDown={e => {
          e.currentTarget.onpointermove = resizeWindow;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerUp={e => {
          e.currentTarget.onpointermove = null;
          e.currentTarget.releasePointerCapture(e.pointerId);
        }}
      >
        <path d="M16 0V16H0L16 0Z" fill="white" />
        <path d="M6.22577 16H3L16 3V6.22576L6.22577 16Z" fill="#8C8C8C" />
        <path d="M11.8602 16H8.63441L16 8.63441V11.8602L11.8602 16Z" fill="#8C8C8C" />
      </svg>
    </div>
  );
}

export default App;
