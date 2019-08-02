
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  calculation: {
    height: '20%',
  },
  result: {
    color: 'black',
    backgroundColor: 'orange',
    height: '10%',
  },
  buttons: {
    backgroundColor: 'black',
    flexDirection: 'row',
    height: '70%',
    padding: 5,
  },
  numberSection:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 7,
    backgroundColor: 'black',
  },
  numberContainer: {
    height: '24%',
    width: '30%',
    backgroundColor:'steelblue',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
  },
  number: {
    color: 'white',
    textAlign: 'center',
    fontSize: 29,
    fontWeight: '900',
  },
  operationSection: {
    backgroundColor: '#111111',
    flex: 2,
  },
  operationContainer: {
    width: '100%',
    height: '19%',
    backgroundColor:'#3a3a3a',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 1,
  },
  operation: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
  },
  calcPadding: {
    width: 15,
    backgroundColor: 'lightblue',
  }
});

export default styles;

