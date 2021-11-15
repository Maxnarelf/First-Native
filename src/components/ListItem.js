/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#669BAC',
    borderWidth: 2,
    width: '80%',
    marginLeft: '10%',
    marginTop: 5,
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
});

const ListItem = ({ el, deleteItem }) => {
  return (
    <TouchableOpacity onLongPress={() => deleteItem(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  el: PropTypes.shape({
    text: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
}; 

export default ListItem;
