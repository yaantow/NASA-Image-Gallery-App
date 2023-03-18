import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ImageDetailsScreen from './src/screens/ImageDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'NASA Image Gallery'}} />
        <Stack.Screen name="ImageDetails" component={ImageDetailsScreen} options={{title: 'Image Details'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
