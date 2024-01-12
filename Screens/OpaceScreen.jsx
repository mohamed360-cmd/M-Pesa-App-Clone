import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import blurOverlay from './Images/blurOverlay.png';

export default function OpaceScreen() {
  return (
    <View style={styles.opaceContainer}>
      <ImageBackground source={blurOverlay} style={styles.imageBackground}>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  opaceContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    padding:3
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.1) ',
    borderRadius: 10,

  },
});
