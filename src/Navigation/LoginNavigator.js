import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../Screens/Login/Login';
import TimelineNavigator from './TimelineNavigator';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TimelineNavigator" component={TimelineNavigator} />
    </Stack.Navigator>
  );
};

export default LoginStack;