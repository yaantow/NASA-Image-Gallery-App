import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ImageItem = ({image, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{uri: image.url}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default ImageItem;
