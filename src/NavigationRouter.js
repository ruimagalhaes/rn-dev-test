import React from 'react';
import { StackNavigator } from 'react-navigation';
import { NavigationStyles } from './styles';
import LoginScreen from './components/LoginScreen';
import JobsScreen from './components/JobsScreen';
import JobDetailScreen from './components/JobDetailScreen';

export const MainStack = StackNavigator({
  
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      title: 'inploi',
      headerStyle: NavigationStyles.navBar,
      headerTitleStyle: NavigationStyles.navTitle
    }),
  },
  JobsScreen: {
    screen: JobsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Jobs',
      headerStyle: NavigationStyles.navBar,
      headerTitleStyle: NavigationStyles.navTitle,
      headerBackTitleStyle: NavigationStyles.navBack,
      headerTintColor: 'white',
      headerLeft: null
    }),
  },
  JobDetailScreen: {
    screen: JobDetailScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Job',
      headerStyle: NavigationStyles.navBar,
      headerTitleStyle: NavigationStyles.navTitle,
      headerBackTitleStyle: NavigationStyles.navBack,
      headerTintColor: 'white',
    }),
  },
}, {
  
});

