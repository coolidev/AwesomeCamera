/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import Camera from './src/Camera';
import mediaScreen from './src/mediaScreen';
import VideoScreen from './src/videoScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="mediaScreen" component={mediaScreen} options={{title: 'Media'}} />
        <Stack.Screen name="videoScreen" component={VideoScreen} 
        options={{
          title: 'Video',
          // headerTransparent: true,
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          // headerStyle: {
          //   shadowOpacity: 0,
          //   elevation: 0,
          // }
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
