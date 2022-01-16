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
      <TouchableOpacity onPress={loginHandler}>
        <View style={{width: 100, height: 50}}>
          <Text>
            Login
          </Text>
        </View>
        </TouchableOpacity>   
    </>
  );
};

export default LoginScreen;
  