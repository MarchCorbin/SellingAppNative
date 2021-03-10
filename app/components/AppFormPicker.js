import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../components/AppPicker'
import ErrorMessage from '../components/ErrorMessage'
import PickerItem from '../components/PickerItem'

function AppFormPicker({items, icon, name, numberOfColumns, placeholder, PickerItemComponent, width}) {

const {errors, setFieldValue, touched, values} = useFormikContext()

  return (
    <>
      <AppPicker
      PickerItemComponent={PickerItemComponent}
      width={width}
      items={items}
      numberOfColumns={numberOfColumns}
      onSelectItem={(item) => setFieldValue(name, item)}
      placeholder={placeholder}
      selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;