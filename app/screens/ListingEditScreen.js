import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';


import AppForm from '../components/AppForm'
import AppFormField from '../components/AppFormField'
import AppFormPicker from '../components/AppFormPicker'
import SubmitButton from '../components/SubmitButton'
import Screen from  '../components/Screen'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/FormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, 'Please select at least one image.'),
})

const categories = [
  { label: "Working", value: 1, backgroundColor:'red', icon:'apps' },
  { label: "Also working", value: 2, backgroundColor:'green', icon:'email' },
  { label: "Third working", value: 3, backgroundColor:'blue', icon:'lock' }
]

function ListingEditScreen(props) {

const location = useLocation()

  return (
   <Screen>
     <AppForm
      initialValues={{
        title:"", price:"", description:"", category:null, images: []
     }}
      onSubmit={(values) => console.log(location)}
      validationSchema={validationSchema}
     >
       <FormImagePicker name='images' />
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