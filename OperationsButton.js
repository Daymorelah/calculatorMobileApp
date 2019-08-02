import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const OperationsButton = ({ onPress, underlayColor, styles, operation}) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={underlayColor}
    style={styles.operationContainer}
  >
    <Text style={styles.operation}>{operation}</Text>
  </TouchableHighlight>
);

export default OperationsButton;
