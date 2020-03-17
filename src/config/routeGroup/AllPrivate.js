// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Internal Components
import { useReducer, UseRedirect } from '../../screens/useMorfos';
import { View, ScrollView } from 'react-native';
import { Cp01, Cp02 } from '../../screens';

// ------------------------------
// #endregion


export default function AllPrivate(props) {
  const { rdAuthUser } = useReducer();

  /* AFTER STYLING... */
  return !rdAuthUser ? (
    <UseRedirect to="/signin" />
  ) : (
    // return (

    <>
      <Cp01 props={props} />
      {props.children}
      <Cp02 props={props} />
    </>
  );
}
