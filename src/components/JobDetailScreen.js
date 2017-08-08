import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { viewStyles, textStyles, buttonStyles } from '../styles';

class JobDetailScreen extends Component { 
  
  getTermString(term) {
    return (term === 'pt') ? 'Part-Time' : 'Full-Time';
  }

  render () {

    const deviceWidth = Dimensions.get('window').width;

    const { container, row, detailBackground, coverImageView, centerHorizontal, centerVertical} = viewStyles;
    const { large, big, bold, medium, title, button } = textStyles;
    const { roleMargin, companyMargin, detailMargin, rateMargin, buttonMargin } = marginStyles;
    const { regular } = buttonStyles;

    const job = this.props.navigation.state.params.item;

    return (

      <ScrollView>
        <View style={[ container, detailBackground ]}>
          <Image
            style={[ coverImageView, {width: deviceWidth}]}
            source={{uri: `https://res.cloudinary.com/chris-mackie/image/upload/v${job.company_img_v}/${job.company_img}`}}
          />
          <Text style={[ big, bold, roleMargin ]}>
            {job.role}
          </Text>
          <Text style={[ large, companyMargin ]}>
            {job.company}
          </Text>
          <Text style={[ title, detailMargin ]}>
            {this.getTermString(job.job_term)}
          </Text>
          <Text style={[ title, detailMargin ]}>
            {job.location_city}
          </Text>
          <View style={[ row, rateMargin ]}>
            <Text style={[ big, bold ]}>
              {`£${job.rate}  `}
            </Text>
            <Text style={[ big, title ]}>
              {`(${job.rate_type})`}
            </Text>
          </View>
          <TouchableOpacity style = {[ regular, centerHorizontal, centerVertical, buttonMargin ]}>
            <Text style={[ medium, bold, button ]}>
              Apply Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    );
  }
  
}

const marginStyles = {
  roleMargin: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 3
  },
  companyMargin: {
    marginLeft: 10,
    marginTop: 3,
    marginBottom: 25
  },
  detailMargin: {
    marginLeft: 10,
    marginBottom: 5
  },
  rateMargin: {
    marginLeft: 10,
    marginTop: 25,
    marginBottom: 25,
  },
  buttonMargin: { 
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  }
};

export default JobDetailScreen;
