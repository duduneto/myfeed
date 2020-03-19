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
  ImageBackground,
  PixelRatio
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useChangeRd,
  UseIcoMoon
} from './useMorfos';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './style.css'

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00() {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const { rdAuthUser, rdContent, rdMenuSelect } = useReducer();
  // const screenContent = rdContent[3];
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
  let stlView03 = [useStyle.flex1];

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
        <MAIN_TITLE />
        <INITIAL_LIST />
        <SUB_TITLE />
        <EXPLORE />
        <SUB_TITLE_ADDS />
        <MY_ADDS />
        {/* 
          <ACTIVITYS /> 
          */}
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const MAIN_TITLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: '#222222'
      }} >My Plants</Text>
      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SUB_TITLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: '#222222'
      }} >Explore</Text>
      // ------------------------------
      // #endregion
    );
  };

  const SUB_TITLE_ADDS = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: '#222222'
      }} >My Adds</Text>
      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const EXPLORE = props => {
    // #region [NOsetLogic]
    // ------------------------------
    let list = [
      {
        title: 'Gray Vase',
        description: 'Lorem Ipsum',
        price: '9.99',
        img: 'https://images.unsplash.com/photo-1554577621-1a3def0b656c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'
      },
      {
        title: 'Cactus',
        description: 'Lorem Ipsum',
        price: '9.99',
        img: 'https://images.unsplash.com/photo-1532204182725-d0f67855ac87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
      },
      {
        title: 'Howea',
        description: 'Lorem Ipsum',
        price: '9.99',
        img: 'https://images.unsplash.com/photo-1572186192734-e82b57dc4435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
      },
      {
        title: 'Calanthea',
        description: 'Lorem Ipsum',
        price: '9.99',
        img: 'https://images.unsplash.com/photo-1531879385813-f8d895f4580b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=729&q=80'
      },
    ];
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      // <UseLink to="/clientsLists" style={{ textDecoration: 'none' }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginBottom: 30}}
      >
        <View style={{
          flexDirection: 'row'
        }} >

        </View>
        {
          list.map(item => {
            return (
              <TouchableOpacity style={{
                marginRight: 30,
                marginTop: 20
              }} >
                <View >
                  <View style={{ left: 8, top: 15, position: 'absolute' }}>
                  </View>
                  <View style={{ flexDirection: 'row', height: 'auto' }} >
                    <Image
                      style={{
                        height: 120,
                        width: 120,
                        borderRadius: 60,
                      }}
                      source={item.img}
                    />
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: '#fff', width: 50, height: 20, alignItems: 'center', borderRadius: 20, bottom: 20 }}>
                      <Text style={{ color: '#222222', fontWeight: 'bold' }} >{`$${item.price}`}</Text>
                    </View>
                  </View>
                  <View style={{ alignContent: 'flex-start', bottom: 10 }}>
                    <View>
                      <Text style={{ color: '#222222', fontWeight: 'bold', fontSize: 16 }} >{item.title}</Text>
                      <Text style={{ color: '#222222', fontWeight: '400', fontSize: 14 }} >{item.title}</Text>
                    </View>
                  </View>
                </View>

              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      //</UseLink> 
      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const MY_ADDS = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <Carousel
          afterChange={(e) => console.log(e)}
          style={{marginTop: 20}}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >

            <ImageBackground
            source={'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'}
            style={{height: 165}}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >

            <ImageBackground
            source={'https://images.unsplash.com/photo-1579491197764-170bdcd99bcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'}
            style={{height: 165}}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >

            <ImageBackground
            source={'https://images.unsplash.com/photo-1576873866239-7d7fd7402e1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'}
            style={{height: 165}}
            />
          </View>
        </Carousel>
      </>
      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const INITIAL_LIST = props => {
    // #region [NOsetLogic]
    // ------------------------------
    let list = [
      {
        title: 'Monasteria',
        img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
      },
      {
        title: 'Cactus',
        img: 'https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
      },
      {
        title: 'Howea',
        img: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
      },
      {
        title: 'Calanthea',
        img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
      },
    ];
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      // <UseLink to="/clientsLists" style={{ textDecoration: 'none' }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ height: 260, marginBottom: 30 }}
      >
        <View style={{
          flexDirection: 'row'
        }} >

        </View>
        {
          list.map(item => {
            return (
              <TouchableOpacity style={{
                marginRight: 30,
                marginTop: 20
              }} >
                <View style={{ height: 200, width: 160, top: 15, backgroundColor: '#31a05e', borderRadius: 30 }} >
                  <View style={{ left: 8, top: 15, position: 'absolute' }}>
                    <UseIcoMoon name="check-circle" size={25} color={'#fff'} />
                  </View>
                  <View style={{ flexDirection: 'row', height: 'auto' }} >
                    <Image
                      style={{
                        height: 170,
                        width: 130,
                        borderRadius: 20,
                        position: 'absolute',
                        left: 40,
                        top: -15,
                      }}
                      source={item.img}
                    />
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', top: 165, left: 15 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', marginLeft: 30, fontSize: 16 }} >{item.title}</Text>
                  </View>
                </View>

              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      //</UseLink> 
      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  
  // ---------------------- THE END
  return <SCREEN />;
}
