/* eslint-disable react/function-component-definition */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  main: {
    paddingTop: 30,
    height: 100,
    backgroundColor: 'silver',
  },
  text: {
    fontSize: 36,
    color: '#fefefe',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
};

export default Header;
