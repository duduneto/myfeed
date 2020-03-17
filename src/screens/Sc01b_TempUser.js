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

  // #region [allStyles]
  // ------------------------------

  // _STYLE
  // let stl = [useStyle.xxx,];
  let stlView01 = [useStyle.flexMaster, useStyle.whitePage];
  let stlScroll01 = [useStyle.scrollView];
  let stlView02 = [useStyle.pad20];

  // COMPONENT01
  let stlView03 = [useStyle.a1, useStyle.a2];
  let stlTxt01 = [useStyle.a3, useStyle.a4];
  let stlTxt02 = [useStyle.a5, useStyle.a6];

  // COMPONENT02
  let stlTxt03 = stlTxt01;
  let stlTxt04 = [stlTxt02, rdMenuSelect && useStyle.primaryColor];
  let stlBtn01 = [useStyle.xxx];

  // COMPONENT03
  let stlTxt05 = stlTxt01;
  let stlTxt06 = stlTxt02;

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

      <View style={stlView01}>
        <ScrollView style={stlScroll01}>
          <View style={stlView02}>
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

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView03}>
        <Text style={stlTxt01}>Component 01</Text>
        <Text style={stlTxt02}>------------</Text>
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

    return (
      // #region [component]
      // ------------------------------

      <>
        <Text style={stlTxt03}>Component 02</Text>
        <Text style={stlTxt04}>------------</Text>
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

    return (
      // #region [component]
      // ------------------------------

      <>
        <Text style={stlTxt05}>Component 03</Text>
        <Text style={stlTxt06}>------------</Text>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
