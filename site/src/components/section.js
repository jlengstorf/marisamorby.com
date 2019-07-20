/** @jsx jsx */
import { jsx } from 'theme-ui';

const Section = ({ slug, children, ...props }) => (
  <section id={slug} sx={{ margin: 0, paddingTop: 6 }} {...props}>
    {children}
  </section>
);

export default Section;
