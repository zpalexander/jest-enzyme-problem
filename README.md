This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# User Story

As a developer testing my frontend React application code with Jest and Enzyme, I need to be able to easily mock all exports from a module that exports both a default component and a named function at the same time.

# Attempted Solutions

In the simplest case, modules containing React components typically export one default component per module, e.g.:

```jsx
// src/App.js
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

export default App;
```

### jest.mock() with a factory function

Components such as these can be mocked with Jest using `jest.mock('module-name', factoryFunction)`, e.g.:

```jsx
// src/App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';'

jest.mock('./App', () => 'MockApp');

expect(shallow(<App />).getElement()).not.toEqual(null); // PASSES - mock works correctly
```

This method does not work, however, when `App.js` exports a named export in addition to the default component export. See [the App.js file for an example](src/App.js).

Using the code from above still mocks the component, but makes the named export undefined. See the example in [App.factory.test.js](src/App.factory.test.js);

### mockImplementation() method

Jest provides a mockImplementation() method on mocked imports. This is the solution I would expect to work, however, calling .mockImplementation() on the default import does not seem to work. As you can see in [App.mockImplementation.test.js](src/App.mockImplementation.test.js), calling .mockImplementation() on the default import does not throw an error, but on attempting to render the mocked component results in null.

### jest.mock() with a factory function where default is set

I've also tried using the factory function method to explicitly define both the default and named import, but I get an error when trying to render the component. See [App.factoryWithDefault.test.js](src/App.factoryWithDefault.test.js)


# Question

Is what I'm trying to do allowed in Jest? When I substitute the component for a regular JavaScript function, this mocking functionality works fine. [See this StackOverflow question that I opened on the subject.](https://stackoverflow.com/questions/48797693/jest-mock-es6-module-with-both-default-and-named-export/48798114#48798114)

Why doesn't this work when the default export is a component?
