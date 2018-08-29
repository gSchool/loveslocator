import React from 'react';
import ReactDOM from 'react-dom';
import LocationTypeBar from './LocationTypeBar';
import { expect } from 'chai';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  global.fetch = () => {};
  const wrapper = shallow(<LocationTypeBar />);
  expect(wrapper.find('h4')).to.have.length(1);
});
