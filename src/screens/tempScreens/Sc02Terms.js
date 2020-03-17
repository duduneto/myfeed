// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { ScrollView, View, Text } from 'react-native';

// import Internal Components
import { UseLink, useStyle, useReducer, UseIcoMoon } from './useMorfos';

// ------------------------------
// #endregion

export default function Sc02() {
  // #region [setLogic] & Reducers
  // ------------------------------

  const { rdAuthUser, rdContent } = useReducer();
  // const screenContent = rdContent[0];

  // ------------------------------
  // #endregion

  const REDIRECT = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      rdAuthUser ? <UseRedirect to={'myprofile'} /> : props.children

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <REDIRECT>
      <NAV />
      <CONTENT />
    </REDIRECT>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const NAV = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.navbarView}>
        <View style={useStyle.leftBox}>
          <UseLink to="/signin">
            <UseIcoMoon name="corner-down-left" size={26} color="#000" />
          </UseLink>
        </View>
        <View style={useStyle.centerBox}>
          <Text style={useStyle.titlePageLeft}>Termos de Uso</Text>
        </View>
        <View style={useStyle.rightBox} />
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

      <ScrollView>
        <View style={useStyle.pad20}>
          <Text style={useStyle.mgB20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue malesuada dignissim. Nunc finibus, massa eget semper
            volutpat, diam augue scelerisque nibh, eget sagittis ligula arcu
            eget dui. Duis quis finibus erat. Pellentesque in libero hendrerit,
            elementum lectus eget, euismod nisi. Cras ac bibendum ligula.
            Suspendisse quis commodo libero, pellentesque auctor elit. Duis
            dictum lacus sit amet massa iaculis lobortis. In euismod sed eros ac
            viverra.
          </Text>
          <Text style={useStyle.mgB20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue malesuada dignissim. Nunc finibus, massa eget semper
            volutpat, diam augue scelerisque nibh, eget sagittis ligula arcu
            eget dui. Duis quis finibus erat. Pellentesque in libero hendrerit,
            elementum lectus eget, euismod nisi. Cras ac bibendum ligula.
            Suspendisse quis commodo libero, pellentesque auctor elit. Duis
            dictum lacus sit amet massa iaculis lobortis. In euismod sed eros ac
            viverra.
          </Text>
          <Text style={useStyle.mgB20}>
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
          <Text style={useStyle.mgB20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue malesuada dignissim. Nunc finibus, massa eget semper
            volutpat, diam augue scelerisque nibh, eget sagittis ligula arcu
            eget dui. Duis quis finibus erat. Pellentesque in libero hendrerit,
            elementum lectus eget, euismod nisi. Cras ac bibendum ligula.
          </Text>
        </View>
      </ScrollView>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
