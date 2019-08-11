import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CalculatorButton from './Components/Calculator/CalculatorButton';
import OperationsButton from './Components/Calculator/OperationsButton';
import styles from './styles';

class App extends Component {
  static initialState = () => ({
    firstArg: 0,
    hasPrevCalc: false,
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
    numbersTyped: prevState.hasPrevCalc ? number : [...prevState.numbersTyped, number ],
  });

  handleNumberClicked = (number) => {
    if (number === '=') {
      const { firstArg, operation, tempArg } = this.state;
      const secondArgs = parseFloat(tempArg.join(''));
      let result = 0;
      if (operation === '+') result = (firstArg + secondArgs);
      if (operation === '/') result = (firstArg / secondArgs);
      if (operation === '-') result = (firstArg - secondArgs);
      if (operation === 'x') result = (firstArg * secondArgs);
      this.setState({ result: result || 0, operation: null, tempArg: [], hasPrevCalc: true });
    } else {
      this.setState((prevState) => ({
        ...this.displayNumbers(prevState, number),
        tempArg: [...prevState.tempArg, number],
        hasPrevCalc: false,
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
    const { numbersOnCalculator, operations, numbersTyped, result, hasPrevCalc } = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style = {styles.numbersTyped}>
            {(hasPrevCalc && numbersTyped) || (numbersTyped)}
          </Text>
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
                  underlayColor='#e6e6fa'
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
