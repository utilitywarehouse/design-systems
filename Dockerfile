FROM node:lts-alpine as builder
RUN mkdir -p /opt/cwui
WORKDIR /opt/cwui
ADD . .
ARG NPM_TOKEN
RUN printf "@utilitywarehouse:registry=https://registry.npmjs.org/\n//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n" >> /root/.npmrc
RUN npm run setup
RUN pnpm install
RUN pnpm -r --stream run build
RUN pnpm -r --filter *material storybook:build

FROM node:lts-alpine as runner
RUN mkdir -p /opt/cwui-storybook
WORKDIR /opt/cwui-storybook
RUN npm install -g serve
COPY --from=builder /opt/cwui/packages/material/storybook-build ./build
ENTRYPOINT ["serve", "/opt/cwui-storybook/build"]

