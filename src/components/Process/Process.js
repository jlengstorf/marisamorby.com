import React, { Fragment } from 'react';
import { StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { css } from 'react-emotion';
import Section from '../shared/Section';

// This is kind of a hacky workaround so we can lazy-load images in this section.
const steps = [
  {
    title: 'Goal',
    imageName: 'cupcake',
    imageAlt: 'The goal: a cupcake!',
    description:
      'Identify the top goals I can help the client accomplish in our project.',
  },
  {
    title: 'Problem',
    imageName: 'fox-with-problems',
    imageAlt: 'Fox separated from its cupcake by a mountain.',
    description:
      'Discuss potential problems and blockers standing in the way of the goals. I use analytics data and on-the-ground research to identify and validate which problems are stopping the client from achieving their goals.',
  },
  {
    title: 'Solution',
    imageName: 'jetpack-fox',
    imageAlt: 'Fox using a jetpack to get past the problems.',
    description:
      'Create an actionable, detailed process for overcoming the problems and achieving the goal.',
  },
  {
    title: false,
    imageName: 'happy-fox',
    imageAlt: 'The happy fox with its cupcake.',
    description:
      'This process typically involves varying levels of research, working cross-functionally to get all teams on board, and executing the solutions we’ve agreed on to reach those goals.',
  },
];

const getImage = (images, step) => {
  const image = images.find(img => img.name === step.imageName);

  return (
    image && <Image sizes={image.childImageSharp.sizes} alt={step.imageAlt} />
  );
};

const processStyles = css`
  h3 {
    margin-top: 0;
  }
  .gatsby-resp-image-wrapper {
    margin-top: 3rem;
  }

  img {
    margin-top: 0;
  }
`;

export default ({ updateCurrentSection, updateRefMap }) => (
  <StaticQuery
    query={graphql`
      query ProcessSection {
        markdownRemark(fileAbsolutePath: { regex: "/process.md/" }) {
          # See ../../utils/graphql-fragments for details.
          ...MarkdownFragment
        }
        allFile(filter: { relativePath: { regex: "/process/.*.png$/" } }) {
          edges {
            node {
              name
              childImageSharp {
                sizes(maxWidth: 540, traceSVG: { color: "#fff" }) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const images = data.allFile.edges.map(({ node }) => ({ ...node }));

      return (
        <Section
          id="process"
          className={processStyles}
          updateCurrentSection={updateCurrentSection}
          updateRefMap={updateRefMap}
          observeOnScroll
          isTinted
        >
          <h2
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.frontmatter.title,
            }}
          />
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          {steps.map(step => (
            <Fragment key={step.title}>
              {getImage(images, step)}
              {step.title && <h3>{step.title}</h3>}
              <p>{step.description}</p>
            </Fragment>
          ))}
        </Section>
      );
    }}
  />
);
