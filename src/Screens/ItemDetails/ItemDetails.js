import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const ItemDetails = props => {
  const car = useSelector(state => state.cars).currentCar;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{`Name: ${car.name}, details: ${car.details}`}</Text>
    </View>
  );
};

export default ItemDetails;
