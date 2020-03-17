// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useChangeRd,
  useChangeManyRd,
  useFbUpdateData,
  useListRd,
  UseIcoMoon,
  useTimeStamp,
  UseLoader,
  useForm,
  useFbCustomData,
  useFbUpdateFieldFromDoc,
  useCurrencyMask
} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const {
    rdAuthUser,
    rdContent,
    yOffSetPosition,
    Sc06_opportunities_deals,
    Sc06_opp_pending,
    deleteDocPending,
    _Sc06,
    Sc06,
    rdClientActivities,
    rdClientOpportunities,
    Sc06_selected_activity,
    Sc06_selected_opportunity
    // rdMarquerStyle
  } = useReducer();
  // const screenContent = rdContent[0];
  const callChangeRd = useChangeRd();
  const callManyChangeRd = useChangeManyRd();
  const callFbUpdateData = useFbUpdateData();
  const callFbUpdateFieldFromDoc = useFbUpdateFieldFromDoc();
  const callFbCustomData = useFbCustomData();
  const callListRd = useListRd();
  const timeStamp = useTimeStamp;
  const currencyMask = useCurrencyMask;
  let _refScrollView;
  // ---------------- Manipulando informações para Evitar Persistências de dados e o Redirecionamento automático na Tela Sc12b
  // if (!Sc06) {
  //   callManyChangeRd({ Sc06: _Sc06, _Sc06: false });
  //   // callChangeRd({ reducerName: 'Sc06', value: _Sc06 });
  //   // callChangeRd({ reducerName: '_Sc06', value: false });
  // }

  // let infoActivities = {
  //   collection: 'activities',
  //   reducerName: 'rdClientActivities',
  //   where1: {
  //     field: 'clientId',
  //     type: '==',
  //     value: Sc06.docId
  //   }
  // };

  // let infoOpportunities = {
  //   collection: 'opportunities',
  //   reducerName: 'rdClientOpportunities',
  //   where1: {
  //     field: 'clientId',
  //     type: '==',
  //     value: Sc06.docId
  //   }
  // };
  let offSetYPosition;
  console.log(offSetYPosition)
  const keepYPosition = () => {
    callChangeRd({ reducerName: 'yOffSetPosition', value: offSetYPosition });
  };

  // component Call (TOPLEVEL)
  useEffect(() => {
    callListRd({
      collection: 'activities',
      reducerName: 'rdClientActivities',
      where1: {
        field: 'clientId',
        type: '==',
        value: Sc06.docId
      }
    });
    callListRd({
      collection: 'opportunities',
      reducerName: 'rdClientOpportunities',
      where1: {
        field: 'clientId',
        type: '==',
        value: Sc06.docId
      }
    });
    callManyChangeRd({
      Cp01: "Perfil de Cliente",
      fromSc06: true
    });

    return () => {
      // callChangeRd({ reducerName: 'Sc06_selected_activity', value: false });
      // callChangeRd({ reducerName: 'Sc06_selected_opportunity', value: false });
      callManyChangeRd({
        Sc06_selected_activity: false,
        Sc06_selected_opportunity: false,
        rdClientActivities: false,
        rdClientOpportunities: false,
        updateDataPending: false,
        updateDataError: false
      });
    };
  }, []);

  // ------------------------------
  // #endregion

  // #region [allStyles]
  // ------------------------------

  // _STYLE
  // let stl = [useStyle.xxx,];
  let stlView01 = [useStyle.flexMaster, useStyle.whitePage];
  let stlScroll01 = [useStyle.scrollView];
  let stlView02 = [useStyle.longBar];
  // let stlView02b = [useStyle.pad20];
  let stlView02b = { paddingVertical: 20, paddingHorizontal: 0 };

  // CLIENT
  let stlView03 = [useStyle.cardMask];
  let stlView04 = [
    useStyle.itemAccordion,
    useStyle.flexBetween,
    useStyle.flexRow,
    { paddingHorizontal: 20 }
  ];
  let stlView05 = [
    useStyle.flexRow,
    {
      backgroundColor: '#f6f6f6',
      paddingHorizontal: 20,
      paddingVertical: 30,
      alignItems: 'flex-start'
    }
  ];

  let stlTxt01 = [useStyle.txTitleCard, useStyle.txCenter, useStyle.flex2];
  let stlTxt02 = [useStyle.txTitleProfile];
  let stlTxt03 = [useStyle.flex1];
  let stlTxt04 = [stlTxt03, { color: '#999' }];

  // ACTIVITY
  let stlView07 = [
    stlView04,
    {
      backgroundColor: '#f6f6f6',
      paddingVertical: 20,
      alignItems: 'flex-start'
    }
  ];
  let stlView08 = [useStyle.flexEnd, { marginBottom: 30, marginTop: -10 }];

  let stlTxt05 = [
    stlTxt01,
    useStyle.itemAccordion,
    { alignItems: 'flex-start' }
  ];
  let stlTxt06 = [useStyle.xx];
  let stlTxt07 = stlTxt04;
  let stlLink01 = { fontWeight: 'bold' };

  // OPORTUNITY
  let stlView09 = stlView03;
  let stlView10 = stlView07;

  let stlTxt08 = stlTxt05;
  let stlTxt09 = [useStyle.xx];
  let stlTxt10 = stlTxt07;

  let stl01 = [useStyle.flex1, useStyle.flexEnd];
  let stl01b = [useStyle.btn, useStyle.btnXSmall];

  //ITEM_TOGGLE
  let stlToggleView10 = [useStyle.cardMask];
  let stlToggleView11 = [
    useStyle.flexRow,
    useStyle.flexBetween,
    { paddingHorizontal: 20 }
  ];
  let stlToggleView12 = [
    useStyle.flexRow,
    useStyle.flexBetween,
    { paddingHorizontal: 20, marginBottom: -18, marginTop: 20 }
  ];
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
        <ScrollView
          style={stlScroll01}
          ref={ref => (_refScrollView = ref)}
          scrollEventThrottle={ref => (offSetYPosition = ref.nativeEvent.contentOffset.y)}
          onLayout={() => {
            if (yOffSetPosition) {
              _refScrollView.scrollTo({
                x: 0,
                y: yOffSetPosition,
                animated: false
              });
            }
          }}
        >
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

  const FORM = props => {
    // #region [setLogic]

    // ------------------------------

    // --- Use Form APP
    // ------------------------------
    // set Hook
    const { values, handleChangeState } = useForm();
    // ------------------------------

    // ------------------------------

    // #endregion
    return props.renderProps({ values, handleChangeState });
  };

  //_______________________________

  const SCREEN = () => (
    // #region [component]
    // ------------------------------
    <>
      <_STYLE>
        <FORM
          renderProps={({ values, handleChangeState }) => (
            <>
              {!rdClientActivities && !rdClientOpportunities ? (
                <UseLoader style={{ marginTop: 80 }} />
              ) : (
                <>
                  <CLIENT />
                  <View style={{ paddingHorizontal: 20 }}>
                    <ITEM_TOGGLE
                      itemToggle={'opportunity'}
                      handleChangeState={handleChangeState}
                      values={values}
                    >
                      <OPORTUNITY
                        values={values}
                        handleChangeState={handleChangeState}
                      />
                    </ITEM_TOGGLE>
                    <ITEM_TOGGLE
                      toggleDefault={!!Sc06_selected_activity}
                      itemToggle={'activity'}
                      handleChangeState={handleChangeState}
                      values={values}
                    >
                      <ACTIVITY
                        values={values}
                        handleChangeState={handleChangeState}
                      />
                    </ITEM_TOGGLE>
                  </View>
                </>
              )}
            </>
          )}
        />
      </_STYLE>
    </>
    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const ITEM_TOGGLE = props => {
    // #region [NOsetLogic]
    // ------------------------------
    const { itemToggle, values, handleChangeState, toggleDefault } = props;
    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------
    const stl01 = [
      useStyle.flexRow,
      useStyle.flexBetween,
      { paddingVertical: 20, flex: 1 }
    ];
    const stl02 = [];
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {(values[itemToggle] === true || (values[itemToggle] === undefined && itemToggle === 'opportunity')) || (values[itemToggle] === undefined && toggleDefault === true) 
        ? (
          <>
            {/* ITEM ABERTO */}
            <View style={stlToggleView10}>
              <TouchableOpacity
                style={stlToggleView11}
                onPress={() => {
                  handleChangeState(false, itemToggle);
                }}
              >
                <View style={stl01}>
                  <Text style={stlTxt01}>
                    {itemToggle === 'opportunity'
                      ? 'Oportunidades'
                      : 'Atividades'}
                  </Text>
                  <UseIcoMoon name="minus-square" size={22} color={'#999'} />
                </View>
              </TouchableOpacity>
              <View>{props.children}</View>
            </View>
          </>
        ) : (
          <ITEM_CLOSED
            productName={'productName'}
            itemToggle={itemToggle}
            values={values}
            handleChangeState={handleChangeState}
          />
        )}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const ITEM_CLOSED = props => {
    // #region [NOsetLogic]
    // ------------------------------
    const { productName, values, handleChangeState, itemToggle } = props;
    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------
    let stlNoAct = [useStyle.card];
    let stl01 = [useStyle.flexRow, useStyle.flexBetween];
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {/* ITEM FECHADO */}
        <TouchableOpacity
          style={stlNoAct}
          onPress={() => {
            handleChangeState(true, itemToggle);
          }}
        >
          <View style={stl01}>
            <Text style={stlTxt01}>
              {itemToggle === 'opportunity' ? 'Oportunidades' : 'Atividades'}
            </Text>
            <UseIcoMoon name="plus-square" size={22} color={'#999'} />
          </View>
        </TouchableOpacity>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const CLIENT = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion
    return (
      // #region [component]
      // ------------------------------

      <View style={[stlView03, { marginHorizontal: 20 }]}>
        <View style={stlView04}>
          <Text style={stlTxt01}>Cliente</Text>
          {/* <UseIcoMoon name="x-square" size={22} color={'#999'} /> */}
        </View>

        <View style={stlView05}>
          <UseIcoMoon name="user" size={42} color={'#333'} />
          <View style={[useStyle.flexRow, useStyle.flex2]}>
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
              <Text style={stlTxt02}>{Sc06.nomeDaEmpresa}</Text>
              <Text style={stlTxt03}>{Sc06.nomeFantasia}</Text>
              <Text style={stlTxt04}>{Sc06.rua}</Text>
              <Text style={stlTxt04}>{Sc06.foneDeContato}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              callChangeRd({
                reducerName: 'Sc12c',
                value: Sc06
              });
              compProps.history.push('/editClient');
            }}
          >
            <UseIcoMoon name="edit" size={22} color={'#999'} />
          </TouchableOpacity>
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const ACTIVITY = props => {
    // #region [setLogic]
    // ------------------------------

    const { values, handleChangeState } = props;

    const _recent_rdClientActivities =
      rdClientActivities &&
      rdClientActivities.sort((act1, act2) =>
        act1.createdAt.seconds < act2.createdAt.seconds ? 1 : -1
      );

    let stlActive = [
      useStyle.cardMask,
      {
        marginHorizontal: 20,
        borderColor: '#6f90cc',
        borderWidth: 2
      }
    ];
    let stlNoAct = [useStyle.cardMask, { marginHorizontal: 20 }];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {_recent_rdClientActivities &&
          _recent_rdClientActivities.map((activity, index) => (
            <>
              <SELECTED_VIEW
                style={[]}
                key={index}
                condition={
                  Sc06_selected_activity &&
                  activity.docId === Sc06_selected_activity.docId
                }
                initialColor={'#9eb0d0'}
                endColor={'transparent'}
                duration={1000}
              >
                <View
                  style={
                    Sc06_selected_activity &&
                    activity.docId === Sc06_selected_activity.docId
                      ? stlActive
                      : stlNoAct
                  }
                >
                  {/* <Text style={stlTxt05}>Atividades</Text> */}
                  <View style={stlView07}>
                    <View style={useStyle.flex2}>
                      <Text style={stlTxt06}>
                        {timeStamp(
                          new Date(activity.dateActivity.seconds * 1000)
                        )}
                      </Text>
                      <Text style={stlTxt07}>
                        {`Contato: ${activity.options_contato} / Observações: ${activity.obs_activity}`}
                      </Text>
                    </View>
                    {/* BOTÃO EDITAR */}
                    <TouchableOpacity
                      onPress={() => {
                        callChangeRd({
                          reducerName: 'Sc06c_activity',
                          value: { ...activity, user: Sc06 }
                        });
                        compProps.history.push('/editActivity');
                      }}
                    >
                      <UseIcoMoon name="edit" size={22} color={'#999'} />
                    </TouchableOpacity>
                    {/* BOTÃO DE EXCLUIR */}
                    <TouchableOpacity
                      style={{ marginLeft: 10 }}
                      onPress={() => {
                        !!values.delete_item === false
                          ? handleChangeState(activity.docId, 'delete_item')
                          : handleChangeState(false, 'delete_item');
                      }}
                    >
                      <UseIcoMoon name="trash" size={22} color={'#999'} />
                    </TouchableOpacity>
                  </View>
                  {values.delete_item &&
                  activity.docId === values.delete_item ? (
                    <View style={stlView07}>
                      <Text>Deseja Excluir este Item?</Text>
                      <>
                        {deleteDocPending === true ? (
                          <UseLoader />
                        ) : (
                          <>
                            <TouchableOpacity
                              onPress={() => {
                                keepYPosition();
                                let newArray = _recent_rdClientActivities;
                                newArray.splice(index, 1);
                                callFbCustomData({
                                  callName: 'deleteDoc',
                                  collection: 'activities',
                                  docId: activity.docId,
                                  reducerName: 'rdClientActivities',
                                  dataToCustom: newArray
                                });
                                callFbUpdateFieldFromDoc({
                                  collection: 'clients',
                                  reducerName: 'rdUpdatedDoc',
                                  docId: Sc06.docId,
                                  dataToUpdate: [
                                    {
                                      nameField: 'activities',
                                      value: 1,
                                      operation: -1
                                    }
                                  ]
                                });
                              }}
                            >
                              <Text>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                handleChangeState(false, 'delete_item');
                              }}
                            >
                              <Text>Não</Text>
                            </TouchableOpacity>
                          </>
                        )}
                      </>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </SELECTED_VIEW>
              {/* Link de Adicionar Oportunidade */}
              {/* <View style={stlView08}>
              <UseLink to="/" style={{ textDecoration: 'none' }}>
                <Text style={stlLink01}>Add. Oportunidade</Text>
              </UseLink>
            </View> */}
            </>
          ))}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SELECTED_VIEW = props => {
    // #region [setLogic]
    // ------------------------------
    const animatedColor = new Animated.Value(0);
    const interpolateColor = animatedColor.interpolate({
      inputRange: [0, 150],
      outputRange: [props.initialColor, props.endColor]
    });
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <Animated.View
        key={props.key}
        style={[
          ...props.style,
          props.condition && {
            backgroundColor: interpolateColor,
            paddingTop: 20,
            marginTop: -18
          }
        ]}
        onLayout={ref => {
          // if(Sc06_selected_opportunity && opportunity.docId === Sc06_selected_opportunity.docId){
          if (props.condition) {
            _refScrollView.scrollTo({
              x: ref.nativeEvent.layout.x,
              y: ref.nativeEvent.layout.y + 20,
              animated: true
            });
            Animated.timing(animatedColor, {
              toValue: 150,
              duration: props.duration
            }).start();
          }
        }}
      >
        {props.children}
      </Animated.View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const OPORTUNITY = props => {
    // #region [setLogic]
    // ------------------------------
    const { values, handleChangeState } = props;

    let stlActive = [
      useStyle.cardMask,
      {
        marginHorizontal: 20,
        borderColor: '#6f90cc',
        borderWidth: 2
      }
    ];
    let stlNoAct = [useStyle.cardMask, { marginHorizontal: 20 }];

    let listOpps =
      rdClientOpportunities &&
      rdClientOpportunities.sort((opp1, opp2) => {
        return opp1.createdAt.seconds < opp2.createdAt.seconds ? 1 : -1;
      });
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {rdClientOpportunities &&
          rdClientOpportunities.map((opportunity, index) => {
            if (
              !!Sc06_opportunities_deals &&
              Sc06_opportunities_deals.find(
                _opp => _opp.docId === opportunity.docId
              )
            ) {
              let _new_rdClientOpportunities = rdClientOpportunities;
              let _new_opp_index = rdClientOpportunities.findIndex(
                _opp => _opp.docId === opportunity.docId
              );
              _new_rdClientOpportunities.splice(
                _new_opp_index,
                1,
                Sc06_opportunities_deals.find(
                  _opp => _opp.docId === opportunity.docId
                )
              );
              callManyChangeRd({
                Sc06_opportunities_deals:
                  Sc06_opportunities_deals &&
                  Sc06_opportunities_deals.filter(
                    _opp => _opp.docId !== opportunity.docId
                  ),
                Sc06_opp_pending:
                  Sc06_opp_pending &&
                  Sc06_opp_pending.filter(
                    _opp => _opp.docId !== opportunity.docId
                  ),
                rdClientOpportunities: _new_rdClientOpportunities
              });
              // callChangeRd({
              //   reducerName: `Sc06_opportunities_deals`,
              //   value: Sc06_opportunities_deals && Sc06_opportunities_deals.filter(_opp => _opp.docId !== opportunity.docId)
              // });
              // callChangeRd({
              //   reducerName: `Sc06_opp_pending`,
              //   value: Sc06_opp_pending && Sc06_opp_pending.filter(_opp => _opp.docId !== opportunity.docId)
              // });
              // callChangeRd({
              //   reducerName: `rdClientOpportunities`,
              //   value: _new_rdClientOpportunities
              // });
            }
            return (
              <SELECTED_VIEW
                style={[]}
                key={index}
                condition={
                  Sc06_selected_opportunity &&
                  opportunity.docId === Sc06_selected_opportunity.docId
                }
                initialColor={'#9eb0d0'}
                endColor={'transparent'}
                duration={1000}
              >
                <View
                  style={
                    Sc06_selected_opportunity &&
                    opportunity.docId === Sc06_selected_opportunity.docId
                      ? stlActive
                      : stlNoAct
                  }
                >
                  {/* <Text style={stlTxt08}>Oportunidade</Text> */}
                  <View style={[stlView10]}>
                    <View style={useStyle.flex2}>
                      <Text style={stlTxt09}>
                        {timeStamp(
                          new Date(opportunity.dateOpportunity.seconds * 1000)
                        )}
                      </Text>
                      <Text style={stlTxt10}>
                        {`Probabilidade de venda: ${opportunity.options_probabilidadeVenda} / Produto: ${opportunity.opportunity_products} / Valor Total: R$${typeof(opportunity.total_amount_opportunity) === "string" ? opportunity.total_amount_opportunity : currencyMask(opportunity.total_amount_opportunity)}`}
                      </Text>
                    </View>
                    {/* BOTÃO DE EDITAR OPORTUNIDADE */}
                    <TouchableOpacity
                      onPress={() => {
                        callChangeRd({
                          reducerName: 'Sc06b_opportunity',
                          value: opportunity
                        });
                        compProps.history.push('/editOpportunity');
                      }}
                    >
                      <UseIcoMoon name="edit" size={22} color={'#999'} />
                    </TouchableOpacity>
                    {/* BOTÃO DE EXCLUIR */}
                    <TouchableOpacity
                      style={{ marginLeft: 10 }}
                      onPress={() => {
                        !!values.delete_item === false
                          ? handleChangeState(opportunity.docId, 'delete_item')
                          : handleChangeState(false, 'delete_item');
                      }}
                    >
                      <UseIcoMoon name="trash" size={22} color={'#999'} />
                    </TouchableOpacity>
                  </View>
                  <FECHAR_NEGOCIO doc={opportunity} />
                  {values.delete_item &&
                  opportunity.docId === values.delete_item ? (
                    <View style={stlView07}>
                      <Text>Deseja Excluir este Item?</Text>
                      <>
                        {deleteDocPending === true ? (
                          <UseLoader />
                        ) : (
                          <>
                            <TouchableOpacity
                              onPress={() => {
                                keepYPosition();
                                let newArray = rdClientOpportunities;
                                newArray.splice(index, 1);
                                callFbCustomData({
                                  callName: 'deleteDoc',
                                  collection: 'opportunities',
                                  docId: opportunity.docId,
                                  reducerName: 'rdClientOpportunities',
                                  dataToCustom: newArray
                                });
                                callFbUpdateFieldFromDoc({
                                  collection: 'clients',
                                  reducerName: 'rdUpdatedDoc',
                                  docId: Sc06.docId,
                                  dataToUpdate: [
                                    {
                                      nameField: 'opportunities',
                                      value: 1,
                                      operation: -1
                                    }
                                  ]
                                });
                              }}
                            >
                              <Text>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                handleChangeState(false, 'delete_item');
                              }}
                            >
                              <Text>Não</Text>
                            </TouchableOpacity>
                          </>
                        )}
                      </>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </SELECTED_VIEW>
            );
          })}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const FECHAR_NEGOCIO = props => {
    // #region [NOsetLogic]
    // ------------------------------
    const { doc } = props;
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 7
        }}
      >
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}
        >
          {doc.opportunity_deal === true ? (
            <Text style={{ color: '#4fc988' }}>Negócio Fechado</Text>
          ) : Sc06_opp_pending &&
            Sc06_opp_pending.find(_opp => _opp.docId === doc.docId) ? (
            <UseLoader />
          ) : (
            <TouchableOpacity
              style={[useStyle.btnPrimary, useStyle.btnSmall]}
              onPress={() => {
                keepYPosition();
                callManyChangeRd({
                  Sc06_selected_opportunity: false,
                  Sc06_opp_pending: Sc06_opp_pending
                    ? [...Sc06_opp_pending, doc]
                    : [doc]
                });
                // callChangeRd({
                //   reducerName: `Sc06_selected_opportunity`,
                //   value: false
                // });
                // callChangeRd({
                //   reducerName: `Sc06_opp_pending`,
                //   value: Sc06_opp_pending ? [...Sc06_opp_pending, doc] : [doc]
                // });
                callFbUpdateData({
                  collection: 'opportunities',
                  reducerName: 'Sc06_opportunities_deals',
                  reducerType: 'Array',
                  docId: doc.docId,
                  dataToUpdate: {
                    ...doc,
                    opportunity_deal: true,
                    dateEndOpportunity: new Date()
                  }
                });
              }}
            >
              <Text style={[useStyle.txInverseColor, { fontSize: 11 }]}>
                Fechar Negócio
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ marginTop: 5, marginRight: 8 }}>
          <UseIcoMoon
            name="hands"
            size={40}
            color={doc.opportunity_deal === true ? '#4fc988' : '#999'}
          />
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END

  // Bloco para evitar erro de Ausência de Dados
  if (!Sc06) {
    return <></>;
  } else {
    return <SCREEN />;
  }
}
