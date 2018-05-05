import React from 'react';
import styled from 'react-emotion';

export default ({ element, className, children }) => {
  const Grid = styled(element)`
    margin-left: auto;
    margin-right: auto;
    max-width: 1150px;
    width: 90%;

    @media (min-width: 800px) {
      display: grid;
      grid-template-columns:
        calc(150px + 1rem)
        calc(150px - 1rem)
        calc(90% - 300px)
        1fr;
    }

    @media (min-width: 1050px) {
      grid-template-columns:
        calc(150px + 1rem)
        calc(150px - 1rem)
        550px
        1fr;
    }
  `;

  return <Grid className={className}>{children}</Grid>;
};
