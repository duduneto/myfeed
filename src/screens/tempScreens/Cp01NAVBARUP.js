// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import { useStyle, useReducer } from './useMorfos';

// ------------------------------
// #endregion

export default function Cp01() {
  // #region [setLogic] & Reducers
  // ------------------------------

  // const { rdAuthUser, rdContent } = useReducer();
  // const screenContent = rdContent[0];

  // ------------------------------
  // #endregion

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.navbarView}>{props.children}</View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    // <Text>Nav UP 02</Text>
    <_STYLE>
      <LEFT />
      <CENTER />
      <RIGHT />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const LEFT = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.leftBox}>
        <TouchableOpacity>
          <IcoMoon name="chevron-left" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const CENTER = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.centerBox}>
        <Image style={useStyle.logo} source={require('../images/logo.png')} />
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const RIGHT = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.rightBox} />

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
