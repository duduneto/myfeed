// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
// import Internal Components
import { useStyle } from './';

// ------------------------------
// #endregion

const UseLoader = (props) => (
  // #region [useMorfos]
  // ------------------------------

  <View style={[useStyle.loaderView, {...props.style}]}>
    <ActivityIndicator size="large" color="#222" />
  </View>

  // ------------------------------
  // #endregion
);

export default UseLoader;
