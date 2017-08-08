import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { viewStyles, textStyles } from '../styles';

const JobCell = ({item, onPress})  => {

  const { container, row, centerVertical, centerHorizontal, jobCell, thumbImageView } = viewStyles;
  const { large, bold, medium, title } = textStyles;
  const { cellMargin, roleMargin, companyMargin, thumbMargin } = marginStyles;

  return (
    <TouchableOpacity 
      onPress={ onPress }
      style={[ row, container, centerHorizontal, jobCell, cellMargin ]}
      >
      <Image
        style={[ thumbImageView, thumbMargin ]}
        source={{uri: `https://res.cloudinary.com/chris-mackie/image/upload/c_thumb/v${item.employer_img_v}/${item.employer_img}`}}
      />

      <View style={[ centerVertical ]}>
        <Text style={[ large, bold, roleMargin ]}>
          {item.role}
        </Text>
        <Text style={[ medium, title, companyMargin ]}>
          {item.company}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const marginStyles = {
  cellMargin: { 
    marginBottom: 1,
  },
  roleMargin: {
    marginLeft: 10,
    marginBottom: 3
  },
  companyMargin: {
    marginLeft: 10,
    marginTop: 3
  },
  thumbMargin: {
    marginLeft: 10,
    marginRight: 10
  }
};

export { JobCell };
