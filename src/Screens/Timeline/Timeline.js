import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {setCar} from '../../store/actions/cars';
import cars from '../../cars';

const Login = props => {
  const dispatch = useDispatch();
  const goToDetails = car => {
      debugger;
    dispatch(setCar(car));
    props.navigation.navigate('ItemDetails');
  };
  return (
    <>
      {cars.map((car, idx) => {
        return (
          <View key={idx} style={{flex: 1, justifyContent: 'center'}}>
            <Text onPress={() => goToDetails(car)}>
              {`Name: ${car.name}, details: ${car.details}`}
            </Text>
          </View>
        );
      })}
    </>
  );
};

export default Login;