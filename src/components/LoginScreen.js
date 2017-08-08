import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { requestAuth, emailChanged, passwordChanged } from '../actions';
import { viewStyles, inputStyles, buttonStyles, textStyles } from '../styles';

class LoginScreen extends Component { 

  componentDidUpdate() {
    if (this.props.navigateToJobs) {
      this.props.navigation.navigate('JobsScreen');
    }
  }

  onEmailChange(text) { 
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    this.props.requestAuth(this.props.email, this.props.password);
  }

  render () {

    const { container, centerVertical, centerHorizontal, underLineView } = viewStyles;
    const { login } = inputStyles;
    const { regular } = buttonStyles;
    const { medium, bold, button } = textStyles;
    const { underLineMargin, buttonLineMargin, buttonMargin } = marginStyles;

    return (
      <View style={[ container ]}>

        <TextInput
          secureTextEntry={false}
          autoCorrect={false}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          underlineColorAndroid='transparent'
          onChangeText={this.onEmailChange.bind(this)}
          placeholder={'email'}
          value={this.props.email}
          style={[ login, { margin: 10 }]}
        />

        <View style={[ underLineView, underLineMargin ]} />

        <TextInput
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize={'none'}
          underlineColorAndroid='transparent'
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder={'password'}
          value={this.props.password}
          style={[ login, { margin: 10 }]}
        />

        <View style={[ underLineView, underLineMargin ]} />

        <TouchableOpacity 
          onPress={this.onButtonPress.bind(this)}
          style = {[ regular, centerHorizontal, centerVertical, buttonMargin ]}
          >
          <Text style={[ medium, bold, button ]}>
            Login
          </Text>
        </TouchableOpacity>

        <ActivityIndicator 
          animating={this.props.loading}
          size={'large'}
        />

      </View>
    );
  }
}

const marginStyles = {
  underLineMargin: { 
    marginLeft: 10,
    marginRight: 10,
  },
  buttonMargin: { 
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
};

const mapStateToProps = ({ auth }) => {
  const {
    email,
    password,
    loading,
    navigateToJobs
  } = auth;

  return { 
    email,
    password,
    loading,
    navigateToJobs
  };
};

export default connect( mapStateToProps , { requestAuth, emailChanged, passwordChanged })(LoginScreen);
