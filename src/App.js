import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.foo }
      </div>
    );
  }
}

App.defaultProps = {
  foo: 'hello',
}

App.propTypes = {
  foo: PropTypes.string,
}

export function myUtilityFunction() {
  return 'util';
}

export default App;
