// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useChangeRd,
  UseIcoMoon
} from './useMorfos';

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

  // NAV
  let stlView03 = [useStyle.navbarView];
  let stlView04 = [useStyle.leftBox];
  let stlView05 = [useStyle.centerBox];
  let stlView06 = [useStyle.rightBox];

  let stlTxt01 = [useStyle.titlePageLeft];

  // CONTENT
  let stlView07 = [stlView02];
  let stlTxt02 = [useStyle.mgB20];
  let stlTxt03 = [stlTxt02];
  let stlTxt04 = [stlTxt02];
  let stlTxt05 = [stlTxt02];

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
      <NAV />
      <CONTENT />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const NAV = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView03}>
        <View style={stlView04}>
          <UseLink to="/signin">
            <UseIcoMoon name="corner-down-left" size={26} color="#000" />
          </UseLink>
        </View>
        <View style={stlView05}>
          <Text style={stlTxt01}>Termos de Uso</Text>
        </View>
        <View style={stlView06} />
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const CONTENT = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <>
        <View style={stlView07}>
          <Text style={stlTxt02}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue malesuada dignissim. Nunc finibus, massa eget semper
            volutpat, diam augue scelerisque nibh, eget sagittis ligula arcu
            eget dui. Duis quis finibus erat. Pellentesque in libero hendrerit,
            elementum lectus eget, euismod nisi. Cras ac bibendum ligula.
            Suspendisse quis commodo libero, pellentesque auctor elit. Duis
            dictum lacus sit amet massa iaculis lobortis. In euismod sed eros ac
            viverra.
          </Text>
          <Text style={stlTxt03}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue malesuada dignissim. Nunc finibus, massa eget semper
            volutpat, diam augue scelerisque nibh, eget sagittis ligula arcu
            eget dui. Duis quis finibus erat. Pellentesque in libero hendrerit,
            elementum lectus eget, euismod nisi. Cras ac bibendum ligula.
            Suspendisse quis commodo libero, pellentesque auctor elit. Duis
            dictum lacus sit amet massa iaculis lobortis. In euismod sed eros ac
            viverra.
          </Text>
          <Text style={stlTxt04}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue malesuada dignissim. Nunc finibus, massa eget semper
            volutpat, diam augue scelerisque nibh, eget sagittis ligula arcu
            eget dui. Duis quis finibus erat. Pellentesque in libero hendrerit,
            elementum lectus eget, euismod nisi. Cras ac bibendum ligula.
            Suspendisse quis commodo libero, pellentesque auctor elit. Duis
            dictum lacus sit amet massa iaculis lobortis. In euismod sed eros ac
            viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec congue malesuada dignissim. Nunc finibus, massa eget semper
            volutpat, diam augue scelerisque nibh, eget sagittis ligula arcu
            eget dui. Duis quis finibus erat. Pellentesque in libero hendrerit,
            elementum lectus eget, euismod nisi. Cras ac bibendum ligula.
            Suspendisse quis commodo libero, pellentesque auctor elit. Duis
            dictum lacus sit amet massa iaculis lobortis. In euismod sed eros ac
            viverra.
          </Text>
          <Text style={stlTxt05}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue malesuada dignissim. Nunc finibus, massa eget semper
            volutpat, diam augue scelerisque nibh, eget sagittis ligula arcu
            eget dui. Duis quis finibus erat. Pellentesque in libero hendrerit,
            elementum lectus eget, euismod nisi. Cras ac bibendum ligula.
          </Text>
        </View>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
