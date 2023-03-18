import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const ImageDetailsScreen = ({route}) => {
  const {image} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image.url}} />
        <Text style={styles.title}>{image.title}</Text>
        <Text style={styles.description}>{image.explanation}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default ImageDetailsScreen;
