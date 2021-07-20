import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {ButtonMdc} from '../components/molecules/ButtonMdc';
import {appStyles} from './../styles/styles';

export const CalculatorScreen = () => {
  return (
    <Fragment>
      <View style={appStyles.calculatorContainer}>
        <Text style={appStyles.textSmall}>1,500.00</Text>
        <Text style={appStyles.textResult}>1,500.00</Text>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'C'} color={'#9B9B9B'} />
          <ButtonMdc text={'+/-'} color={'#9B9B9B'} />
          <ButtonMdc text={'%'} color={'#9B9B9B'} />
          <ButtonMdc text={'/'} color={'#FF9427'} />
        </View>
      </View>
    </Fragment>
  );
};
