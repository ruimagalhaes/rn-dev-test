import React from 'react';
import { StackNavigator } from 'react-navigation';
import { NavigationStyles } from './styles';
import LoginScreen from './components/LoginScreen';
import JobsScreen from './components/JobsScreen';

export const MainStack = StackNavigator({
  
  LoginScreen: {
    screen: LoginScreen
  },
  JobsScreen: {
    screen: JobsScreen
  },
}, {
  
});

