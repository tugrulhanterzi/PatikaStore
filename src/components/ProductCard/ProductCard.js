import React from 'react';
import {View, Text, Image, StyleSheet, useState} from 'react-native';
import styles from './ProductCard.style'

const ProductCard = ({products}) => {
  const { inStock } = products; 

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: products.imgURL}} />
      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.price}>{products.price}</Text>
      <Text style={styles.status}>
        {inStock ? '' : 'STOKTA YOK'} {/* inStock durumuna göre uygun yazıyı görüntüleyin */}
      </Text>
    </View>
  );
};

export default ProductCard;
