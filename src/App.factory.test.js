import React from 'react';
import { shallow } from 'enzyme';
import App, { myUtilityFunction } from './App';

jest.mock('./App', () => 'MockApp');

it('renders without crashing', () => {
    expect(shallow(<App />).getElement()).not.toEqual(null);
});

it('runs the utility method correctly', () => {
    expect(myUtilityFunction()).toEqual('foo');
})
