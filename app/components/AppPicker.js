import React, { useState }from 'react';
import { View, TextInput, StyleSheet, Button, Platform, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles'

import colors from '../config/colors'
import AppText from './AppText/AppText';
import Screen from './Screen'
import PickerItem from './PickerItem.js'

function AppPicker({icon, items, placeholder }) {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
  <View style={styles.container}>
    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
      <AppText style={styles.text}>{placeholder}</AppText>
    <MaterialCommunityIcons 
    name='chevron-down' 
    size={20} 
    color={colors.medium} 
    />
  </View>
</TouchableWithoutFeedback>
<Modal visible={modalVisible} animationType='slide'>
  <Screen>
    <Button title='Close' onPress={() => setModalVisible(false)} />
    <FlatList
    data={items}
    keyExtractor={item => item.value.toString()}
    renderItem={({item}) => (<PickerItem label={item.label} onPress={() => console.log(item)} />)}
    />
  </Screen>
</Modal>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius:25,
    flexDirection: 'row',
    width: '100%',
    padding:15,
    marginVertical:10,
  },
  text: {
    flex:1,
  },
   icon: {
    marginRight:10
  },
})

export default AppPicker;