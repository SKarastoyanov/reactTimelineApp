import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Timeline from '../Screens/Timeline/Timeline';
import ItemDetails from '../Screens/ItemDetails/ItemDetails';

const Stack = createNativeStackNavigator();

const TimelineNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Timeline" component={Timeline} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
    </Stack.Navigator>
  );
};

export default TimelineNavigator;