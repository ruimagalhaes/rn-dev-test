import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { requestAuth, emailChanged, passwordChanged } from '../actions';
import { viewStyles, inputStyles, buttonStyles } from '../styles';

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

    const { container, centerVertical, centerHorizontal } = viewStyles;
    const { login } = inputStyles;
    const { regular } = buttonStyles;

    return (
      <View style={[ container ]}>

        <TextInput
          secureTextEntry={false}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          style={[ login, { margin: 10 }]}
        />

        <TextInput
          secureTextEntry={true}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          style={[ login, { margin: 10 }]}
        />

        <TouchableOpacity 
          onPress={this.onButtonPress.bind(this)}
          style = {[ regular, centerHorizontal, centerVertical, { margin: 10 }]}
          >
          <Text>
            Login
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

}

const mapStateToProps = ({ auth }) => {
  const {
    username,
    password,
    loading,
    navigateToJobs
  } = auth;

  return { 
    username,
    password,
    loading,
    navigateToJobs
  };
};

export default connect( mapStateToProps , { requestAuth, emailChanged, passwordChanged })(LoginScreen);
