import React, { createContext, useReducer, useContext } from 'react';

export const ScrollyNavContext = createContext();

const types = {
  updateSection: 'UPDATE_CURRENT_SECTION',
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.updateSection:
      return {
        ...state,
        currentSection: action.currentSection,
      };
    default:
      console.error(`Unknown action “${action.type}”`);
      return state;
  }
};

const initialState = {
  currentSection: '',
  refMap: {},
};

export const ScrollyNavProvider = ({ children }) => (
  <ScrollyNavContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ScrollyNavContext.Provider>
);

export const useScrollyNav = () => {
  const [{ currentSection }, dispatch] = useContext(ScrollyNavContext);

  const updateCurrentSection = ({ currentSection }) =>
    dispatch({ type: types.updateSection, currentSection });

  return { currentSection, updateCurrentSection };
};
