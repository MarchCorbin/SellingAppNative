import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'authToken';
const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken)
  } catch (error) {
    console.log('Error storing token', error)
  }
}

const getToken = async() => {
  try {
    return await SecureStore.getItemAsync(key)
  } catch (error) {
    console.log('Error getting token', error)
  }
}

const removeToken = async() => {
  try {
    SecureStore.deleteItemAsync(key)
  } catch (error) {
    console.log('Error removing token', error)
  }
}

const getUser = async() => {
  const token =  getToken()
 return (token) ? jwtDecode(token) : null;
}

export default {
  getUser,
  getToken,
  removeToken,
  storeToken,
}