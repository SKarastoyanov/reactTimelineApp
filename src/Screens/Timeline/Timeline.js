import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {setCar} from '../../store/actions/cars';
import {logout} from '../../store/actions/authentication';
import cars from '../../cars';
import styles from '../styles';

const Login = props => {
  const dispatch = useDispatch();
  const goToDetails = car => {
      debugger;
    dispatch(setCar(car));
    props.navigation.navigate('ItemDetails');
  };

  const logoutHandler = () => {
    dispatch(logout()); 
  };
  return (
    <View style={styles.screen}>
      <View style={{alignItems: 'flex-end'}}>
      <TouchableOpacity onPress={logoutHandler}>
        <View style={styles.button}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            Logout
          </Text>
        </View>
        </TouchableOpacity>
      </View>    
    <ScrollView>
      {cars.map((car, idx) => {
        return (
          <TouchableOpacity onPress={() => goToDetails(car)}>
            <View style={styles.item} key={idx}>
            <Text>
              {`Name: ${car.name}, details: ${car.details}`}
            </Text>
          </View>
          </TouchableOpacity>          
        );
      })}
    </ScrollView>
    </View>
  );
};

export default Login;