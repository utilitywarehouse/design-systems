#!/bin/bash
yarn build-storybook
yarn build-storybook-docs

ORGANISATION_SUBDOMAIN=uw
PROJECT_SUBDOMAIN=customer-ui-material
TLD=surge.sh

# Surge domains
STORYBOOK_PR_URL="pull-$(echo $CIRCLE_PR_NUMBER).$(echo $PROJECT_SUBDOMAIN)-$(echo $ORGANISATION_SUBDOMAIN).$TLD"
STORYBOOK_ALPHA_URL="alpha.$(echo $PROJECT_SUBDOMAIN)-$(echo $ORGANISATION_SUBDOMAIN).$TLD"
STORYBOOK_MASTER_URL="$(echo $PROJECT_SUBDOMAIN)-$(echo $ORGANISATION_SUBDOMAIN).$TLD"
STORYBOOK_URL=$STORYBOOK_PR_URL

if [ "$CIRCLE_BRANCH" == "alpha" ]
then
  STORYBOOK_URL=$STORYBOOK_ALPHA_URL
elif [ "$CIRCLE_BRANCH" == "master" ]
then
  STORYBOOK_URL=$STORYBOOK_MASTER_URL
elif [ "$CIRCLE_PR_NUMBER" == "" ]
then
  echo "No pull request to deploy preview for"
  exit 0
fi

npx surge ./storybook-build $STORYBOOK_URL --token $SURGE_SH_TOKEN

if [ "$STORYBOOK_PR_URL" == "$STORYBOOK_URL" ]
then
  STORYBOOK_URL="http://$STORYBOOK_URL" node ./scripts/deployment-preview-comment-on-pr.js
fi
