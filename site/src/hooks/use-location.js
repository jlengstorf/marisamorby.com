// @see https://github.com/reach/router/issues/203#issuecomment-453941158
import { useState, useEffect } from 'react';
import { globalHistory } from '@reach/router';

const useLocation = () => {
  const initialState = {
    location: globalHistory.location,
    navigate: globalHistory.navigate,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const removeListener = globalHistory.listen(params => {
      const { location } = params;
      const newState = { ...initialState, location };
      setState(newState);
    });

    return () => {
      removeListener();
    };
  }, []);

  return state;
};

export default useLocation;
