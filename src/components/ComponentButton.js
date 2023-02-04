import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styleButton } from './StyleButton';

export default function ComponentButton({title, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styleButton.button}
    >
      <Text
        style={styleButton.text}
      >{title}</Text>
    </TouchableOpacity>
  );
}