/* eslint react/no-danger: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Header = styled('h1')`
  font-size: 9vw;
  grid-column: 2 / span 3;
  margin-bottom: 2rem;

  @media (min-width: 480px) {
    font-size: 3rem;
    margin-top: 2rem;
    padding-right: 4rem;

    &::after {
      padding-right: 4rem;
    }
  }
`;

const ImageWrapper = styled('div')`
  border-radius: 50%;
  display: block;
  grid-column: 1 / span 2;
  height: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.25rem;
  overflow: hidden;
  padding-bottom: calc(300px - 2rem);
  position: relative;
  width: calc(300px - 2rem);

  @media (min-width: 800px) {
    margin-right: 2rem;
  }
`;

const Image = styled(Img)`
  display: block;
  margin-top: 0;
  position: relative;
  z-index: 1;

  & img {
    margin-top: 0;
  }
`;

const Content = styled('section')`
  grid-column: 3 / span 1;

  & > div > :first-child {
    font-size: 125%;
    font-weight: 300;
  }
`;

const Label = styled('label')`
  display: block;
  font-size: 0.875rem;
  line-height: 1;
`;

const inputStyle = css`
  border: 2px solid var(--color-accent);
  border-radius: 0.25rem;
  display: block;
  font-size: 16px;
  margin-top: 0.25rem;
  padding: 0.5rem;
`;

const Input = styled('input')`
  ${inputStyle} width: 65%;
`;

const Textarea = styled('textarea')`
  ${inputStyle} height: 10em;
  width: 100%;
`;

const Button = styled('button')`
  background-color: var(--color-accent);
  border: 2px solid var(--color-accent);
  border-radius: 0.25rem;
  color: var(--color-lightest);
  cursor: pointer;
  font-family: var(--font-family-heading);
  font-size: 20px;
  padding: 0.5rem;
  transition: border-color 200ms linear;

  &:focus,
  &:hover,
  &:active {
    border-color: var(--color-accent-dark);
  }
`;

const HoneyPot = styled('div')`
  display: none;
`;

const Page = ({ data: { page }, location }) => {
  console.log('location.pathname', location.pathname);
  const pageContent = [
    <div key="page-content" dangerouslySetInnerHTML={{ __html: page.html }} />,
    location.pathname === '/contact/' && (
      <form
        key="contact-form"
        name="contact"
        method="POST"
        action="/thanks/"
        netlify-honeypot="full-name"
        data-netlify="true"
      >
        <HoneyPot>
          <Label for="full-name">
            Don’t fill out this field if you’re a human.
          </Label>
          <Input type="text" id="full-name" name="full-name" />
        </HoneyPot>
        <Label for="fname">Name</Label>
        <Input type="text" id="fname" name="name" required />
        <Label for="email">Email</Label>
        <Input type="email" id="email" name="email" required />
        <Label for="phone">Phone Number</Label>
        <Input type="tel" id="phone" name="phone" required />
        <Label for="message">Message</Label>
        <Textarea id="message" name="message" />
        <Button type="submit">Send Message</Button>
        <Input type="hidden" name="form-name" value="contact" />
      </form>
    ),
  ];

  return (
    <Layout location={location}>
      <SEO data={page} />
      <Header data-text={page.frontmatter.title}>
        {page.frontmatter.title}
      </Header>
      <ImageWrapper>
        <Image
          sizes={page.frontmatter.image.childImageSharp.sizes}
          alt={page.frontmatter.title}
        />
      </ImageWrapper>
      <Content>{pageContent}</Content>
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query PageQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            sizes(
              maxHeight: 300
              maxWidth: 300
              traceSVG: { color: "#d3f5fe" }
              duotone: { highlight: "#ffffff", shadow: "#39bbdf" }
            ) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
            resolutions {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;

export default Page;
