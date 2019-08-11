import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CalculatorButton from './CalculatorButton';
import OperationsButton from './OperationsButton';
import styles from './styles';

class App extends Component {
  static initialState = () => ({
    firstArg: 0,
    secondArg: 0,
    tempArg: [],
    operation: null,
    result: 0,
    numbersTyped: [],
  });

  state = {
    numbersOnCalculator: ['1','2','3','4','5','6','7','8','9','.','0','='],
    operations: ['DEL', '/', 'x', '-', '+'],
    ...App.initialState(),
  };

  displayNumbers = (prevState, number) => ({
    numbersTyped: [...prevState.numbersTyped, number ],
  });

  handleNumberClicked = (number) => {
    if (number === '=') {
      const { firstArg, operation, tempArg, secondArg } = this.state;
      const secondArgs = parseFloat(tempArg.join(''));
      let result = 0;
      if (operation === '+') result = (firstArg + secondArgs);
      if (operation === '/') result = (firstArg / secondArgs);
      if (operation === '-') result = (firstArg - secondArgs);
      if (operation === 'x') result = (firstArg * secondArgs);
      this.setState({ result, operation: null, tempArg: [], numbersTyped: [] });
    } else {
      this.setState((prevState) => ({
        ...this.displayNumbers(prevState, number),
        tempArg: [...prevState.tempArg, number],
      }));
    }
  }

  handleOperation = (operation) => {
    if (operation === 'DEL') {
      this.setState((prevState) => {
        prevState.numbersTyped.pop();
        prevState.tempArg.pop();
        return { numbersTyped: prevState.numbersTyped };
      });
    } else {
      this.setState((prevState) => {
        const argToSet = (prevState.operation !== null) ? 'secondArg' : 'firstArg';
        return({
          ...this.displayNumbers(prevState, operation),
          [argToSet]: parseFloat(prevState.tempArg.join('')),
          operation: operation,
          tempArg: [],
        });
      });
    }
  }

  handleClearScreen = (operation) => {
    if(operation === 'DEL') {
      this.setState({ ...App.initialState() });
    }
  }

  render() {
    const { numbersOnCalculator, operations, numbersTyped, result } = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style = {styles.numbersTyped}>{numbersTyped}</Text>
        </View>
        <View style={styles.result}>
          <Text style = {styles.resultText}>{result}</Text>
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
                  onLongPress={this.handleClearScreen}
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
