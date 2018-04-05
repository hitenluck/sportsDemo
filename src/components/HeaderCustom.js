import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './Header.styles.js'
import {images} from '../theme'
 const HeaderCustom=({icon,title})=>(
   <View style={styles.mainView}>
     <View style={styles.textContainer}>
       <Text style={styles.headerText}>{title}</Text>
     </View>
   </View>
)
export default HeaderCustom;
