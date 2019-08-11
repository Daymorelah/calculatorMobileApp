import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const CalculatorButton = ({ onPress, underlayColor, styles, number}) => (
  <TouchableHighlight
    onPress={() => onPress(number)}
    underlayColor={underlayColor}
    style={styles.numberContainer}
  >
    <Text style={styles.number}>{number}</Text>
  </TouchableHighlight>
);

export default CalculatorButton;
