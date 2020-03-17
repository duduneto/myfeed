// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

// import Internal Components
import { UseLink, useStyle, useReducer, useChangeRdm, useListRd, UseLoader, useTimeStamp, UseIcoMoon } from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00() {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const { rdAuthUser, rdContent, rdMenuSelect, Sc08b } = useReducer();
  // const screenContent = rdContent[0];
  // const callChangeRd = useChangeRd();
  const callListRd = useListRd();
  const timeStamp = useTimeStamp


  useEffect(() => {
    callListRd({
      collection: 'opportunities',
      reducerName: 'Sc08b',
      where1: {
        field: 'opportunity_deal',
        type: '==',
        value: true
      },
    })

  }, [])

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
      {
        Sc08b
          ? Sc08b.map((opp, index) => <COMPONENT01 opportunity={opp} index={index} />)
          : <UseLoader />
      }


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
    const { opportunity, index } = props;
    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------
    let stlView07 = [
      useStyle.cardMask,
      useStyle.flexRow,
      useStyle.flexBetween,
      { paddingHorizontal: 20 }
    ];
    let stl01 = [useStyle.a1, useStyle.a2];
    let stl02 = [useStyle.a3, useStyle.a4];
    let stl03 = [useStyle.a5, useStyle.a6];
    let stlView08 = [useStyle.flex3];
    let stlTxt01 = [useStyle.txTitleCard];
  let stlTxt02 = [useStyle.txBase];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={{ marginBottom: 13 }}>
        <TouchableOpacity
          style={stlView07} key={index}
          onPress={() => {
            // callManyChangeRd({
            //   _Sc06: { docId: opportunity.user.docId },
            //   Sc06_selected_opportunity: opportunity
            // })
            // callChangeRd({ reducerName: '_Sc06', value: {docId: opportunity.user.docId} });
            // callChangeRd({ reducerName: 'Sc06_selected_opportunity', value: opportunity })
            // compProps.history.push('/activityProfile');
          }}
        >
          <UseIcoMoon name="hand" size={82} color={opportunity.options_probabilidadeVenda !== 'Baixa' ? '#008833' : '#FF9800'} />
          <View style={stlView08}>
            <Text style={stlTxt01}>{'Estrela'}</Text>
            <Text style={stlTxt01}>{opportunity.user.nomeDaEmpresa}</Text>
            <Text style={stlTxt02}>{timeStamp(new Date(opportunity.dateEndOpportunity.seconds * 1000))}</Text>
          </View>
          <STAR
            item={opportunity}
            activeStyle={true}
            onPress={() =>  console.log('Tirando Estrela')}
          />

          <UseIcoMoon name="chevron-right" size={32} color={'#2A576B'} />
        </TouchableOpacity>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const STAR = props => {
    // #region [setLogic]
    // ------------------------------

    // set Props
    let { activeStyle, onPress, item } = props;

    // let condition01 = activeStyle === 'false' && stlView05;
    console.log(activeStyle + 'meu console');

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stlImg01 = [
      { width: 40, height: 40, position: 'absolute', bottom: -13 }
    ];
    let stlImg02 = [
      { width: 6, height: 6, position: 'absolute', top: 0, left: -6 }
    ];
    let stlView05 = [
      {
        alignItems: 'center',
        // overflow: 'hidden',
        justifyContent: 'flex-end',
        paddingBottom: 26,
        backgroundColor: '#2a576b',
        width: 30,
        height: 84,
        position: 'absolute',
        top: -6,
        right: 54
      }
    ];
    let stlView06 = [
      {
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent: 'flex-end',
        paddingBottom: 26,
        width: 30,
        height: 84,
        position: 'absolute',
        top: -6,
        right: 54
      }
    ];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <TouchableOpacity style={activeStyle === true ? stlView05 : stlView06}
          onPress={() => onPress(item)}
        >
          <Image
            style={stlImg01}
            source={require('../images/part_badge1.png')}
          />
          <UseIcoMoon
            name="star"
            size={20}
            color={activeStyle === true ? '#eee' : '#ccc'}
          />
          <Image
            style={stlImg02}
            source={require('../images/part_badge2.png')}
          />
        </TouchableOpacity>
      </>
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

    let stl01 = [useStyle];
    let stl02 = [rdMenuSelect && useStyle.primaryColor];

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
    let stl01 = [useStyle];
    let stl02 = [useStyle];

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
