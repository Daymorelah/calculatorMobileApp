/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import AppComponent, { App } from '../src/App';

describe('Tests for the App Component', () => {
  describe('Unit tests for the App Component', () => {
    const wrapper = shallow(<App />);
    it('should render 12 calculator buttons', () => {
      expect(wrapper.find('CalculatorButton').length).toBe(12);
    });
    it('should render 5 operation buttons', () => {
      expect(wrapper.find('OperationsButton').length).toBe(5);
    });
  });
});
