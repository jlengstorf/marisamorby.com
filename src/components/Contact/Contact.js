import React from 'react';
import { StaticQuery } from 'gatsby';
import Section from '../shared/Section';
import Form from './Form';

export default ({ updateCurrentSection, updateRefMap }) => (
  <StaticQuery
    query={graphql`
      query ContactSection {
        markdownRemark(fileAbsolutePath: { regex: "/contact.md/" }) {
          # See ../../utils/graphql-fragments for details.
          ...MarkdownFragment
        }
      }
    `}
    render={data => (
      <Section
        id="contact"
        updateCurrentSection={updateCurrentSection}
        updateRefMap={updateRefMap}
        observeOnScroll
      >
        <h2
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.frontmatter.title,
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <Form action="/thanks/" />
      </Section>
    )}
  />
);
