import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 10,
    height: Dimensions.get('window'). height / 4,
    margin: 10
  },
  title: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 0,
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  price: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold'
  },
  status:{
    color: '#FF0000',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    marginLeft: 10,
    marginBottom: 5,
    

  }
});
