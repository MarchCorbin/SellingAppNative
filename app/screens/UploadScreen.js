import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import LottieView from 'lottie-react-native'

function UploadScreen({onDone, progress = 0, visible = false}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? <Progress.Bar progress={progress} color={colors.primary} width={200} /> : <LottieView
        autoPlay
        loop={false}
        onAnimationFinish={onDone}
        source={require('../assets/animations/done.json')}
        style={styles.animation}
        />}
      
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },
  animation: {
    width:150,
  }
});

export default UploadScreen;