import React, {useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { StyleSheet, Text, StatusBar, Dimensions, TouchableHighlight, Platform, View, SafeAreaView, Image, Button, Alert, TouchableOpacity, TextInput, Switch } from 'react-native';

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
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import colors from './app/config/colors'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ImageInput from './app/components/ImageInput';



export default function App() {

const [firstName, setFirstName] = useState('')  
const [isNew, setIsNew] = useState(false)
const [imageUri, setImageUri] = useState()

const requestPermission = async() => {
  const {granted} = await ImagePicker.requestCameraRollPermissionsAsync()
  if(!granted) alert('You need to enable permission in order to access the library.')
}

useEffect(() => {
  requestPermission()
}, [])

const selectImage = async() => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync()
    if(!result.cancelled)
    setImageUri(result.uri)
  } catch (error) {
    console.log('Error reading image', error)
  }
}

  return (  
<Screen>
  <Button title='Select Image' onPress={selectImage} />
  <Image source={{uri: imageUri}} style={{width:200, height:200}} />
  <ImageInput imageUri={imageUri} />
</Screen>  );
}



