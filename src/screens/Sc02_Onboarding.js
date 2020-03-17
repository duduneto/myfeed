// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useFbUpdateData,
  UseRedirect,
  useReducer,
  UseIcoMoon
} from './useMorfos';

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

  //FUNÇÕES P/ CAPTURAR TAMANHO EM DP DA TELA
  // Juan: `fazer isso um hook (use) que permita fazer a diferença entre web e mobile
  /*
  const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };
  const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  };
 */

  // _STYLE
  // let stl = [useStyle.xxx,];
  let stlView01 = [useStyle.flexMaster];
  let stlScroll01 = [useStyle.scrollView];
  let stlView02 = [useStyle.longBar];
  let stlView02b = [useStyle.pad20];

  // NAV
  let srcImg01 = require('../images/logo.png');

  let stlView03 = [useStyle.navbarView];
  let stlView04 = [useStyle.leftBox];
  let stlView05 = [useStyle.centerBox];
  let stlView06 = [useStyle.rightBox];
  let stlImg01 = {
    width: 80,
    height: 40
  };

  // ALLSPLASHS
  let stlView07 = [useStyle.card, useStyle.flex1, useStyle.flexCenter];
  let stlImg02 = {
    marginTop: 40,
    width: '100%',
    height: 200,
    opacity: 0.8
  };
  let stlTxt01 = [
    useStyle.noPostsTxt,
    { fontSize: 25, marginTop: 24, padding: 0 }
  ];
  let stlTxt02 = [useStyle.noPostsTxt, { marginTop: 5, padding: 0 }];

  // BUTTON
  let stlView08 = [useStyle.flexCenter];
  let stlBtn1 = [useStyle.btnPrimary, useStyle.btnLarge, { marginBottom: 0 }];
  let stlTxt03 = [useStyle.txInverseColor];

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
        <View style={stlView02} />
        <ScrollView style={stlScroll01}>
          <View style={stlView02b}>
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
    <>
      <NAV />
      <_STYLE>
        <SPLASHSTATE />
        <BUTTON />
      </_STYLE>
    </>
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

      <View style={stlView03}>
        <View style={stlView04} />
        <View style={stlView05}>
          <Image resizeMode={'contain'} style={stlImg01} source={srcImg01} />
        </View>
        <View style={stlView06} />
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SPLASHSTATE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <>
        <SPLASH1 />
        <SPLASH2 />
        <SPLASH3 />
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const ALLSPLASHS = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView07}>
        <Image resizeMode={'contain'} style={stlImg02} source={props.img} />
        <Text style={stlTxt01}>Titulo</Text>
        <Text style={stlTxt02}>Descrição</Text>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SPLASH1 = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <ALLSPLASHS
        title={'Bem-Vindo ao HugU!'}
        description={
          'Prepare-se para receber muitos abraços dentro da comunidade.'
        }
        img={require('../images/hug.png')}
      />

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SPLASH2 = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <ALLSPLASHS
        title={'Bem-Vindo ao HugU!'}
        description={
          'Prepare-se para receber muitos abraços dentro da comunidade.'
        }
        img={require('../images/hug.png')}
      />

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SPLASH3 = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <ALLSPLASHS
        title={'Bem-Vindo ao HugU!'}
        description={
          'Prepare-se para receber muitos abraços dentro da comunidade.'
        }
        img={require('../images/hug.png')}
      />

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BUTTON = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView08}>
        <TouchableOpacity style={stlBtn1}>
          <Text style={stlTxt03}>PRÓXIMO</Text>
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
