import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import CalculatorButton from './CalculatorButton';
import OperationsButton from './OperationsButton';
import styles from './styles';

class App extends Component {
  state = {
    count: 0,
    buttonsToDisplay: ['1','2','3','4','5','6','7','8','9','.','0','='],
    operations: ['DEL', '/', 'X', '-', '+'],
  };
  showNumber = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    const { buttonsToDisplay, operations } = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text>22 X 43 + 4</Text>
        </View>
        <View style={styles.result}>
          <Text>22,400 {this.state.count}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numberSection}>
            {
              buttonsToDisplay.map((textToShow, index) => (
                <CalculatorButton
                  key={`button-${index}`}
                  onPress={this.showNumber}
                  underlayColor='orange'
                  styles={styles}
                  textToShow={textToShow}
                />
              ))
            }
          </View>
          <View style={styles.operationSection}>
            {
              operations.map((operation, index) => (
                <OperationsButton
                  key={`operation-${index}`}
                  onPress={this.handleOperation}
                  underlayColor='white'
                  styles={styles}
                  operation={operation}
                />
              ))
            }
          </View>
          <Text style={styles.calcPadding}></Text>
        </View>
      </View>
    );
  }
}

export default App;
