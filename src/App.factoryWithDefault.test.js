import React from 'react';
import { shallow } from 'enzyme';
import App, { myUtilityFunction } from './App';

jest.mock('./App', () => ({
    default: () => 'MockApp',
    myUtilityFunction: () => 'foo',
}));

it('renders the mock React component', () => {
    /**
     * FAILS - Invariant Violation:
     * ReactShallowRenderer render():
     * Shallow rendering works only with custom components, but the provided element type was `object`.
     */
    expect(shallow(<App />).getElement()).not.toEqual(null);
});

it('runs the utility method correctly', () => {
    /**
     * PASSES
     */
    expect(myUtilityFunction()).toEqual('foo');
})
