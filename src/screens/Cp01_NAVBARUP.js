// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import { useStyle, useReducer, UseIcoMoon, useAuth } from './useMorfos';

// ------------------------------
// #endregion

export default function Cp01(compProps) {
  // #region [setLogic] & Reducers
  // ------------------------------

  const { Cp01 } = useReducer();
  const { signOut } = useAuth();
  // const { rdAuthUser, rdContent } = useReducer();
  // const screenContent = rdContent[0];

  // ------------------------------
  // #endregion

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let styleNavBar = useStyle.navbarView;

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={styleNavBar}>{props.children}</View>

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

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.leftBox];
    let stl02 = [useStyle.flexCenter, { flex: 1, width: 50 }];
    let condition01 = "#000";

    // ------------------------------
    // #endregion
    return (
      // #region [component]
      // ------------------------------

      <View style={stl01}>
          <TouchableOpacity
            style={stl02}
            onPress={() => {
              compProps.props.history.goBack();
            }}
          >
            <UseIcoMoon name="chevron-left" size={26} color={condition01} />
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

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.centerBox];
    let stl02 = [useStyle.logoBar];
    let stl03 = [useStyle.txTitleScreen];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stl01}>
        <>
          {/* IMPROVED ICON */}
          <View style={{
            width: 0, 
            height: 0, 
            borderLeftWidth: 20, 
            borderLeftColor: '#0000',
            borderRightWidth: 20, 
            borderRightColor: '#0000',
            borderBottomWidth: 40, 
            borderBottomColor: '#31a05e',
            position: 'relative'
          }} />
          <View style={{
            width: 0, 
            height: 0, 
            borderLeftWidth: 20, 
            borderLeftColor: '#0000',
            borderBottomWidth: 40, 
            borderBottomColor: '#34582a',
            position: 'absolute',
            marginLeft: -10
          }} />
          </>
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

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.rightBox];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stl01}>
        <TouchableOpacity onPress={signOut}>
          <UseIcoMoon name="logout" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
