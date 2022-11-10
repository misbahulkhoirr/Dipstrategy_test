import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splashscreen,
  Home,
  MovieDetail
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splashscreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default Router;
