FROM node:lts-alpine as builder
RUN mkdir -p /opt/cwui-material
WORKDIR /opt/cwui-material
ADD ./packages/material .
ARG NPM_TOKEN
RUN printf "@utilitywarehouse:registry=https://registry.npmjs.org/\n//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n" >> /root/.npmrc
RUN echo $NPM_TOKEN
RUN cat ~/.npmrc
RUN npm run storybook:ci

FROM node:lts-alpine as runner
RUN mkdir -p /opt/cwui-material
WORKDIR /opt/cwui-material
RUN npm install -g serve
COPY --from=builder /opt/cwui-material/storybook-build ./build
ENTRYPOINT ["serve", "/opt/cwui-material/build"]

