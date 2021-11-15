/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { 
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import Header from './src/components/Header';
import ListItem from './src/components/ListItem';
import Form from './src/components/Form';
import Footer from './src/components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const App = () => {
  const [listOfItem, setListOfItem] = useState([
    { text: 'Выучить HTML+CSS', key: '1' },
    { text: 'Выучить JavaScript', key: '2' },
    { text: 'Выучить React', key: '3' },
    { text: 'Выучить React-Native', key: '4' }
  ]);
  const [text, setText] = useState('');
  const onChange = (newText) => {
    setText(newText);
  };
  const addItem = () => {
    setListOfItem((list) => {
      return [
        { text, key: Math.random().toString(36).substring(7) },
        ...list
      ];
    });
  };
  const deleteItem = (key) => {
    setListOfItem((list) => {
      return list.filter((item) => item.key !== key);
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <Form onChange={onChange} />
      <FlatList 
        data={listOfItem} 
        renderItem={({ item }) => (
          <ListItem el={item} deleteItem={deleteItem} />
        )} 
      />
      <Footer addItem={addItem} text={text} />
    </View>
  );
};

export default App;
