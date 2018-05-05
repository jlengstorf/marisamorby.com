import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const position = css`
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
`;

const enter = css`
  ${position} opacity: 0.01;
`;

const enterActive = css`
  opacity: 1;
  transition: opacity 200ms ease-in;
`;

const exit = css`
  ${position} opacity: 1;
  z-index: 100;
`;

const exitActive = css`
  ${position} opacity: 0.01;
  transition: opacity 200ms ease-out;
  z-index: 100;
`;

const TransitionWrapper = styled('div')`
  margin: 0;
`;

class TransitionHandler extends React.Component {
  shouldComponentUpdate() {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    return this.props.children;
  }
}

const PageTransition = ({ children, location }) => (
  <TransitionGroup>
    <CSSTransition
      classNames={{ enter, enterActive, exit, exitActive }}
      timeout={{ enter: 200, exit: 200 }}
      key={location.pathname}
    >
      <TransitionHandler location={location}>
        {/* This div receives the classes for transitioning. */}
        <TransitionWrapper>{children}</TransitionWrapper>
      </TransitionHandler>
    </CSSTransition>
  </TransitionGroup>
);

PageTransition.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageTransition;
