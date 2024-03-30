import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  Text,
  Dimensions,
  Image,
} from 'react-native';

import ProductCard from './components/ProductCard/ProductCard';
import products_data from './products_data.json';

function App() {
  const renderProducts = ({item}) => <ProductCard products={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <FlatList
        numColumns={2}
        ListHeaderComponent={() => (
          <TextInput style={styles.text_input} placeholder="Ara..."></TextInput>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={products_data}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 7,
    padding: 10,
  },
  title: {
    color: '#96408D',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  text_input: {
    backgroundColor: '#EAEAEA',
    color: '#000000',
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
  },
});

export default App;
