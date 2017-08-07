import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { getJobs } from '../actions';
import { viewStyles, inputStyles, buttonStyles } from '../styles';

class JobScreen extends Component { 

  componentDidMount () {
    this.props.getJobs();
  }

  render () {

    const { container, centerVertical, centerHorizontal } = viewStyles;
    const { login } = inputStyles;
    const { regular } = buttonStyles;

    return (
      <View style={[ container ]}>

        

      </View>
    );
  }

}

const mapStateToProps = ({ jobs }) => {
  const {
    jobList,
    loading
  } = jobs;

  return { 
    jobList,
    loading
  };
};

export default connect( mapStateToProps , { getJobs })(JobScreen);
