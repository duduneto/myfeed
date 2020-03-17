// This index is only to web
// To the mobile one see ../index

// import Packages
import React from 'react';
import { AppRegistry } from 'react-native';
// import internals
import { name as appName } from './app.json';
// import Root from './App';
import Root from './Root';
import * as ServiceWorker from './service-worker'
// Register APP to react-native-web

// if('serviceWorker' in navigator){
// window.addEventListener('load', () => {
//   navigator.serviceWorker.register('./sw.js')
//   .then(() => console.log('Service Worker: Registered'))
//   .catch(err => console.log(`Servicer Worker Error: ${err}`))
// });
// }

AppRegistry.registerComponent(appName, () => Root);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
  ServiceWorker
});
// ServiceWorker.register();
