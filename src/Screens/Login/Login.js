import React from 'react';
import {Text, Button} from 'react-native';

const Login = props => {
  const goToTimeline = () => {
    props.navigation.navigate('TimelineNavigator');
  };
  return (
    <>
      <Text>Login</Text>
      <Button title="Go to timeline" onPress={goToTimeline} />
    </>
  );
};

export default Login;
  