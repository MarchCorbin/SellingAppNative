import React, {useState, useEffect}from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik'
import * as Yup from 'yup'

import authApi from '../api/auth';
import authStorage from '../auth/storage'
import Screen from  '../components/Screen'
import AppFormField from '../components/AppFormField'
import SubmitButton from '../components/SubmitButton'
import AppForm from '../components/AppForm'
import ErrorMessage from '../components/ErrorMessage'
import useAuth from '../auth/useauth'

const validationSchema = Yup.object().shape({
email: Yup.string().required().email().label("Email"),
password: Yup.string().required().min(4).label("Password")
})


function LoginScreen(props) {
  const auth = useAuth()
  const {logIn} = useAuth()
  const [loginFailed, setLoginFailed] = useState(false)


  const handleSubmit = async({email, password}) => {
   const result = await authApi.login(email, password)
   if(!result.ok) return setLoginFailed(true)
   setLoginFailed(false)
   auth.logIn(result.data)
   authStorage.storeToken(result.data)
  }

  return (
<Screen style={styles.container}>
    <Image style={styles.logo} source={require('../assets/logo-red.png')} />
    <AppForm
    initialValues={{email: '', password: ''}}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    >
      <ErrorMessage error='Invalid email or password.' visible={loginFailed} />
      <AppFormField
        name='email'
        autoCapitalize='none'
        autoCorrect={false}
        keyBoardType='email-address'
        icon='email'
        placeholder='Email'
        textContentType='emailAddress'
      />
      <AppFormField
      name='password'
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='Password'
        secureTextEntry
        textContentType='password'
      />
     <SubmitButton title='Login' />
    </AppForm>
</Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  logo: {
    width:80,
    height:80,
    alignSelf: 'center',
    marginTop:50,
    marginBottom:20,
  }
})

export default LoginScreen;