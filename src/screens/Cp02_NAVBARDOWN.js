// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  UseIcoMoon,
  useReducer,
  useChangeManyRd
} from './useMorfos';

// ------------------------------
// #endregion

export default function Cp02(compProps) {
  // #region [setLogic] & Reducers
  // ------------------------------

  const { Cp01 } = useReducer();
  // const screenContent = rdContent[0];
  const callChangeManyRd = useChangeManyRd();

  // ------------------------------

  // set Hook
  // const changeRdNavSelection = useChangeRd();

  // ------------------------------
  // #endregion

  // #region [allStyles]
  // ------------------------------

  // _STYLE
  // let stl = [useStyle.xxx,];
  let stlView01 = [useStyle.tabFooter];

  // HOME
  let stlView02 = [useStyle.iconCenter];
  let stlTxt01 = [useStyle.tx12];

  // SEARCH
  let stlView03 = stlView02;
  let stlTxt02 = stlTxt01;

  // STARS
  let stlView04 = stlView02;
  let stlTxt03 = stlTxt01;

  // SOLDS
  let stlView05 = stlView02;
  let stlTxt04 = stlTxt01;

  let active = { color: '#337b9a' };
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

      <View style={stlView01}>{props.children}</View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <_STYLE>
      <HOME />
      <SEARCH />
      <STARS />
      <SOLDS />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const HOME = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let cond01 = Cp01 && Cp01 === 'logo' ? '#007fb7' : '#222';
    let cond02 =
      Cp01 && Cp01 === 'logo' ? { color: '#007fb7' } : { color: '#222' };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UseLink to="/menus" style={{ textDecoration: 'none' }}>
        <View style={stlView02}>
          <UseIcoMoon name="home" size={22} color={cond01} />
          <Text style={[stlTxt01, cond02]}>Início</Text>
        </View>
      </UseLink>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SEARCH = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let cond01 = Cp01 && Cp01 === 'search' ? '#007fb7' : '#222';
    let cond02 =
      Cp01 && Cp01 === 'search' ? { color: '#007fb7' } : { color: '#222' };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <TouchableOpacity
        style={{ textDecoration: 'none' }}
        onPress={() => {
          compProps.props.history.push('/search');
        }}
      >
        <View style={stlView03}>
          <UseIcoMoon name="search" size={22} color={cond01} />
          <Text style={[stlTxt02, cond02]}>Procurar</Text>
        </View>
      </TouchableOpacity>
      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const STARS = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let cond01 = Cp01 && Cp01 === 'Estrela' ? '#007fb7' : '#222';
    let cond02 =
      Cp01 && Cp01 === 'Estrela' ? { color: '#007fb7' } : { color: '#222' };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <TouchableOpacity
        onPress={() => {
          callChangeManyRd({
            Sc04b_categ: ['Estrela'],
            Cp01: 'Estrela',
            Sc04_list_opp: null,
            Sc07_oportunities: false,
          });
          compProps.props.history.push('/dealsListB');
        }}
        style={{ textDecoration: 'none' }}
      >
        <View style={stlView04}>
          <UseIcoMoon name="star" size={22} color={cond01} />
          <Text style={[stlTxt03, cond02]}>Estrela</Text>
        </View>
      </TouchableOpacity>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SOLDS = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let cond01 = Cp01 && Cp01 === 'Negócios Fechados' ? '#007fb7' : '#222';
    let cond02 =
      Cp01 && Cp01 === 'Negócios Fechados'
        ? { color: '#007fb7' }
        : { color: '#222' };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UseLink to="/soldLists" style={{ textDecoration: 'none' }}>
        <View style={stlView05}>
          <UseIcoMoon name="thumbs-up1" size={22} color={cond01} />
          <Text style={[stlTxt04, cond02]}>Fechados</Text>
        </View>
      </UseLink>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
