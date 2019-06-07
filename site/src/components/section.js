import React from 'react';

const Section = ({ slug, children, _frontmatter, ...props }) => (
  <section id={slug} css={{ margin: 0, paddingTop: 60 }} {...props}>
    {children}
  </section>
);

export default Section;
