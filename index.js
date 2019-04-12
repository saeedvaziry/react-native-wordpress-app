import React from 'react'; // eslint-disable-line
import { Navigation } from 'react-native-navigation';
import { appNavigation } from './src/navigation';

Navigation.events().registerAppLaunchedListener(() => appNavigation());