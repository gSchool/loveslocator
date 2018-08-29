import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantsBar from './RestaurantsBar';
import { expect } from 'chai';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  global.fetch = () => {};
  const wrapper = shallow(<RestaurantsBar />);
  expect(wrapper.find('h4')).to.have.length(1);
});
