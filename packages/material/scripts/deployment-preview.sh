#!/bin/bash

# Build storybook static site
yarn build-storybook

# Variables used to build subdomain for surge.sh
ORGANISATION_SUBDOMAIN=uw
PROJECT_SUBDOMAIN=customer-ui-material
TLD=surge.sh

# Shortened commit hash
COMMIT_HASH="$(echo $CIRCLE_SHA1 | cut -c1-7)"

# Surge domains
STORYBOOK_SHA_URL="$(echo $COMMIT_HASH).storybook.$(echo $PROJECT_SUBDOMAIN)-$(echo $ORGANISATION_SUBDOMAIN).$TLD"
STORYBOOK_ALPHA_URL="alpha.storybook.$(echo $PROJECT_SUBDOMAIN)-$(echo $ORGANISATION_SUBDOMAIN).$TLD"
STORYBOOK_MASTER_URL="storybook.$(echo $PROJECT_SUBDOMAIN)-$(echo $ORGANISATION_SUBDOMAIN).$TLD"
STORYBOOK_URL=$STORYBOOK_SHA_URL

if [ "$CIRCLE_BRANCH" == "alpha" ]
then
  STORYBOOK_URL=$STORYBOOK_ALPHA_URL
elif [ "$CIRCLE_BRANCH" == "master" ]
then
  STORYBOOK_URL=$STORYBOOK_MASTER_URL
fi

# Deploy storybook to surge static site
npx surge ./storybook $STORYBOOK_URL --token $SURGE_SH_TOKEN

if [ "$STORYBOOK_SHA_URL" == "$STORYBOOK_URL" ]
then
  # If running from active PR, comment on the PR with the URL for the storybook deployment
  STORYBOOK_URL="http://$STORYBOOK_URL" node ./scripts/deployment-preview-comment-on-pr.js
else
then
  # Deploy storybook to surge static site on commit hash
  npx surge ./storybook $STORYBOOK_SHA_URL --token $SURGE_SH_TOKEN
fi
