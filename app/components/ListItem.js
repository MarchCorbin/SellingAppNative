import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { render } from 'react-dom';

function ListItem({title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {Image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  detailsContainer: {
    marginLeft:10,
    justifyContent: 'center',
  },
  image: {
    height:70,
    borderRadius:35,
  },
  title: {
    color: colors.black,
    fontWeight:'500',
  },
  subTitle: {
    color:colors.light
  }
})

export default ListItem;