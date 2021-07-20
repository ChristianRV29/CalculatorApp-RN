/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {appStyles} from '../../styles/styles';

interface ButtonProps {
  text: string;
  color?: string;
  isWide?: boolean;
  action: (numberText: string) => void;
}

export const ButtonMdc = ({
  text,
  color = '#2D2D2D',
  isWide = false,
  action,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => action(text)}
      style={{
        ...appStyles.button,
        backgroundColor: color,
        width: isWide ? 180 : 80,
      }}>
      <Text
        style={{
          ...appStyles.buttonText,
          color: color === '#9B9B9B' ? 'black' : 'white',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
