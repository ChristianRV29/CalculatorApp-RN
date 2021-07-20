import React, {Fragment, useState} from 'react';
import {View, Text} from 'react-native';
import {ButtonMdc} from '../components/molecules/ButtonMdc';
import {appStyles} from './../styles/styles';

export const CalculatorScreen = () => {
  const [operatorNumber, setOperatorNumber] = useState('0');
  const [previosNumber, setPreviosNumber] = useState('0');

  const cleanNumber = () => {
    setOperatorNumber('0');
  };

  const buildNumber = (numberText: string) => {
    if (operatorNumber.includes('.') && numberText === '.') {
      return;
    }
    if (operatorNumber.startsWith('0') || operatorNumber.startsWith('-0')) {
      if (numberText === '.') {
        setOperatorNumber(operatorNumber.concat(numberText));
      } else if (numberText === '0' && operatorNumber.includes('.')) {
        setOperatorNumber(operatorNumber.concat(numberText));
      } else if (numberText !== '0' && !operatorNumber.includes('.')) {
        setOperatorNumber(numberText);
      } else if (numberText === '0' && !operatorNumber.includes('.')) {
        setOperatorNumber(operatorNumber);
      } else {
        setOperatorNumber(operatorNumber.concat(numberText));
      }
    } else {
      setOperatorNumber(operatorNumber.concat(numberText));
    }
  };

  const positiveNegative = () => {
    if (operatorNumber.includes('-')) {
      setOperatorNumber(operatorNumber.replace('-', ''));
    } else {
      setOperatorNumber('-'.concat(operatorNumber));
    }
  };

  return (
    <Fragment>
      <View style={appStyles.calculatorContainer}>
        <Text style={appStyles.textSmall}>{previosNumber}</Text>
        <Text
          style={appStyles.textResult}
          numberOfLines={1}
          adjustsFontSizeToFit>
          {operatorNumber}
        </Text>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'C'} color={'#9B9B9B'} action={cleanNumber} />
          <ButtonMdc text={'+/-'} color={'#9B9B9B'} action={positiveNegative} />
          <ButtonMdc text={'%'} color={'#9B9B9B'} action={cleanNumber} />
          <ButtonMdc text={'/'} color={'#FF9427'} action={cleanNumber} />
        </View>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'7'} action={buildNumber} />
          <ButtonMdc text={'8'} action={buildNumber} />
          <ButtonMdc text={'9'} action={buildNumber} />
          <ButtonMdc text={'X'} color={'#FF9427'} action={cleanNumber} />
        </View>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'4'} action={buildNumber} />
          <ButtonMdc text={'5'} action={buildNumber} />
          <ButtonMdc text={'6'} action={buildNumber} />
          <ButtonMdc text={'-'} color={'#FF9427'} action={cleanNumber} />
        </View>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'1'} action={buildNumber} />
          <ButtonMdc text={'2'} action={buildNumber} />
          <ButtonMdc text={'3'} action={buildNumber} />
          <ButtonMdc text={'+'} color={'#FF9427'} action={cleanNumber} />
        </View>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'0'} action={buildNumber} isWide />
          <ButtonMdc text={'.'} action={buildNumber} />
          <ButtonMdc text={'='} color={'#FF9427'} action={cleanNumber} />
        </View>
      </View>
    </Fragment>
  );
};
