## App RafaelAngeline.com

Next.js (https://github.com/zeit/next.js) based app version of my personal website https://rafaelangeline.com

This app integrates with WordPress REST API to get:

*   Blog
*	Category
*	Post
*	Project (Custom Post Type w/ Custom Fields)

It uses Storybook (https://storybook.js.org) to document all the components being used.

Editor configuration, linter, prettier and TravisCI configuration is based on https://github.com/raphaelkross/js-standard-project

### Commands

Before any command, use `npm install` to install all dependencies.

After that you may use different those commands:

*   `npm run dev` ~ start a local environment from Next.js
*   `npm run test` ~ run all Jest based tests
*   `npm run storybook` ~ start the local server to our components' documentation
