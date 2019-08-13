/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import OperationsButton from '../src/Components/Calculator/OperationsButton';

describe('Unit test for the operationsButton component', () => {
  const props = {
    onPress: () => jest.fn(),
    underlayColor: '#f0f',
    styles: {},
    operation: '',
    onLongPress: () => jest.fn()
  };
  it('should render on Text component and one TouchableHighLight component',() => {
    const wrapper = shallow(<OperationsButton {...props} />);
    expect(wrapper.find('Text').length).toBe(1);
    expect(wrapper.find('TouchableHighlight').length).toBe(1);
  });
});