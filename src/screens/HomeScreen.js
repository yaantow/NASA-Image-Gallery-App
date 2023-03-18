import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import ImageGrid from '../components/ImageGrid';
import {NASA_API_KEY} from '@env';
import {ButtonGroup} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fetchData = async () => {
    const allImages = await fetchImagesByAPI(selectedIndex);
    setImages(allImages);
    setLoading(false);
  };


  const fetchImagesByAPI = async (index) => {
    switch (index) {
      case 0:
        return await fetchAPODData();
      case 1:
        return await fetchMarsRoverData();
      case 2:
        return await fetchEPICData();
      default:
        return [];
    }
  };


  const fetchAPODData = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?count=10&api_key=${NASA_API_KEY}`,
    );
    return response.data;
  };

  const fetchMarsRoverData = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-02-15&api_key=${NASA_API_KEY}`,
    );
    return response.data.photos.map((photo) => ({
      url: photo.img_src,
      title: `${photo.rover.name} - ${photo.camera.name}`,
      explanation: `Photo taken by ${photo.rover.name}'s ${photo.camera.full_name} on ${photo.earth_date}.`,
    }));
  };

  const fetchEPICData = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/EPIC/api/natural/date/2021-02-15?api_key=${NASA_API_KEY}`,
    );
    return response.data.map((epic) => ({
      url: `https://epic.gsfc.nasa.gov/archive/natural/2021/02/15/png/${epic.image}.png`,
      title: `EPIC - ${epic.date}`,
      explanation: `Earth Polychromatic Imaging Camera (EPIC) image taken on ${epic.date}.`,
    }));
  };

  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
    setLoading(true);
    fetchData();
  };

  const buttons = ['APOD', 'Mars Rover', 'EPIC'];

  return (
    <View style={styles.container}>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={styles.buttonGroup}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ImageGrid images={images} navigation={navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonGroup: {
    marginBottom: 10,
  },
});


export default HomeScreen;
