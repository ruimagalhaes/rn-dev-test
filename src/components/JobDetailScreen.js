import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from '../styles';

class JobDetailScreen extends Component { 
  
  render () {
    const { container, row, centerVertical, centerHorizontal } = viewStyles;
    const { medium, title } = textStyles;
    const { cellMargin } = marginStyles;

    return (
      <View style={[ container ]}>
        <Text style={[ medium, title ]}>
          { this.props.navigation.state.params.item.company }
        </Text>
      </View>
    );
  }
  
}

const marginStyles = {
  cellMargin: { 
    marginBottom: 1,
  }
};

export default JobDetailScreen;
