# gatsby-theme-blog-sanity

A Gatsby theme to pull blog posts from Sanity.io.

To install:

```sh
# in your Gatsby project, install the theme
yarn add gatsby-theme-blog-sanity
```

In your `gatsby-config.js`:
```js
module.exports = {
  __experimentalThemes: [
    'gatsby-theme-blog-sanity'
  ]
}
```

## Options

option        | default                                  | description
------------- | ---------------------------------------- | -----------------------------------------
projectId     |                                          | the Sanity project ID from Sanity Studio
dataset       |                                          | the Sanity dataset (usually "production" by default)
token         |                                          | a Sanity read token (see your [API settings](https://manage.sanity.io))
watchMode     | `true` in develop, `false` in production | when true, updates the UI in real time during development
overlayDrafts | `true` in develop, `false` in production | when true, displays draft content

### How to set options via `gatsby-config.js`

In your `gatsby-config.js`:

```js
module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-blog-sanity',
      options: {
        sanity: {
          projectId: 'xxx',
          dataset: 'production',
          token: 'xxx',
          watchMode: true,
          overlayDrafts: false,
        }
      }
    }
  ]
}
```
