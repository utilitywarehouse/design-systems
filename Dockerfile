FROM node:lts-alpine as builder
RUN mkdir -p /opt/cwui
WORKDIR /opt/uw-web-ui
ADD . .
ARG NPM_TOKEN
RUN printf "@utilitywarehouse:registry=https://registry.npmjs.org/\n//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n" >> /root/.npmrc
RUN npm run setup
RUN pnpm install
RUN pnpm -r --stream run build
RUN pnpm -r --filter *react storybook:build

FROM node:lts-alpine as runner
RUN mkdir -p /opt/uw-web-ui-storybook
WORKDIR /opt/uw-web-ui-storybook
RUN npm install -g serve
COPY --from=builder /opt/uw-web-ui/packages/material/storybook-build ./build
ENTRYPOINT ["serve", "/opt/uw-web-ui-storybook/build"]
