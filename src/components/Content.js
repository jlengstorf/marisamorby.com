import styled from 'react-emotion';
import { button } from '../utils/style';

const Content = styled('section')`
  & > div > :first-child {
    font-size: 125%;
    font-weight: 300;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5rem;

    + * {
      margin-top: 0.5rem;
    }
  }

  li {
    margin-top: 0.5rem;
  }

  .button {
    ${button};
  }

  @media (min-width: 800px) {
    grid-column: 3 / span 1;
  }
`;

export default Content;
