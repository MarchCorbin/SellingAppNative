import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { render } from 'react-dom';

function ListItem({title, subTitle, style=styles.image, image, IconComponent, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {Image && <Image style={style} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
            {subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
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
    alignItems: 'center',
  },
  detailsContainer: {
    marginLeft:10,
    justifyContent: 'center',
    flex:1,
  },
  image: {
    borderRadius:35,
    height:50,
    width:50,
  },
  title: {
    color: colors.black,
    fontWeight:'500',
  },
  subTitle: {
    color:'lightgrey'
  }
})

export default ListItem;