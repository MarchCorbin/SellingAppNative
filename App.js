import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, StatusBar, Dimensions, TouchableHighlight, Platform, View, SafeAreaView, Image, Button, Alert, TouchableOpacity, TextInput, Switch } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Notifications} from 'expo';
import logger from './app/utility/logger';

logger.start()


import AppLoading from 'expo-app-loading'

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import colors from './app/config/colors'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice'
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import {navigationRef} from './app/navigation/rootNavigation';
import { LongPressGestureHandler } from 'react-native-gesture-handler';



const Link = () => {
  const navigation = useNavigation()
 return( <Button
  title='Click'
  onPress={() => navigation.navigate('TweetDetails')} />
 )
}


const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
    title='View Tweets'
    onPress={() => navigation.navigate('TweetDetails', {id: 1})}
    />
  </Screen>
)

const TweetDetails = ({route}) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Stack = createStackNavigator()

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerStyle: {backgroundColor:'dodgerblue'},
    headerTintColor: 'white'
  }}>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetDetails' component={TweetDetails} options={{headerStyle: {backgroundColor:'tomato'},
    headerTintColor: 'white'
  }} />
  </Stack.Navigator>
)

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={StackNavigator} />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
)

export default function App() {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
   const user = await authStorage.getUser()
    if(user) setUser(user)
    console.log('USER', user)
  }

  if(!isReady) return (<AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={(error) => console.log(error)} />)


    const showNotification = () => {
      Notifications.scheduleLocalNotificationAsync({
        title: 'Congrats!',
        body: 'Your order was successfully placed!',
      }, {
        time: new Date().getTime() + 2000
      })
      console.log('hit')
    }
 
  return (
    // Local notifications working 
    // <Screen>
    //   <Button title='Press Me' onPress={showNotification} />
    // </Screen>

    // working app
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
    );
}



