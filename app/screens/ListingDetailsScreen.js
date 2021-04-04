import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import {Image} from 'react-native-expo-image-cache';

import App from '../../App';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem'
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailsScreen({route}) {
  const listing = route.params
  return (
  <KeyboardAvoidingView 
  behavior='position' 
  keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100} 
  >
    <Image style={styles.image} uri={listing.images[0].url} preview={{uri: listing.images[0].thumbnailUrl}} tint='light' />
    <View style={styles.detailsContainer}>
    <AppText style={styles.title}>{listing.title}</AppText>
    <AppText style={styles.price}>{listing.price}</AppText>
      <View style={styles.userContainer}>
        <ListItem
        image={require('../assets/CorbinMarch.jpg')}
        title="Corbin March"
        subTitle='7 listings'
        />
      </View>
      <ContactSellerForm listing={listing} />
    </View>
  </KeyboardAvoidingView>
 
  );
}

const styles = StyleSheet.create({
  image: {
    width:'100%',
    height:300,
  },
  detailsContainer: {
    padding:20,
  },
  title: {
    fontSize:24,
    fontWeight:'500'
  },
  price: {
    color: colors.secondary,
    fontWeight:'bold',
    fontSize:20,
    marginVertical:10,
  },
  userContainer: {
    marginVertical:40,
  }
})

export default ListingDetailsScreen;