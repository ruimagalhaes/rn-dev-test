import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { getJobs } from '../actions';
import { JobCell } from './JobCell';
import { viewStyles, inputStyles, buttonStyles, textStyles } from '../styles';

class JobScreen extends Component { 

  componentDidMount () {
    this.props.getJobs(this.props.page);
  }

  _renderItem = ({item}) => (
    <JobCell 
      item={item}
      onPress={() => this.props.navigation.navigate('JobDetailScreen', { item: item })}
    />
  );

  _renderFooter = () => {
    const { regular } = buttonStyles;
    const { centerVertical, centerHorizontal } = viewStyles;
    const { medium, bold, button } = textStyles;
    return (
      <TouchableOpacity 
          onPress = {() => this.props.getJobs(this.props.page)}
          style = {[ regular, centerHorizontal, centerVertical, { margin: 10 } ]}
          >
          <Text style={[ medium, bold, button ]}>
            Load More Jobs
          </Text>
        </TouchableOpacity>
    );
  }
  

  _keyExtractor = (item, index) => item.id;

  render () {
    const { container } = viewStyles;

    return (      
      <View style={[ container ]}>
        <FlatList
          data={this.props.jobList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ListFooterComponent={this._renderFooter}
        />
      </View>
    );
  }
}


const mapStateToProps = ({ jobs }) => {
  const {
    jobList,
    loading,
    page
  } = jobs;

  console.log(jobList)

  return { 
    jobList,
    loading,
    page
  };
};

export default connect( mapStateToProps , { getJobs })(JobScreen);
