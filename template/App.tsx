import React ,{useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  NativeBaseProvider,
} from 'native-base';

import AppNavigation from './src/navigations';

const App = () => {

  return (
    <NativeBaseProvider>
      <AppNavigation />
  </NativeBaseProvider>
  );
};
export default App;
