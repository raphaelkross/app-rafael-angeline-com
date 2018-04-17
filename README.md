## JS Standard Project

This is a sample project filled with configuration files that will guarantee a much higher quality to any JS based project.

#### Installation

Run `npm install` to install all dependencies.

The file `package.json` contains all dependencies, special attention to `devDependencies` and `scripts` section.

#### Editor Configuration / EditorConfig

`.editorconfig` defines rules to unify the coding styles in different styles and IDEs. Specifically indent style, end of line and others.

Reference: http://editorconfig.org/

Recommended: install and configure an extension in your favorite editor.

#### Code Formatting / Prettier

`.prettierrc` uses Prettier, an opinated code formatting, this way we don't worry about setting our own code formatting rules.

Reference: https://prettier.io/

Recommended: install and configure an extension in your favorite editor.

#### Code Quality / ESLint

`.eslintrc.json` uses ESLint to warn us about bad practices in the code, like non-used vars and many others best practices.

Reference: https://eslint.org/

Recommended: install and configure an extension in your favorite editor.

#### Tests / Jest + Enzyme

Jest and Enzyme is used to test components, functions and Enzyme can render components to test what's being rendered.

Run with `npm test`.

`jest.config.js` and `jest.setup.js`

Reference: https://facebook.github.io/jest/

Reference: https://github.com/airbnb/enzyme

#### Continuous Integration / TravisCI

TravisCI is used to trigger tests against the code to ensure code that makes tests fail aren't merged.

`.travis.yml` is the file that controls the build.

Reference: https://travis-ci.org
