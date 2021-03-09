import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/AppForm'
import AppFormField from '../components/AppFormField'
import AppFormPicker from '../components/AppFormPicker'
import SubmitButton from '../components/SubmitButton'
import Screen from  '../components/Screen'
import CategoryPickerItem from '../components/CategoryPickerItem'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category")
})

const categories = [
  { label: "Furniture", value: 1, backgroundColor:'red', icon:'apps' },
  { label: "Clothing", value: 2, backgroundColor:'green', icon:'email' },
  { label: "Camera", value: 3, backgroundColor:'blue', icon:'lock' }
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
        width={120}
       />
       <AppFormPicker 
        items={categories}
        PickerItemComponent={CategoryPickerItem}
        name='category'
        placeholder='Category'
        width='50%'
        numberOfColumns={3}
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