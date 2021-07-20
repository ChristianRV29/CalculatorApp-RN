import React from 'react';
import {View, Text} from 'react-native';
import {appStyles} from '../../styles/styles';

interface ButtonProps {
  text: string;
  color?: string;
}

export const ButtonMdc = ({text, color = '2D2D2D'}: ButtonProps) => {
  return (
    <View style={{...appStyles.button, backgroundColor: color}}>
      <Text style={appStyles.buttonText}>{text}</Text>
    </View>
  );
};
