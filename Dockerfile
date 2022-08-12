FROM node:alpine

RUN mkdir -p /opt/cwui-storybook

WORKDIR /opt/cwui-storybook

ADD ./packages/material/storybook-build ./build

RUN yarn global add --ignore-optional serve

ENTRYPOINT ["serve", "/opt/telecom-ui-storybook/build"]

