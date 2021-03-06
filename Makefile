#
# Make -- the OG build tool.
# Add any build tasks here and abstract complex build scripts into `lib` that
# can be run in a Makefile task like `coffee lib/build_script`.
#
# Remember to set your text editor to use 4 size non-soft tabs.
#

BIN = node_modules/.bin

# Start the server
s:
	foreman run node index.js

# Ping the server in ~30rps
ping:
	foreman run node ping.js

# Commit and push to heroku
deploy:
	git add .
	git commit -a -m 'latest'
	git push origin master
	git push --force git@heroku.com:$(app).git

# Run all of the project-level tests, followed by app-level tests
test: assets
	$(BIN)/mocha $(shell find test -name '*.js' -not -path 'test/helpers/*')
	$(BIN)/mocha $(shell find components/*/test -name '*.coffee' -not -path 'test/helpers/*')
	$(BIN)/mocha $(shell find apps/*/test -name '*.js' -not -path 'test/helpers/*')

# Generate minified assets from the /assets folder and output it to /public.
assets:
	mkdir -p public/assets
	$(foreach file, $(shell find assets -name '*.js' | cut -d '.' -f 1), \
		$(BIN)/browserify $(file).js -t jadeify > public/$(file).js; \
		$(BIN)/uglifyjs public/$(file).js > public/$(file).min.js \
	)
	$(BIN)/stylus assets -o public/assets
	$(foreach file, $(shell find assets -name '*.styl' | cut -d '.' -f 1), \
		$(BIN)/sqwish public/$(file).css -o public/$(file).min.css \
	)

.PHONY: test assets
