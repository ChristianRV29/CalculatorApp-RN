import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {appStyles} from './../styles/styles';

export const CalculatorScreen = () => {
  return (
    <Fragment>
      <View>
        <Text style={appStyles.text}>Calculator screen</Text>
      </View>
    </Fragment>
  );
};
