// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
  NetInfo
} from 'react-native';

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
  const screenContent = rdContent[3];
  const callChangeRd = useChangeRd();

  //FUNÇÕES P/ CAPTURAR TAMANHO EM DP DA TELA
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

  useEffect(() => {
    callChangeRd({ reducerName: 'Cp01', value: 'logo' });
  }, []);

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    // _STYLE
    // let stl = [useStyle.xxx,];
    let stlView01 = [useStyle.flexMaster];
    let stlScroll01 = [useStyle.scrollView];
    let stlView02 = [useStyle.pad20];

    // BOTOES
    let stlView03 = [useStyle.colView];

    // ADDACTIVITYS
    let stlView04 = [
      useStyle.card,
      useStyle.flexCenter,
      { width: widthPercentageToDP('40%'), height: 170 }
    ];
    let stlImg01 = { width: 40, height: 40 };
    let stlTxt01 = [useStyle.txCenter, { marginTop: 10 }];

    // OPORTUNITYS
    let stlView05 = stlView04;
    let stlTxt02 = stlTxt01;

    // KPI
    let stlView06 = stlView04;
    let stlTxt03 = stlTxt01;

    // CHARTS
    let stlView07 = stlView04;
    let stlTxt04 = stlTxt01;

    // REPORTS
    let stlView08 = stlView04;
    let stlTxt05 = stlTxt01;

    // CLIENTS
    let stlView09 = stlView04;
    let stlTxt06 = stlTxt01;

    // ACTIVITYS
    let stlView10 = stlView04;
    let stlTxt07 = stlTxt01;

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

      <>
        <_STYLE>
          <BOTOES />
        </_STYLE>
      </>

      // ------------------------------
      // #endregion
    );

    // set COMPONENTS
    //_______________________________

    const BOTOES = props => {
      // #region [NOsetLogic]
      // ------------------------------

      // ------------------------------
      // #endregion

      return (
        // #region [component]
        // ------------------------------

        <View style={stlView03}>
          <ADDACTIVITYS />
          <CLIENTS />
          <KPI />
          <CHARTS />
          <MYOPORTUNITYS />
          <ACTIVITYS />
        </View>

        // ------------------------------
        // #endregion
      );
    };

    //_______________________________

    const ADDACTIVITYS = props => {
      // #region [NOsetLogic]
      // ------------------------------

      // ------------------------------
      // #endregion

      return (
        // #region [component]
        // ------------------------------
        <UseLink to="/activityRegister" style={{ textDecoration: 'none' }}>
          <TouchableOpacity style={stlView04}>
            <UseIcoMoon name="bag" size={60} color={'#113646'} />
            <Text style={stlTxt01}>{screenContent.txt01}</Text>
          </TouchableOpacity>
        </UseLink>
        // ------------------------------
        // #endregion
      );
    };

    //_______________________________

    const KPI = props => {
      // #region [NOsetLogic]
      // ------------------------------

      // ------------------------------
      // #endregion

      return (
        // #region [component]
        // ------------------------------
        <UseLink to="/analysisKPI" style={{ textDecoration: 'none' }}>
          <TouchableOpacity style={stlView06}>
            <UseIcoMoon name="calculator" size={70} color={'#113646'} />
            <Text style={stlTxt03}>{screenContent.txt03}</Text>
          </TouchableOpacity>
        </UseLink>
        // ------------------------------
        // #endregion
      );
    };

    //_______________________________

    const CHARTS = props => {
      // #region [NOsetLogic]
      // ------------------------------

      // ------------------------------
      // #endregion

      return (
        // #region [component]
        // ------------------------------
        <UseLink to="/starsChart" style={{ textDecoration: 'none' }}>
          <TouchableOpacity style={stlView07}>
            <UseIcoMoon name="laptop" size={70} color={'#113646'} />
            <Text style={stlTxt04}>{`${screenContent.txt04}s`}</Text>
          </TouchableOpacity>
        </UseLink>
        // ------------------------------
        // #endregion
      );
    };

    //_______________________________

    const MYOPORTUNITYS = props => {
      // #region [NOsetLogic]
      // ------------------------------

      // ------------------------------
      // #endregion

      return (
        // #region [component]
        // ------------------------------
        <UseLink to="/reportsList" style={{ textDecoration: 'none' }}>
          <TouchableOpacity style={stlView05}>
            <UseIcoMoon name="thumbs-up" size={120} color={'#113646'} />
            <Text style={stlTxt02}>{screenContent.txt05}</Text>
          </TouchableOpacity>
        </UseLink>
        // ------------------------------
        // #endregion
      );
    };

    //_______________________________

    const CLIENTS = props => {
      // #region [NOsetLogic]
      // ------------------------------

      // ------------------------------
      // #endregion

      return (
        // #region [component]
        // ------------------------------
        <UseLink to="/clientsLists" style={{ textDecoration: 'none' }}>
          <TouchableOpacity style={stlView09}>
            <UseIcoMoon name="clients" size={64} color={'#113646'} />
            <Text style={stlTxt06}>{screenContent.txt02}</Text>
          </TouchableOpacity>
        </UseLink>
        // ------------------------------
        // #endregion
      );
    };

    //_______________________________

    const ACTIVITYS = props => {
      // #region [NOsetLogic]
      // ------------------------------

      // ------------------------------
      // #endregion

      return (
        // #region [component]
        // ------------------------------
        <UseLink to="/activitysLists" style={{ textDecoration: 'none' }}>
          <TouchableOpacity style={stlView10}>
            <UseIcoMoon name="checklist" size={60} color={'#113646'} />
            <Text style={stlTxt07}>{screenContent.txt06}</Text>
          </TouchableOpacity>
        </UseLink>
        // ------------------------------
        // #endregion
      );
    };

    //_______________________________

    // ---------------------- THE END
    return <SCREEN />;
  }
