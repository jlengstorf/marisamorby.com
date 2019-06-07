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
------------- | ---------------------------------------- | -----------
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
        projectId: 'xxx',
        dataset: 'production',
        token: 'xxx',
        watchMode: true,
        overlayDrafts: false,
      }
    }
  ]
}
```

### How to set options via environment variables

Create a `.env.development` in your Gatsby site root (next to `gatsby-config.js`) and add the following:

```env
# find these values at https://manage.sanity.io/
GATSBY_SANITY_PROJECT_ID=<sanity_project_id>
GATSBY_SANITY_DATASET=<sanity_dataset>
SANITY_READ_TOKEN=<sanity_read_token>
```

The theme is configured to look for these environment variables. **Important: options set in `gatsby-config.js` will override environment variables.**

**NOTE:** `watchMode` and `overlayDrafts` cannot be set via environment variables.