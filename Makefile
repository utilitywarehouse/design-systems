install:
	yarn

install-ci:
	yarn --immutable

build:
	yarn lerna run build

lint:
	yarn lerna run lint

lint-fix:
	yarn lerna run lint:fix

test:
	yarn lerna run test

commit:
	yarn cz

publish:
	yarn lerna exec --concurrency 1 -- yarn --no-install semantic-release -e semantic-release-monorepo
