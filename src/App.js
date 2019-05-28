import React from 'react';
import PropTypes from 'prop-types';

const App = props => {
  const { Component  } = props;

  console.log(Component);

  return <Component />;
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

export default App;
