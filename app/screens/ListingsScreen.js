import React from 'react';
import { FlatList , StyleSheet } from 'react-native';

import Screen from  '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../navigation/routes'

function ListingsScreen({navigation}) {

const listings = [
  {
    id:1,
    title:'Red Jacket for Sale',
    price:100,
    image: require('../assets/jacket.jpg')
  },
  {
    id:2,
    title:'Couch',
    price:1200,
    image: require('../assets/couch.jpg')
  },
];

  return (
<Screen style={styles.screen}>
    <FlatList 
    data={listings}
    keyExtractor={listing => listing.id.toString()}
    renderItem={({item}) => 
      <Card 
      title={item.title}
      subTitle={"$" + item.price}
      image={item.image}
      onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
      />
  }
    />
</Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20,
    backgroundColor: colors.light,
  }
})

export default ListingsScreen;