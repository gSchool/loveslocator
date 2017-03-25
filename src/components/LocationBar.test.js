import React from 'react';
import ReactDOM from 'react-dom';
import LocationBar from './LocationBar';
import { expect } from 'chai';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  global.fetch = () => {};
  const wrapper = shallow(<LocationBar />);
  expect(wrapper.find('h4')).to.have.length(1);
});
