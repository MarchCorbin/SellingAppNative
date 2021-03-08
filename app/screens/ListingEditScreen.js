import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/AppForm'
import AppFormField from '../components/AppFormField'
import AppFormPicker from '../components/AppFormPicker'
import SubmitButton from '../components/SubmitButton'
import Screen from  '../components/Screen'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category")
})

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 }
]

function ListingEditScreen(props) {
  return (
   <Screen>
     <AppForm
      initialValues={{
        title:"", price:"", description:"", category:null,
     }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
     >
       <AppFormField maxLength={255} name='title' placeholder="Title" />
       <AppFormField 
        keyboardType='numeric'
        maxLength={8}
        name='price'
        placeholder='Price'
       />
       <AppFormPicker 
        items={categories}
        name='category'
        placeholder='Category'
       />
       <AppFormField 
        maxLength={255}
        multiline
        name='description'
        numberOfLines={3}
        placeholder="Description"
       />
       <SubmitButton title="Post" />
     </AppForm>
   </Screen>
  );
}

export default ListingEditScreen;