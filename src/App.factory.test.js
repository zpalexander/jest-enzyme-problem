import React from 'react';
import { shallow } from 'enzyme';
import App, { myUtilityFunction } from './App';

jest.mock('./App', () => 'MockApp');

it('renders the mock React component', () => {
    /**
     * PASSES
     */
    expect(shallow(<App />).getElement()).not.toEqual(null);
});

it('runs the utility method correctly', () => {
    /**
     * FAILS - TypeError: (0 , _App.myUtilityFunction) is not a function
     */
    expect(myUtilityFunction()).toEqual('foo');
})
