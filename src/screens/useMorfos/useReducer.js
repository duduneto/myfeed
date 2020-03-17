// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------
// #endregion

export default function UseReducer() {
  // #region [useMorfos]
  // ------------------------------

  const reducers = useSelector(state => state.allContent);

  return reducers;

  // ------------------------------
  // #endregion
}
