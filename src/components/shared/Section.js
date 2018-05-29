import React from 'react';
import { css } from 'react-emotion';
import Image from 'gatsby-image';
import { color, sizing } from '../../utils/style';

const sectionStyles = css`
  margin: 0 auto;
  max-width: ${sizing.maxWidth};
  padding: 3rem 0;
  width: ${sizing.width};

  @media (min-width: 768px) {
    padding: 5rem 0;
  }

  h2 {
    font-size: 2.5rem;

    em {
      color: ${color.accent};
      font-style: normal;
    }
  }
`;

const tinted = css`
  position: relative;

  ::after {
    background-color: ${color.accentLight};
    bottom: 0;
    content: ' ';
    left: -5vw;
    position: absolute;
    right: -5vw;
    top: 0;
    transform: skewY(-2deg);
    z-index: -1;

    @media (min-width: ${sizing.maxWidth}) {
      left: calc((100vw - ${sizing.maxWidth}) / 2 * -1);
      right: calc((100vw - ${sizing.maxWidth}) / 2 * -1);
    }
  }
`;

export default class Section extends React.Component {
  static defaultProps = {
    observeOnScroll: false,
    updateCurrentSection: () => {},
    updateRefMap: () => {},
  };

  constructor(props) {
    super(props);

    this.sectionRef = React.createRef();
  }

  componentDidMount() {
    if (!this.props.observeOnScroll) {
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(({ target, boundingClientRect }) => {
          if (boundingClientRect.top <= 400 && boundingClientRect.top >= 0) {
            const section = target.parentNode;
            this.props.updateCurrentSection(section.id);
          }
        });
      },
      { rootMargin: '-200px 0px 0px 0px', threshold: 0.02 },
    );

    this.observer.observe(this.sectionRef.current);

    this.props.updateRefMap(
      this.sectionRef.current.parentNode.id,
      this.sectionRef.current.parentNode,
    );
  }

  render() {
    const {
      className,
      title,
      id = '',
      imageSizes = false,
      html,
      children,
      isTinted = false,
      isRawHTML = false,
    } = this.props;

    return (
      <section
        className={`${sectionStyles} ${className} ${isTinted && tinted}`}
        id={id}
      >
        {imageSizes && <Image sizes={imageSizes} alt={title} />}
        <h2 dangerouslySetInnerHTML={{ __html: title }} ref={this.sectionRef} />
        {isRawHTML ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <>{children}</>
        )}
      </section>
    );
  }
}
