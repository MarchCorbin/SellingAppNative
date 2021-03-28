import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
// import * as Progress from 'react-native-progress'
import AppText from '../components/AppText/AppText';

function UploadScreen({progress = 0, visible = false}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}></View>
      <AppText style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>{progress * 100}%</AppText>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  }
});

export default UploadScreen;