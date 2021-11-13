import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 50,
  }
});

const App = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Hello</Text>
    </View>
  );
};

export default App;
