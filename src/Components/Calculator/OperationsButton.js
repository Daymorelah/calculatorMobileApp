import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const OperationsButton = ({
  onPress, underlayColor, styles, operation, onLongPress,
}) => (
  <TouchableHighlight
    onPress={() => onPress(operation)}
    underlayColor={underlayColor}
    style={styles.operationContainer}
    onLongPress={() => onLongPress(operation)}
  >
    <Text style={styles.operation}>{operation}</Text>
  </TouchableHighlight>
);

export default OperationsButton;
