import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const CalculatorButton = ({ onPress, underlayColor, styles, textToShow}) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={underlayColor}
    style={styles.numberContainer}
  >
    <Text style={styles.number}>{textToShow}</Text>
  </TouchableHighlight>
);

export default CalculatorButton;
