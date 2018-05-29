/*
 * NOTE: Gatsby auto-discovers all GraphQL queries and fragments, which means
 * there’s no need to import these fragments to components that will use them.
 */

// Loads required data to use the `MarkdownSection` component.
export const MarkdownFragment = graphql`
  fragment MarkdownFragment on MarkdownRemark {
    frontmatter {
      title
      image {
        childImageSharp {
          sizes(maxWidth: 540, traceSVG: { color: "#f6f1fa" }) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    }
    html
  }
`;
