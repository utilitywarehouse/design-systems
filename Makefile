install:
	yarn

install-ci:
	yarn --immutable

clean:
	yarn lerna run clean

build:
	yarn lerna run build

lint:
	yarn run lint

lint-fix:
	yarn run lint:fix
	yarn run format

test:
	yarn lerna run test

new-package:
	node ./scripts/new-package.js

commit:
	yarn cz

publish:
	./node_modules/.bin/lerna exec --concurrency 1 -- yarn semantic-release -e semantic-release-monorepo
