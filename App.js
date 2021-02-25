import React from 'react';
import { StyleSheet, Text, StatusBar, Dimensions, TouchableHighlight, Platform, View, SafeAreaView, Image, Button, Alert, TouchableOpacity } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';




export default function App() {

  return (  
    <Screen>
   <ListItem title='My Title' subTitle='My Subtitle' ImageComponent={<Icon name='email' />} />
    </Screen>
    // <ListingDetailsScreen />
    // <View style={{
    //   backgroundColor:'#f8f4f4',
    //   padding:20,
    //   paddingTop:100
    //   }}>
    //     <Card title='Red Jacket for Sale' price='$100' image={require('./app/assets/jacket.jpg')} />
    // </View>
  // <WelcomeScreen />
  // <ViewImageScreen />
  // <MessagesScreen />
  // <MaterialCommunityIcons name="email" />
  );
}


