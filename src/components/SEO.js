import path from 'path';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import pathOr from 'ramda/src/pathOr';
import { site, social } from '../config';

const getSchemaOrgJSONLD = ({
  article,
  url,
  title,
  image,
  description,
  datePublished,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: site.title.default,
    },
  ];

  return article
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: site.title.default,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: site.owner,
          },
          publisher: {
            '@type': 'Organization',
            url: site.url,
            logo: site.logo,
            name: site.owner,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': site.url,
          },
          datePublished,
        },
      ]
    : schemaOrgJSONLD;
};

const SEO = ({ data, article }) => {
  const datePublished =
    article && pathOr(false, ['frontmatter', 'datePublished'], data);
  const title = pathOr(site.title.default, ['frontmatter', 'title'], data);
  const description = pathOr(
    data.excerpt || site.description,
    ['frontmatter', 'description'],
    data,
  );
  const imagePath = pathOr(
    site.image,
    ['frontmatter', 'image', 'childImageSharp', 'resolutions', 'src'],
    data,
  );
  const image = path.join(site.url, imagePath);

  const slug = pathOr(false, ['frontmatter', 'slug'], data);
  const url = slug ? path.join(site.url, slug) : site.url;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    article,
    url,
    title,
    image,
    description,
    datePublished,
  });

  return (
    <Helmet title={title}>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {article ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={social.facebook.appID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={social.twitter.username} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.propTypes = {
  article: PropTypes.bool,
  data: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }).isRequired,
};

SEO.defaultProps = {
  article: false,
};

export default SEO;
