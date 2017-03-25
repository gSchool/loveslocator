import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('renders without crashing', () => {
  global.fetch = () => {};
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App')).to.have.length(1);
});
