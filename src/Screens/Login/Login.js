import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux'

import styles from '../styles';
import {login} from '../../store/actions/authentication'

const LoginScreen = props => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    debugger
    dispatch(login());
  };
  return (
    <>
      <Text style={styles.header}>Welcome</Text>
      <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={loginHandler}>
        <View style={styles.button}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Login
          </Text>
        </View>
        </TouchableOpacity>   
      </View>
    </>
  );
};

export default LoginScreen;
  