/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../src/App';

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
  describe('Unit test for the displayNumbers method', () => {
    const wrapper = shallow(<App />);
    const prevState = { hasPrevCalc: true, numbersTyped: [2,3] };
    const number = 4;
    it('should return the number passed when hasPrevCalc is true', () => {
      const expectedResult = { numbersTyped: number };
      const result = wrapper.instance().displayNumbers(prevState, number);
      expect(result).toEqual(expectedResult);
    });
    it('should return an array of numbers previously in numbersTyped and the number passed when hasPrevCalc is false', () => {
      prevState.hasPrevCalc = false;
      const expectedResult = { numbersTyped: [2,3,4] }
      const result = wrapper.instance().displayNumbers(prevState, number);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('Unit test for the handleNumberClicked', () => {
    const wrapper = shallow(<App />);
    it('should return the sum of firstArg and temArg when the user press the addition operation and clicks on "="', () => {
      wrapper.setState({ tempArg: ['6'], firstArg: 8, operation: '+' });
      const expectedResult = wrapper.state('firstArg') + parseFloat(wrapper.state('tempArg').join(''));
      wrapper.instance().handleNumberClicked('=');
      expect(wrapper.state('result')).toBe(expectedResult);
    });
    it('should return the difference of firstArg and temArg when the user press the addition operation and clicks on "="', () => {
      wrapper.setState({ tempArg: ['6'], firstArg: 8, operation: '-' });
      const expectedResult = wrapper.state('firstArg') - parseFloat(wrapper.state('tempArg').join(''));
      wrapper.instance().handleNumberClicked('=');
      expect(wrapper.state('result')).toBe(expectedResult);
    });
    it('should return the product of firstArg and temArg when the user press the addition operation and clicks on "="', () => {
      wrapper.setState({ tempArg: ['6'], firstArg: 8, operation: 'x' });
      const expectedResult = wrapper.state('firstArg') * parseFloat(wrapper.state('tempArg').join(''));
      wrapper.instance().handleNumberClicked('=');
      expect(wrapper.state('result')).toBe(expectedResult);
    });
    it('should return the quotient of firstArg and temArg when the user press the addition operation and clicks on "="', () => {
      wrapper.setState({ tempArg: ['6'], firstArg: 8, operation: '/' });
      const expectedResult = wrapper.state('firstArg') / parseFloat(wrapper.state('tempArg').join(''));
      wrapper.instance().handleNumberClicked('=');
      expect(wrapper.state('result')).toBe(expectedResult);
    });
    it('should display the number pressed when the "=" is not clicked', () => {
      wrapper.setState({ tempArg: [4,5,6] });
      const expectedResult = [4,5,6,7];
      wrapper.instance().handleNumberClicked(7);
      expect(wrapper.state('tempArg')).toEqual([...expectedResult]);
      expect(wrapper.state('numbersTyped')).toEqual(7);
    });
  });
  describe('Test the handleClearScreen method', () => {
    it('should set the state to the initial state when handleClearScreen is called', () => {
      const appInitialState = {
        firstArg: 0,
        hasPrevCalc: false,
        tempArg: [],
        operation: null,
        result: 0,
        numbersTyped: [],
        numbersOnCalculator: ['1','2','3','4','5','6','7','8','9','.','0','='],
        operations: ['DEL', '/', 'x', '-', '+'],
      };
      const wrapper = shallow(<App />);
      wrapper.instance().handleClearScreen('DEL');
      expect(wrapper.state()).toEqual(appInitialState);
    });
  });
  describe('Unit test for the handleOperation method', () => {
    const wrapper = shallow(<App />);
    it('should remove the last number entered when the DEL button is pressed', () => {
      wrapper.setState({ numbersTyped: [7,8,3] });
      const expectedStateForNumbersTyped = [7,8];
      wrapper.instance().handleOperation('DEL');
      expect(wrapper.state('numbersTyped')).toEqual(expectedStateForNumbersTyped);
    });
    it('should set the state of "operation" when an operation other than DEL is typed', () => {
      expect(wrapper.state('operation')).toBe(null);
      wrapper.instance().handleOperation('+');
      expect(wrapper.state('operation')).toBe('+');
    });
    it('should set the state of "firstArg" to the value of tempArg when an operation other than "DEL" is typed', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ tempArg: [3,4] });
      expect(wrapper.state('firstArg')).toBe(0);
      wrapper.instance().handleOperation('+');
      expect(wrapper.state('firstArg')).toBe(34);
    });
  });
});
