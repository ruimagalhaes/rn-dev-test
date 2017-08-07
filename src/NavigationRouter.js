import React from 'react';
import { StackNavigator } from 'react-navigation';
import { NavigationStyles } from './styles';
import LoginScreen from './components/LoginScreen';
import JobsScreen from './components/JobsScreen';
import JobDetailScreen from './components/JobDetailScreen';

export const MainStack = StackNavigator({
  
  LoginScreen: {
    screen: LoginScreen
  },
  JobsScreen: {
    screen: JobsScreen
  },
  JobDetailScreen: {
    screen: JobDetailScreen
  },
}, {
  
});

