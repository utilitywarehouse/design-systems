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

test:
	yarn lerna run test

commit:
	yarn cz

publish:
	echo "TODO"
	# yarn lerna exec --concurrency 1 -- yarn --no-install semantic-release -e semantic-release-monorepo
