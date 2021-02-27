import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { render } from 'react-dom';

function ListItem({title, subTitle, style=styles.image, image, IconComponent, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {Image && <Image style={style} source={image} />}
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
    padding:15,
    backgroundColor:colors.white,
  },
  detailsContainer: {
    marginLeft:10,
    justifyContent: 'center',
  },
  image: {
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