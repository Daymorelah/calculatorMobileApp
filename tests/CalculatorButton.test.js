import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import CalculatorButton from '../src/Components/Calculator/CalculatorButton';

describe('Unit test for the CalculatorButton component', () => {
  const props = {
    onPress: () => jest.fn(),
    underlayColor: '#f0f',
    styles: {},
    number: '',
  };
  it('should render on Text component and one TouchableHighLight component',() => {
    const wrapper = shallow(<CalculatorButton {...props} />);
    expect(wrapper.find('Text').length).toBe(1);
    expect(wrapper.find('TouchableHighlight').length).toBe(1);
  });
});