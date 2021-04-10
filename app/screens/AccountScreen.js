import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem'

import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparatorComponent from  '../components/ListItemSeparator'
import routes from '../navigation/routes';
import useAuth from '../auth/useauth';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }, targetScreen: routes.LISTINGS
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
    targetScreen: routes.MESSAGES
  },
]

function AccountScreen({navigation}) {
const {user, logOut} = useAuth()


  return (
  <Screen style={styles.screen}>
    <View style={styles.container}>
    <ListItem
    title={user.name}
    subTitle={user.email}
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
          onPress={() => navigation.navigate(item.targetScreen)}
        />)}
      />
    </View>
    <ListItem 
    title='Log Out'
    IconComponent={
      <Icon name='logout' backgroundColor='orange' />
    }
    onPress={() => logOut()}
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