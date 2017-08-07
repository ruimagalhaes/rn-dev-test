import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { viewStyles, textStyles } from '../styles';

const JobCell = ({item, onPress})  => {

  const { container, row, centerVertical, centerHorizontal } = viewStyles;
  const { medium, title } = textStyles;
  const { cellMargin } = marginStyles;

  return (
    <TouchableOpacity 
      onPress={ onPress }
      style={[ row, container, centerHorizontal, centerVertical, cellMargin ]}
      >
      <Text style={[ medium, title ]}>
        {item.company}
      </Text>
    </TouchableOpacity>
  );
}

const marginStyles = {
  cellMargin: { 
    marginBottom: 1,
  }
};

export { JobCell };
