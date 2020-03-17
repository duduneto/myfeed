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

    let condition01 =
      Cp01 && Cp01 === 'search' ? useStyle.searchBar : useStyle.navbarView;

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={condition01}>{props.children}</View>

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
    let condition01 = Cp01 && Cp01 === 'search' ? '#2A576B' : '#EEE';

    // ------------------------------
    // #endregion
    return (
      // #region [component]
      // ------------------------------

      <View style={stl01}>
        {/* Verifica se está na pagina inicial ou Edição de Atividade/Oportunidade/Cliente (Este ultimo para evitar bug desconhecido) */}
        {compProps.props && compProps.props.location.pathname === '/menus' ? (
          <></>
        ) : (
          <TouchableOpacity
            style={stl02}
            onPress={() => {
              compProps.props.history.goBack();
            }}
          >
            <UseIcoMoon name="chevron-left" size={26} color={condition01} />
          </TouchableOpacity>
        )}
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
        {Cp01 && Cp01 === 'logo' ? (
          <Image style={stl02} source={require('../images/logo.png')} />
        ) : (
          <Text style={stl03}>{Cp01 === 'search' ? '' : Cp01}</Text>
        )}
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
          <UseIcoMoon name="logout" size={22} color="#fff" />
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
