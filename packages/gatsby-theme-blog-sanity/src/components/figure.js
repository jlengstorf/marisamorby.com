/** @jsx jsx */
import { jsx } from 'theme-ui';
import GatsbyImage from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import sanityConfig from '../sanity/config';

const Figure = ({ node }) => {
  const fluid = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 540 },
    sanityConfig,
  );

  // only use Gatsby images for JPG/PNG images
  const image = node.asset.extension.match(/(jpe?g|png)/) ? (
    <GatsbyImage fluid={fluid} alt={node.alt} />
  ) : (
    <img src={node.asset.url} alt={node.alt} />
  );

  return (
    <figure
      sx={{
        marginBottom: 4,
        mx: 'auto',
        img: {
          margin: 0,
          width: '100%',
        },
      }}
    >
      {image}
      {node.caption && (
        <figcaption
          sx={{
            color: 'muted',
            fontSize: 1,
            marginTop: 2,
            a: {
              color: 'muted',
            },
          }}
          dangerouslySetInnerHTML={{ __html: node.caption }}
        />
      )}
    </figure>
  );
};

export default Figure;
