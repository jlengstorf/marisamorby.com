import React from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../components/shared/Layout';
import About from '../components/About/About';
import Process from '../components/Process/Process';
import Praise from '../components/Praise/Praise';
import Speaking from '../components/Speaking/Speaking';
import Contact from '../components/Contact/Contact';
import Context from '../utils/context';

export default class Index extends React.Component {
  state = {
    currentSection: 'about',
    updateCurrentSection: sectionID => {
      this.setState({ currentSection: sectionID });
    },
    refMap: {},
    updateRefMap: (sectionID, sectionRef) => {
      this.setState(state => ({
        refMap: {
          ...state.refMap,
          [sectionID]: sectionRef,
        },
      }));
    },
  };

  render() {
    const { location } = this.props;

    return (
      <Context.Provider key="app-context" value={this.state}>
        <Context.Consumer>
          {({ updateCurrentSection, updateRefMap }) => (
            <>
              <SEO />
              <Layout location={location}>
                <About
                  updateCurrentSection={updateCurrentSection}
                  updateRefMap={updateRefMap}
                />
                <Process
                  updateCurrentSection={updateCurrentSection}
                  updateRefMap={updateRefMap}
                />
                <Praise
                  updateCurrentSection={updateCurrentSection}
                  updateRefMap={updateRefMap}
                />
                <Speaking
                  updateCurrentSection={updateCurrentSection}
                  updateRefMap={updateRefMap}
                />
                <Contact
                  updateCurrentSection={updateCurrentSection}
                  updateRefMap={updateRefMap}
                />
              </Layout>
            </>
          )}
        </Context.Consumer>
      </Context.Provider>
    );
  }
}
