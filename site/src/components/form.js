import React from 'react';
import { css } from '@emotion/core';
import { colors, typography } from '../tokens';

const formStyles = css`
  margin-top: 3rem;
  overflow: visible;

  .honeypot {
    display: none;
  }

  label {
    color: ${colors.textLight};
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    line-height: 1;
    text-transform: uppercase;
  }

  input,
  textarea {
    background-color: ${colors.brandLight};
    border: 0;
    border-bottom: 2px solid ${colors.text}22;
    display: block;
    font-size: 16px;
    margin-top: 0.25rem;
    padding: 0.5rem;
    transition: 150ms border-color linear;

    &:focus {
      border-color: ${colors.brand};
      outline: 0;
    }
  }

  input {
    max-width: 400px;
    width: 90vw;
  }

  textarea {
    height: 10em;
    width: 100%;
  }

  button {
    background: ${colors.brand};
    border: 2px solid transparent;
    border-radius: 0.5rem;
    color: ${colors.white};
    display: inline-block;
    font-family: ${typography.heading.fontFamily};
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.125rem;
    line-height: 2;
    max-width: 100%;
    overflow: hidden;
    padding: 0 1rem;
    text-decoration: none;
    text-transform: uppercase;

    :active,
    :hover,
    :focus {
      border: 2px solid ${colors.brandDark};
      cursor: pointer;
      outline: none;
    }
  }
`;

const Form = () => (
  <form
    action="/thanks/"
    method="POST"
    name="contact"
    data-netlify-honeypot="full-name"
    data-netlify="true"
    css={formStyles}
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
