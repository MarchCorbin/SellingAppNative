import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem'

import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparatorComponent from  '../components/ListItemSeparator'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  },
]

function AccountScreen(props) {
  return (
  <Screen style={styles.screen}>
    <View style={styles.container}>
    <ListItem
    title="Corbin March"
    subTitle='Learning Native with Corbin'
    image={require('../assets/CorbinMarch.jpg')}
    style={{height:70,width:70,borderRadius:35}}
    />
    </View>
    <View style={styles.container}>
      <FlatList 
      data={menuItems}
      keyExtractor={(menuItem) => menuItem.title}
      ItemSeparatorComponent={ListItemSeparatorComponent}
      renderItem={({item}) => (<ListItem
        title={item.title}
        IconComponent={
        <Icon
          name={item.icon.name}
          backgroundColor={item.icon.backgroundColor}
          />}
        />)}
      />
    </View>
    <ListItem 
    title='Log Out'
    IconComponent={
      <Icon name='logout' backgroundColor='orange' />
    }
    />
  </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical:20,
  },
  screen: {
    backgroundColor: colors.light
  },
  profile: {
    height:70,
    width:70,
    borderRadius:35
  }
})

export default AccountScreen;