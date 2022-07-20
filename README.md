# shift

## Decorator Usage

This project uses experimental decorators. For this to function correctly, your tsconfig must 
have the following settings:

* _experimentalDecorators_ set to `true`
* _module_ set to ES6 (or possibly later)

## Developing

Lifecyle scripts in `package.json`:

* `build`: create types and 'lib' folder for depencies
* `clean`: remove all generated files
* `debug`: TBD
* `dev`: run the Shift application in development mode
* `dist`: create bundle or other distributable artifact
* `lint`: perform linting of all source code
* `package`: TBD
* `test`: execute all automated tests
* `watch`: TBD