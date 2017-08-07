import React, { Component } from 'react';
import { View, Text, TextInput, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { getJobs } from '../actions';
import { JobCell } from './JobCell';
import { viewStyles, inputStyles, buttonStyles } from '../styles';

class JobScreen extends Component { 

  componentDidMount () {
    this.props.getJobs();
  }

  _renderItem = ({item}) => (
    <JobCell 
      item={item}
      onPress={() => this.props.navigation.navigate('JobDetailScreen', { item: item })}
    />
  );

  _keyExtractor = (item, index) => item.id;

  render () {
    const { container } = viewStyles;

    return (      
      <View style={[ container ]}>
        <FlatList
          data={this.props.jobList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }

}

const mapStateToProps = ({ jobs }) => {
  console.log(jobList)
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
