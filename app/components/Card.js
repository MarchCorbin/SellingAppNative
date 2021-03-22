import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors';
import AppText from './AppText/AppText';

function Card({title, subTitle, price, imageUrl, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius:15,
    backgroundColor: colors.white,
    marginBottom:20,
    overflow:'hidden'
  },
  image: {
    width:'100%',
    height:200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom:7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  }
})

export default Card;