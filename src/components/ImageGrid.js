import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ImageItem from './ImageItem';

const ImageGrid = ({images, navigation}) => {
  const renderItem = ({item}) => (
    <ImageItem image={item} onPress={() => navigation.navigate('ImageDetails', {image: item})} />
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.url}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default ImageGrid;
