import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {setCar} from '../../store/actions/cars';
import cars from '../../cars';
import styles from '../styles';

const Login = props => {
  const dispatch = useDispatch();
  const goToDetails = car => {
      debugger;
    dispatch(setCar(car));
    props.navigation.navigate('ItemDetails');
  };
  return (
    <ScrollView>
      {cars.map((car, idx) => {
        return (
          <View style={styles.item} key={idx}>
            <Text onPress={() => goToDetails(car)}>
              {`Name: ${car.name}, details: ${car.details}`}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Login;