import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import LoginNavigator from './src/Navigation/LoginNavigator';
import store from './src/store';

export default App = () => {
    return (
      <Provider store={store}>
      <NavigationContainer>
          <LoginNavigator/>
      </NavigationContainer>
    </Provider>
    );
}