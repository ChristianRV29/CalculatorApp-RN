import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/screens/CalculatorScreen';

import {appStyles} from './src/styles/styles';

const App = () => {
  return (
    <SafeAreaView style={appStyles.appBackground}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
