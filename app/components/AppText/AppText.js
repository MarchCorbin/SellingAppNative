import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'

import styles from './styles'

function AppText({children, style}) {
  return (
<Text style={styles.text}>{children}</Text>
  );
}







export default AppText;