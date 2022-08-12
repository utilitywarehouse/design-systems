FROM node:alpine

RUN mkdir -p /opt/cwui-storybook

WORKDIR /opt/cwui-storybook

ADD ./packages/material/storybook-build ./build

RUN npm install -g serve

ENTRYPOINT ["serve", "/opt/cwui-storybook/build"]

