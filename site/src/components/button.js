/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Button = ({ to, children, centered, ...props }) => {
  const isRelative = !to.startsWith('http');
  const Component = isRelative ? Link : 'a';
  const destinationProp = isRelative ? { to } : { href: to };

  return (
    <div
      sx={{
        marginTop: 5,
        textAlign: centered ? 'center' : 'inherit',
      }}
    >
      <Component
        sx={{
          backgroundColor: 'primary',
          border: '2px solid transparent',
          borderRadius: 10,
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
          // This is a specificity hack. I’m not proud.
          '&&': { px: 5 },
          textDecoration: 'none',
          textTransform: 'uppercase',
          ':active,:hover,:focus': {
            borderColor: 'secondary',
            cursor: 'pointer',
            outline: 'none',
          },
        }}
        {...destinationProp}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
};

export default Button;
