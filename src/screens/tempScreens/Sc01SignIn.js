// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  UseRedirect,
  useAuth
} from './useMorfos';

// ------------------------------
// #endregion

export default function Sc01() {
  // #region [setLogic] & Reducers
  // ------------------------------

  const { rdAuthUser, rdContent } = useReducer();
  const screenContent = rdContent[0];

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

      rdAuthUser ? <UseRedirect to={'feed'} /> : props.children

      // ------------------------------
      // #endregion
    );
  };

  const _STYLE = props => {
    // #region [setLogic]
    // ------------------------------

    let backImage = require('../images/splash.jpg');

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.flexMaster}>
        <ImageBackground source={backImage} style={useStyle.boxContent}>
          <View style={useStyle.signInMaster}>{props.children}</View>
        </ImageBackground>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <REDIRECT>
      <_STYLE>
        <BRAND />

        <AUTHFACEBOOK />
        {/*
         */}
        <TEMPUSERS />

        <FOOTER />
      </_STYLE>
    </REDIRECT>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const BRAND = () => {
    // #region [setLogic]
    // ------------------------------

    let logoSource = require('../images/logo.png');
    let logoSize = { height: 272, width: 248 };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.brandBox}>
        <Image style={logoSize} source={logoSource} />
        <Text style={useStyle.txTitle1}>{screenContent.txt01}</Text>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const AUTHFACEBOOK = props => {
    // #region [setLogic]
    // ------------------------------

    // set Hook
    const { signinFacebook } = useAuth();

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.createAccBox}>
        <TouchableOpacity
          onPress={signinFacebook}
          style={[useStyle.btnPrimary, useStyle.bgFacebook, useStyle.btLarge]}
        >
          <Text style={useStyle.txWhite}>Facebook</Text>
        </TouchableOpacity>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const TEMPUSERS = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UseLink
        to={'/tempUsers'}
        style={[useStyle.btnPrimary, useStyle.bgFacebook, useStyle.btLarge]}
      >
        <Text style={useStyle.txWhite}>Temp Users</Text>
      </UseLink>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const FOOTER = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <UseLink to="/terms">
          <Text style={useStyle.blackLink}>{screenContent.txt03}</Text>
        </UseLink>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
