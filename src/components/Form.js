import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  TextInput, 
  View 
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderColor: '#000',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '10%',
    width: '80%',
  },
});

// eslint-disable-next-line react/function-component-definition
const Form = ({ onChange }) => {
  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChange} placeholder="Введите задачу" />
    </View>
  );
};

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
}; 

export default Form;
