import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {ButtonMdc} from '../components/molecules/ButtonMdc';
import {appStyles} from './../styles/styles';

import {useCalculator} from './../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    previosNumber,
    operatorNumber,
    cleanNumber,
    positiveNegative,
    delNumber,
    buildNumber,
    btnOperation,
    calculate,
  } = useCalculator();

  return (
    <Fragment>
      <View style={appStyles.calculatorContainer}>
        {previosNumber !== '0' && (
          <Text style={appStyles.textSmall}>{previosNumber}</Text>
        )}
        <Text
          style={appStyles.textResult}
          numberOfLines={1}
          adjustsFontSizeToFit>
          {operatorNumber}
        </Text>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'C'} color={'#9B9B9B'} action={cleanNumber} />
          <ButtonMdc text={'+/-'} color={'#9B9B9B'} action={positiveNegative} />
          <ButtonMdc text={'DEL'} color={'#9B9B9B'} action={delNumber} />
          <ButtonMdc
            text={'/'}
            color={'#FF9427'}
            action={() => btnOperation('/')}
          />
        </View>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'7'} action={buildNumber} />
          <ButtonMdc text={'8'} action={buildNumber} />
          <ButtonMdc text={'9'} action={buildNumber} />
          <ButtonMdc
            text={'X'}
            color={'#FF9427'}
            action={() => btnOperation('*')}
          />
        </View>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'4'} action={buildNumber} />
          <ButtonMdc text={'5'} action={buildNumber} />
          <ButtonMdc text={'6'} action={buildNumber} />
          <ButtonMdc
            text={'-'}
            color={'#FF9427'}
            action={() => btnOperation('-')}
          />
        </View>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'1'} action={buildNumber} />
          <ButtonMdc text={'2'} action={buildNumber} />
          <ButtonMdc text={'3'} action={buildNumber} />
          <ButtonMdc
            text={'+'}
            color={'#FF9427'}
            action={() => btnOperation('+')}
          />
        </View>
        <View style={appStyles.buttonsContainer}>
          <ButtonMdc text={'0'} action={buildNumber} isWide />
          <ButtonMdc text={'.'} action={buildNumber} />
          <ButtonMdc text={'='} color={'#FF9427'} action={calculate} />
        </View>
      </View>
    </Fragment>
  );
};
