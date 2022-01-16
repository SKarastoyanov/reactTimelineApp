import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import LoginScreen from '../Screens/Login/Login';
import TimelineNavigator from './TimelineNavigator';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  const isLoged = useSelector((state) => state.auth).isLoged;
  debugger
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      { isLoged ? 
      <Stack.Screen name="TimelineNavigator" component={TimelineNavigator} />:
      <Stack.Screen name="Login" component={LoginScreen} />      
      }      
    </Stack.Navigator>
  );
};

export default LoginStack;