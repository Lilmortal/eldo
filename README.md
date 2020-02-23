# Eldo (WIP)

## What is this project about

It is designed to be a simple 2 players game that is sort of like the Poker, but with the twist of math in it. The idea is each player
receives 5 random number cards and 3 random arithmetic operations (+, -, \*, /, %).
A random number will be placed in the middle of the table, and the main goal is to try and match that number as closely as possible via your deck, getting more points the closer they are.
After 5 cards are placed, the person with the most points win.

## How was this project structured

Eldo is a mono-repo project which consists of a modular component repositories, each can be extracted as a seperate package
themselves. This is mainly for learning purposes to see what are the benefits/disadvantages of such a design.

The benefit is that each component can be shared by other repositories, as well as being able to be deployed independently. This is
very similar to microservices. All future projects are able to cherry pick what internal packages they want.
The disadvantage however is that the project can get very huge, very easily. I have to resort to upgrading my CircleCI machine from 4gb to 6gb as it ran out of memory running the tests. When you run all tests, you lose the benefit of being able to run which specific test in Jest, as you have to run `jest` in all the common components. The same old familiar files are also seen duplicated everywhere, e.g. `eslintrc.js`, `postcss.config.js` etc which is imported from a common linting package, which is just pure noise.

To me, the disadvantage far outweights the advantage. In the future, I will refactor this project to contain a shared common component repository with shared CSS styles and utils included, an ui-token library, and a shared config repository.

## Prerequisites
* Node 10+
* Yarn 1.0+

## Installation

Clone this project and just run `yarn`. The benefit of the yarn workspaces is that it hoisted all shared node_modules packages up to the root. The reason why I still used lerna is because it provides the benefit of me being able to run a common script to all packages. e.g. `lerna run test` will trigger all test scripts. If it does not have `test` in its script, it will safely ignore it unlike yarn workspaces which cause an error. Lerna also allows each packages to have its own version. e.g. `Button` when committed will automatically update its own version and CHANGELOG via the commit message. It will also implicitly upgrade `Button` dependencies on all packages and upgrade it's own minor version.

## Deployment

Deployments are done automatically when it is being pushed to master. CircleCI will make sure the packages are safely updated in our own private Verdaccio repository which is currently being hosted in Digital Ocean, as well as deploying it to AWS Cloudfront.
Only the master branch are allowed to deploy the project, as well as being a specific NPM user.

### NOTE that this project is still in progress.

## TODO: Move this somewhere, this is for my own understanding of what does this `tsconfig` do.

```
  {
  "compilerOptions": {
  // Do not produce outputs. Used only when you enter `tsc` and it's for type checking, not compilation.
  "noEmit": true,
  "strict": true,
  // Change the JSX depending on what is specified.
  // if `preserve`, `<div />` will output `<div />`.
  // if `react`, `<div />` will output `React.createElement("div")`.
  // https://www.typescriptlang.org/docs/handbook/jsx.html
  "jsx": "react",
  // Emit which javascript version. e.g. () => {} will return function() {} if target is `es5`, but it's `() => {}`
  // if `es6`. Do we need babel then? Yes, the best practice is to target `es6` or above and use babel.
  // The reason is because for...of... will not work due to `Symbol.iterator` if target to `es5` as it will be
  // transpiled to a basic for loop.
  // https://stackoverflow.com/questions/43287032/typescript-target-and-babel
  "target": "esnext",
  // How `import` will get transpiled. `esnext` means support for features that are not in official spec yet.
  // if `CommonJS` it just means `import` will become `module.exports` and `require()`
  "module": "esnext",
  // This allows to go to definition
  "moduleResolution": "node",
  // This allows us to `import React` instead of `import * as React`.
  "esModuleInterop": true,
  "removeComments": true,
  // rootDir is for the location of the source code. if not explicitly set, defaults to the directory containing the tsconfig file
  "rootDir": ".",
  // This must be specified if "paths" is. baseUrl is for non-relative modules import.
  "baseUrl": ".",
  // Sometimes you want to map correctly or avoid `import from '../../../../`.
  "paths": {
  "@eldo/*": ["packages/@eldo/*"],
  "*": ["node_modules", "packages"]
  }
  },
  "awesomeTypescriptLoaderOptions": {
  "useBabel": true,
  "babelCore": "@babel/core"
  },
  "include": ["packages", "jest-dom/extend-expect"],
  "exclude": ["node_modules", "dist"]
  }
```

```
{
  "extends": "../../../../tsconfig.build.json",
  "compilerOptions": {
    // Enable composite to have this:
    // The rootDir setting, if not explicitly set, defaults to the directory containing thetsconfig file
    // All implementation files must be matched by an include pattern or listed in the files array. If this constraint is violated, tsc will inform you which // /// files weren’t specified declaration must be turned on
    "composite": true,
    // Generate `.d.ts` files.
    "declaration": true,
    "declarationDir": "./dist",
    "baseUrl": "./"
  },
  "exclude": ["./dist"],
  "include": ["."]
}
```
