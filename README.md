Test

Look up

```
"scripts": {
    "release": "cross-env HUSKY_BYPASS=true lerna publish"
}
```

this is to bypass CI linting commit message

"conventionalCommits": true, aumatically update version

test

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
