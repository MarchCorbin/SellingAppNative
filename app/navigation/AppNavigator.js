import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

import AccountScreen from '../screens/AccountScreen'
import expoPushTokensApi from '../api/expoPushTokens'
import ListingEditScreen from '../screens/ListingEditScreen'
import ListingsScreen from '../screens/ListingsScreen'
import FeedNavigator from '../navigation/FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './newListingButton'
import routes from '../navigation/routes'
import navigation from './rootNavigation';
import useNotifications from '../hooks/useNotifications'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  useNotifications();

  return (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={FeedNavigator} options={{
      tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='home' color={color} size={size} />
    }} />
    <Tab.Screen name='ListingEdit' component={ListingEditScreen} options={({navigation}) => ({
      tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
      tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='plus-circle' color={color} size={size} />
    })} />
    <Tab.Screen name='Account' component={AccountNavigator} options={{
      tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='account' color={color} size={size} />
    }} />
  </Tab.Navigator>
)}

export default AppNavigator;
