/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import Root from './src/Root';
import './App.css'
// import Root from './src/App';
import { name as appName } from './src/app.json';

// Temp - Ignore warnings from react-native-firebase
YellowBox.ignoreWarnings(['Require cycle:']);

AppRegistry.registerComponent(appName, () => Root);
