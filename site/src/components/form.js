/** @jsx jsx */
import { jsx } from 'theme-ui';

const Form = () => (
  <form
    action="/thanks/"
    method="POST"
    name="contact"
    data-netlify-honeypot="full-name"
    data-netlify="true"
    sx={{
      marginTop: 6,
      overflow: 'visible',
      '.honeypot': {
        display: 'none',
      },
      label: {
        color: 'muted',
        display: 'block',
        fontSize: 0,
        fontWeight: 500,
        letterSpacing: '0.2em',
        lineHeight: 1,
        textTransform: 'uppercase',
      },
      'input,textarea': {
        backgroundColor: 'accent',
        border: 0,
        borderBottom: '2px solid',
        borderColor: 'grayAlpha',
        display: 'block',
        fontSize: 1,
        marginTop: 2,
        padding: 3,
        transition: '150ms border-color linear',
        ':focus': {
          borderColor: 'primary',
          outline: 0,
        },
      },
      input: {
        maxWidth: 400,
        width: '90vw',
      },
      textarea: {
        height: '10em',
        width: '100%',
      },
      button: {
        backgroundColor: 'primary',
        border: '2px solid transparent',
        borderRadius: '10px',
        color: 'background',
        display: 'inline-block',
        fontFamily: 'heading',
        fontSize: 2,
        fontWeight: 'heading',
        letterSpacing: '0.125em',
        lineHeight: 2,
        maxWidth: '100%',
        overflow: 'hidden',
        py: 0,
        px: 5,
        textDecoration: 'none',
        textTransform: 'uppercase',
        ':active,:hover,:focus': {
          borderColor: 'secondary',
          cursor: 'pointer',
          outline: 'none',
        },
      },
    }}
  >
    <div className="honeypot">
      <label htmlFor="full-name">
        Don’t fill out this field if you’re a human.
      </label>
      <input type="text" id="full-name" name="full-name" />
    </div>
    <label htmlFor="fname">Name</label>
    <input type="text" id="fname" name="name" required />
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="phone">Phone</label>
    <input type="tel" id="phone" name="phone" required />
    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" required />
    <button type="submit">Send Message</button>
    <input type="hidden" name="form-name" value="contact" />
  </form>
);

export default Form;
