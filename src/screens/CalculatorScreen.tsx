import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {appStyles} from './../styles/styles';

export const CalculatorScreen = () => {
  return (
    <Fragment>
      <View style={appStyles.calculatorContainer}>
        <Text style={appStyles.textSmall}>1,500.00</Text>
        <Text style={appStyles.textResult}>1,500.00</Text>
        <View style={appStyles.button}>
          <Text style={appStyles.buttonText}>1</Text>
        </View>
      </View>
    </Fragment>
  );
};
