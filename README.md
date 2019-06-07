# MarisaMorby.com

This is Marisa Morby’s website source code. It’s made of two parts:

1. A Gatsby theme that loads blog posts from Sanity.io and creates pages for them
2. A Gatsby site that implements and extends the theme to include the rest of the pages and styling

## Development Instructions

This repo is a [Yarn workspace](https://yarnpkg.com/en/docs/workspaces). This makes it easier to develop the site while tweaking the underlying theme.

To run the site locally:

```sh
# clone the repo and move into the project
git clone git@github.com:jlengstorf/marisamorby.com.git
cd marisamorby.com/

# install dependencies
yarn

# start the development server
yarn workspace site develop
```
