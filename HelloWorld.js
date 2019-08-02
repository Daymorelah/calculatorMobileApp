/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [numberOfClicks, handleNumberOfClicks] = useState(0);
  return (
   <View style={styles.body}>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        {`You are a ${numberOfClicks > 5 ? 'Superstar' : 'Rockstar'}`}
      </Text>
      <Text style={styles.sectionDescription}>
        {
          `You have clicked the button ${numberOfClicks} 
          ${(numberOfClicks > 1) ? 'times' : 'time'}`
        }
      </Text>
    </View>
    <View style={styles.sectionContainer}>
      <Button
        onPress={(arg) => { handleNumberOfClicks(numberOfClicks + 1); }}
        title='Click Me'
        color='#841584'
        accessibilityLabel='Click more than 5 times to change your reputation'
      />
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
