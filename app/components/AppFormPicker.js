import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../components/AppPicker'
import ErrorMessage from '../components/ErrorMessage'

function AppFormPicker({items, name, numberOfColumns, placeholder, pickerItemComponent, width}) {

const {errors, setFieldValue, touched, values} = useFormikContext()

  return (
    <>
      <AppPicker
      pickerItemComponent={pickerItemComponent}
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