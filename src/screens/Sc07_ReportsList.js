// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
} from 'react-native';

// import Internal Components
import {
  UseRedirect,
  useStyle,
  useReducer,
  useChangeRd,
  useChangeManyRd,
  useListRd,
  UseIcoMoon,
  useCurrencyMask,
  UseLoader,
  UseRefreshView
} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const {
    getListPending,
    rdContent,
    rdMenuSelect,
    Sc07_oportunities,
    redirect
  } = useReducer();
  // const screenContent = rdContent[0];
  const screenContent = rdContent[4];
  const callListRd = useListRd();
  const callChangeRd = useChangeRd();
  const callChangeManyRd = useChangeManyRd();
  const currencyMask = useCurrencyMask;

  let infoOpportunities = {
    collection: 'opportunities',
    reducerName: 'Sc07_oportunities',
    mergeUser: true,
    mergeUserField: 'clientId',
    mergeUserFbCollection: 'clients'
  };

  const callToDb = () => {
    callListRd(infoOpportunities);
    callChangeRd({ reducerName: 'Cp01', value: 'Minhas Oportunidades' });
  }

  useEffect(() => {
    callToDb()
  }, []);

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

  // ------------------------------
  // #endregion

  let _startScrollMoving;
  let triggerRefresh = 150;
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

    let firstPosition = false;
    return (
      // #region [component]
      // ------------------------------

      <View style={[stl01]}>
        <ScrollView
          style={stl02}
        >
          <UseRefreshView style={stl03}
            triggerRefreshHeight={200}
            onRefresh={callToDb}
          >
            {/*  */}

            {props.children}

            {/*  */}
          </UseRefreshView>
          {/* <UseRefresh 
          style={{ height: 150, width: widthPercentageToDP('100%')}}
          triggerRefreshHeight={150}
          onRefresh={callToDb}
          /> */}
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
      {/* {redirect && <UseRedirect to={`/${redirect}`} />} */}
      <_STYLE>
        {
          getListPending === true ? <UseLoader /> : <>
            {/* <REPORTS /> */}
          </>
        }
        <FILTER />
        <REPORTS />
      </_STYLE>
    </>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________
  const FILTER = () => {

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.card, useStyle.flexRow, useStyle.flexBetween];
    //prettier-ignore
    let stl01b = [useStyle.card, useStyle.flexCenter, { width: widthPercentageToDP('43%'), height: 160 }];
    let stl02 = [useStyle.flex2, { paddingLeft: 20 }];
    let stl03 = [useStyle.txTitleCard];
    let stl04 = [useStyle.txTitleCard, useStyle.txCenter];
    let stl05 = [useStyle.txSubTitleCard];
    let stl05b = [
      useStyle.txSubTitleCard,
      useStyle.txCenter,
      { marginTop: 10 }
    ];
    let stl06 = [{ marginRight: -10 }];
    //prettier-ignore
    let stl07 = [{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', flex: 1 }
    ];

    // ------------------------------
    // #endregion


    return (
      <TouchableOpacity
        style={stl01}
        onPress={() => {
          compProps.history.push('/filterOpp');
        }}
      >
        <Text style={stl03} >Filtro Avançado de Oportunidades</Text>
      </TouchableOpacity>
    )
  }

  //_______________________________

  const REPORTS = props => {
    // #region [setLogic]
    // ------------------------------
    let elementsInfo = [
      'Linha VM',
      'Linha F',
      'Consórcio',
      'Seguros',
      'Semi Novos'
    ];

    // for (let i = 31; i < 36; i++) {
    //   elementsInfo.push(screenContent[`txt${i}`]);
    // }
    const info_opportunities = (_list, filter_field, filter_value) => {
      let filter_deals_opportunities =
        filter_field === 'opportunity_deal'
          ? _list
          : _list.filter(_opp => _opp.opportunity_deal !== true);
      let list = !filter_field
        ? filter_deals_opportunities
        : filter_deals_opportunities.filter(
          item => item[filter_field] === filter_value
        );
      let _total_clients = new Array();
      let _total_value_list = 0;
      list &&
        list.map(_opp => {
          _total_value_list = _total_value_list + currencyMask(_opp.total_amount_opportunity, true);
          if (!_total_clients.find(clientId => clientId === _opp.user.docId)) {
            _total_clients.push(_opp.user.docId);
          }
        });
      return {
        length: list.length,
        total_clients: _total_clients.length,
        total_value: _total_value_list,
        filtered: !filter_field ? undefined : list
      };
    };
    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.card, useStyle.flexRow, useStyle.flexBetween];
    //prettier-ignore
    let stl01b = [useStyle.card, useStyle.flexCenter, { width: widthPercentageToDP('43%'), height: 160 }];
    let stl02 = [useStyle.flex2, { paddingLeft: 20 }];
    let stl03 = [useStyle.txTitleCard];
    let stl04 = [useStyle.txTitleCard, useStyle.txCenter];
    let stl05 = [useStyle.txSubTitleCard];
    let stl05b = [
      useStyle.txSubTitleCard,
      useStyle.txCenter,
      { marginTop: 10 }
    ];
    let stl06 = [{ marginRight: -10 }];
    //prettier-ignore
    let stl07 = [{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', flex: 1 }
    ];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {Sc07_oportunities && (
          <>
            {/* TOTAL */}
            <TouchableOpacity
              onPress={() => {
                callChangeRd({
                  reducerName: 'Cp01',
                  value: 'Total'
                });
                compProps.history.push('/dealsListB');
              }}
            >
              <View style={stl01}>
                <UseIcoMoon name="align-left" size={30} color={'#2A576B'} />
                <View style={stl02}>
                  <Text style={stl03}>Total</Text>
                  <Text style={stl05}>{`${
                    info_opportunities(Sc07_oportunities).length
                    } Oportunidades/ ${
                    info_opportunities(Sc07_oportunities).total_clients
                    } Clientes/ Total Valor: R$${
                    currencyMask(info_opportunities(Sc07_oportunities).total_value)
                    }`}</Text>
                </View>
                <View style={stl06}>
                  <UseIcoMoon
                    name="chevron-right"
                    size={28}
                    color={'#2A576B'}
                  />
                </View>
              </View>
            </TouchableOpacity>
            {/* ESTRELA */}
            <TouchableOpacity
              onPress={() => {
                compProps.history.push('/dealsListB');
                callChangeManyRd({
                  Sc04b_categ: ['Estrela'],
                  Cp01: 'Estrelas'
                });
              }}
            >
              <View style={stl01}>
                <UseIcoMoon name="align-left" size={30} color={'#2A576B'} />
                <View style={stl02}>
                  <Text style={stl03}>Estrelas</Text>
                  <Text style={stl05}>{`${
                    info_opportunities(
                      Sc07_oportunities,
                      'options_probabilidadeVenda_starred',
                      true
                    ).length
                    } Oportunidades/ ${
                    info_opportunities(
                      Sc07_oportunities,
                      'options_probabilidadeVenda_starred',
                      true
                    ).total_clients
                    } Clientes/ Total Valor: R$${
                    currencyMask(info_opportunities(
                      Sc07_oportunities,
                      'options_probabilidadeVenda_starred',
                      true
                    ).total_value)
                    }`}</Text>
                </View>
                <View style={stl06}>
                  <UseIcoMoon
                    name="chevron-right"
                    size={28}
                    color={'#2A576B'}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/* NEG. FECHADOS */}
            <TouchableOpacity
              onPress={() => {
                compProps.history.push('/soldLists');
                callChangeRd({
                  reducerName: 'Cp01',
                  value: 'Negócios Fechados'
                });
              }}
            >
              <View style={stl01}>
                <UseIcoMoon name="align-left" size={30} color={'#2A576B'} />
                <View style={stl02}>
                  <Text style={stl03}>Negócios Fechados</Text>
                  <Text style={stl05}>{`${
                    info_opportunities(
                      Sc07_oportunities,
                      'opportunity_deal',
                      true
                    ).length
                    } Oportunidades/ ${
                    info_opportunities(
                      Sc07_oportunities,
                      'opportunity_deal',
                      true
                    ).total_clients
                    } Clientes/ Total Valor: R$${
                    currencyMask(info_opportunities(
                      Sc07_oportunities,
                      'opportunity_deal',
                      true
                    ).total_value)
                    }`}</Text>
                </View>
                <View style={stl06}>
                  <UseIcoMoon
                    name="chevron-right"
                    size={28}
                    color={'#2A576B'}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/* ESTILO MENUS */}
            <View style={stl07}>
              {elementsInfo &&
                elementsInfo.map((product, index) => (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        // callChangeRd({
                        //   reducerName: 'redirect',
                        //   value: 'dealsList'
                        // });
                        // callChangeRd({
                        //   reducerName: 'Sc07_oportunities',
                        //   value: info_opportunities(Sc07_oportunities,'opportunity_products_category', product).filtered
                        // });
                        callChangeManyRd({
                          Sc07_oportunities: info_opportunities(
                            Sc07_oportunities,
                            'opportunity_products_category',
                            product
                          ).filtered,
                          Cp01: product
                        });
                        compProps.history.push('/dealsListB');
                      }}
                    >
                      <View style={stl01b} key={index}>
                        <UseIcoMoon
                          name="align-left"
                          size={30}
                          color={'#2A576B'}
                        />
                        <View>
                          <Text style={stl04}>{product}</Text>
                          <Text style={stl05b}>{`${
                            info_opportunities(
                              Sc07_oportunities,
                              'opportunity_products_category',
                              product
                            ).length
                            } Oportunidades/ ${
                            info_opportunities(
                              Sc07_oportunities,
                              'opportunity_products_category',
                              product
                            ).total_clients
                            } Clientes/ Total Valor: ${
                            currencyMask(info_opportunities(
                              Sc07_oportunities,
                              'opportunity_products_category',
                              product
                            ).total_value)
                            }`}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                ))}
            </View>
          </>
        )}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
