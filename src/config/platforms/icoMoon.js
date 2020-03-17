// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

// import Internal Components
import icoMoonConfig from '../icomoon/selection.json';

// ------------------------------
// #endregion

const IcoMoon =
  // #region [useMorfos]
  // ------------------------------

  createIconSetFromIcoMoon(icoMoonConfig, 'Icomoon', 'icomoon.ttf');

// ------------------------------
// #endregion

export default IcoMoon;
