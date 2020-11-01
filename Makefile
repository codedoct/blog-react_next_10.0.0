run_setup:
	cp .env.example .env
	npm install

run_local:
	npm run dev

run_lint:
	./node_modules/.bin/eslint .
