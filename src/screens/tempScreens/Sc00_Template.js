// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import { UseLink, useStyle, useReducer, useChangeRd } from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00() {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const { rdAuthUser, rdContent, rdMenuSelect } = useReducer();
  // const screenContent = rdContent[0];
  // const callChangeRd = useChangeRd();

  // ------------------------------
  // #endregion

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.flexMaster, useStyle.whitePage];
    let stl02 = [useStyle.scrollView];
    let stl03 = [useStyle.pad20];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stl01}>
        <ScrollView style={stl02}>
          <View style={stl03}>
            {/*  */}

            {props.children}

            {/*  */}
          </View>
        </ScrollView>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <_STYLE>
      <COMPONENT01 />

      <COMPONENT02 />

      <COMPONENT03 />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const COMPONENT01 = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.a1, useStyle.a2];
    let stl02 = [useStyle.a3, useStyle.a4];
    let stl03 = [useStyle.a5, useStyle.a6];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stl01}>
        <Text style={stl02}>Component 01</Text>
        <Text style={stl03}>------------</Text>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const COMPONENT02 = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = stlTxt01;
    let stl02 = [stlTxt02, rdMenuSelect && useStyle.primaryColor];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <>
        <Text style={stl01}>Component 02</Text>
        <Text style={stl02}>------------</Text>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const COMPONENT03 = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    // COMPONENT03
    let stl01 = stlTxt01;
    let stl02 = stlTxt02;

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <>
        <Text style={stl01}>Component 03</Text>
        <Text style={stl02}>------------</Text>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
