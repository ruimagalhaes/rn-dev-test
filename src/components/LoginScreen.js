import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { requestAuth } from '../actions';
import { viewStyles } from '../styles';

class LoginScreen extends Component { 

  render () {

    const { container, centerVertical, centerHorizontal } = viewStyles;

    return (
      <View style={container, centerVertical, centerHorizontal}>
        <Text>
          React Native Template
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const {
    username,
    password
  } = auth;

  return { 
    username,
    password
  };
};

export default connect( mapStateToProps , { requestAuth })(LoginScreen);
