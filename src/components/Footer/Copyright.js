import React from 'react';
import styled from 'react-emotion';

const Copyright = styled('p')`
  margin-top: 0.75rem;
  text-align: center;
`;

export default ({ children }) => <Copyright>{children}</Copyright>;
