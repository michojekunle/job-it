import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import { icons } from '../../../constants'

import styles from './footer.style'

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heart}
          style={styles.likeBtnImage}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyBtnText} onPress={() => Linking.openURL(url)}>Apply For Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer