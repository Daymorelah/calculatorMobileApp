import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import CalculatorButton from './CalculatorButton';
import OperationsButton from './OperationsButton';
import styles from './styles';

class App extends Component {
  state = {
    numbersTyped: [],
    numbersOnCalculator: ['1','2','3','4','5','6','7','8','9','.','0','='],
    operations: ['DEL', '/', 'X', '-', '+'],
    firstArg: 0,
    secondArg: 0,
    tempArg: [],
    operation: null,
    result: 0,
  };

  displayNumbers = (prevState, number) => ({
    numbersTyped: [...prevState.numbersTyped, number ],
  });

  handleNumberClicked = (number) => {
    if (number === '=') {
      const { firstArg, operation, tempArg, secondArg } = this.state;
      const secondArgs = parseInt(tempArg.join(''), 10);
      console.log('typeof 1st arg is ==> ', typeof (firstArg), firstArg);
      console.log('typeof 2nd arg is ==> ', typeof (secondArg), secondArg);
      let result = 0;
      if (operation === '+') result = (firstArg + secondArgs);
      if (operation === '/') result = (firstArg / secondArgs);
      if (operation === '-') result = (firstArg - secondArgs);
      if (operation === 'X') result = (firstArg * secondArgs);
      this.setState({ result, operation: null, tempArg: [], numbersTyped: [] });
    } else {
      this.setState((prevState) => ({
        ...this.displayNumbers(prevState, number),
        tempArg: [...prevState.tempArg, number],
      }));
    }
  }

  handleOperation = (operation) => {
    this.setState((prevState) => {
      const argToSet = (prevState.operation !== null) ? 'secondArg' : 'firstArg';

      return({
        ...this.displayNumbers(prevState, operation),
        [argToSet]: parseInt(prevState.tempArg.join(''), 10),
        operation: operation,
        tempArg: [],
      });
    });
  }

  render() {
    const { numbersOnCalculator, operations, numbersTyped, result } = this.state;
    console.log('result, 1st 2nd is now ==> ', result, this.state.firstArg, this.state.secondArg);
    return(
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text>{numbersTyped}</Text>
        </View>
        <View style={styles.result}>
          <Text>{result}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numberSection}>
            {
              numbersOnCalculator.map((number, index) => (
                <CalculatorButton
                  key={`button-${index}`}
                  onPress={this.handleNumberClicked}
                  underlayColor='orange'
                  styles={styles}
                  number={number}
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
