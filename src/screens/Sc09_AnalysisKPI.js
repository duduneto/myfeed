// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

// import Internal Components
import {
  useStyle,
  useReducer,
  useChangeRd,
  UseIcoMoon,
  UsePicker,
  useForm,
  useManyListRd,
  UseLoader,
  UseTextInput,
  UseButtonSubmit,
  useFbAddData

} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00() {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const { rdAuthUser, rdTeste, rdContent, yOffSetPosition, year_kpi, getManyListPending, kpi_query, addDataPending, rdNewKpi, month_kpi } = useReducer();
  const callChangeRd = useChangeRd();
  const callManyListRd = useManyListRd();
  const callFbAddData = useFbAddData();

  let listMonth = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  // const screenContent = rdContent[0];

  if (rdNewKpi && !kpi_query.kpi[0]) {
    callChangeRd({
      reducerName: 'kpi_query',
      value: {
        ...kpi_query,
        kpi: [{ ...rdNewKpi }]
      }
    })
    callChangeRd({
      reducerName: 'rdNewKpi',
      value: false
    })
  }

  let _refScrollView;
  let offSetYPosition;
  const keepYPosition = () => {
    callChangeRd({ reducerName: 'yOffSetPosition', value: offSetYPosition });
  };

  useEffect(() => {
    callChangeRd({ reducerName: 'Cp01', value: 'Análise KPI' });
    let dateNow = new Date();
    month_kpi === undefined && callChangeRd({ reducerName: 'month_kpi', value: String(listMonth[dateNow.getMonth()]) });
    callChangeRd({ reducerName: 'year_kpi', value: String(new Date().getFullYear()) })
    callDbByYear(year_kpi)
  }, []);

  useEffect(() => {
    callDbByYear(year_kpi)
  }, [year_kpi])


  const callDbByYear = (year) => {
    year !== undefined && callManyListRd('kpi_query', [{
      collection: 'clients',
      // filter
      where1: {
        field: 'createdAt',
        type: '<',
        value: new Date(`${String(Number(year) + 1)}-01-01`)
      },
    }, {
      collection: 'opportunities',
      // filter
      where1: {
        field: 'dateEndOpportunity',
        type: '>',
        value: new Date(`${Number(year)}-01-01`)
      },
      where2: {
        field: 'dateEndOpportunity',
        type: '<',
        value: new Date(`${String(Number(year) + 1)}-01-01`)
      },
    }, {
      collection: 'activities',
      // filter
      where1: {
        field: 'dateActivity',
        type: '>',
        value: new Date(`${Number(year)}-01-01`)
      },
      where2: {
        field: 'dateActivity',
        type: '<',
        value: new Date(`${String(Number(year) + 1)}-01-01`)
      },
    }, {
      collection: 'kpi',
      // filter
      where1: {
        field: 'year',
        type: '==',
        value: year
      },
    }])
  }
  // ------------------------------
  // #endregion

  // #region [allStyles]
  // ------------------------------

  // _STYLE
  // let stl = [useStyle.xxx,];
  let stlView01 = [useStyle.flexMaster, useStyle.whitePage];
  let stlScroll01 = [useStyle.scrollView, { paddingTop: 90 }];
  let stlView02 = [useStyle.longBar];
  let stlView02b = [useStyle.pad20];

  // SELECTYEAR
  let stlPicker01 = { border: 'none', color: '#6f6f6f', fontSize: 14 };

  // GOALS
  let stlView03 = [useStyle.cardMask];
  let stlView04 = [useStyle.itemList];
  let stlView05 = [{ backgroundColor: '#f6f6f6' }];

  let stlTxt01 = [useStyle.txTitleCard];

  // MONTHS
  let stlView06 = stlView03;
  let stlView07 = [useStyle.itemList];
  let stlView07a = [useStyle.itemAccordion, stlView05, { padding: 0 }];
  let stlTxt02 = stlTxt01;

  //ITEM_CLOSED
  let stlView08 = [useStyle.flexRow, useStyle.itemList]; // linha
  let stlView09 = [useStyle.flex4];
  let stlTxt03 = [useStyle.txTitleCard, useStyle.txCenter];
  let stlTxt04 = [useStyle.txCenter, { color: '#666' }];

  //ITEM_TOGGLE
  let stlView10 = [useStyle.itemAccordion, stlView05];
  let stlView11 = [
    useStyle.flexRow,
    useStyle.flexBetween,
    { paddingHorizontal: 20 }
  ];
  let stlView12 = [
    useStyle.flexRow,
    useStyle.flexBetween,
    { paddingHorizontal: 20, marginBottom: -18, marginTop: 20 }
  ];
  let stlTxt05 = stlTxt03;

  //ITEMS_INPUT
  let stlView17 = [useStyle.itemAccordion, { backgroundColor: 'transparent' }];
  let stlView18 = [useStyle.xx, { paddingHorizontal: 20 }];
  let stlView19 = [
    useStyle.flexRow,
    useStyle.flexBetween,
    { width: '100%', marginBottom: 5 }
  ];
  let stlView20 = [useStyle.flexRow];
  let stlView21 = [stlView20];
  let stlTxt13 = [{ fontSize: 17, color: '#666' }];
  let stlTxt14 = [{ color: '#666', textAlign: 'left', fontSize: 12 }];
  let stlTxt15 = [{ fontWeight: 'bold', color: '#666', marginLeft: 5 }];
  let stlTxt16 = [{ fontWeight: 'bold', color: '#666', marginLeft: 5 }];
  let stlTxtInput01 = [
    useStyle.input,
    useStyle.txCenter,
    { backgroundColor: 'white', width: 60, color: '#666' }
  ];
  let stlTxtInput02 = [
    useStyle.input,
    useStyle.txCenter,
    { width: 60, color: '#999' }
  ];

  //TABLE
  let stlView22 = [useStyle.flex1, useStyle.mgB20, {}];
  let stlView23 = [
    useStyle.flexEnd,
    useStyle.itemAccordion,
    { backgroundColor: 'transparent' }
  ];
  let stlView24 = [
    useStyle.flexRow,
    useStyle.itemAccordion,
    { backgroundColor: 'transparent' }
  ];
  let stlView25 = [useStyle.flex1];
  let stlView26 = [useStyle.flex3, useStyle.flexRow, useStyle.flexBetween];
  let stlTxt17 = [
    {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#333',
      paddingLeft: '20',
      width: 45
    }
  ];
  let stlTxt18 = [stlTxt17];
  let stlTxt19 = [{ textAlign: 'right', paddingRight: 10, fontSize: 12 }];
  let stlTxt20 = [{ flex: 1, textAlign: 'center' }];

  let stlView27 = [useStyle.flexBetween, useStyle.flexRow, { paddingTop: 20 }];
  let stlView28 = [useStyle.flex1];
  let stlView30 = [useStyle.flex2];
  let stlView31 = [{ backgroundColor: '#ccc', padding: 10, marginRight: 3 }];
  let stlView29 = [useStyle.flexBetween, useStyle.flexRow];
  let stlTxt21 = [
    { textAlign: 'center', fontWeight: 'bold', color: '#666', fontSize: 12 }
  ];
  let stlTxt22 = [useStyle.txCenter, useStyle.flex1];
  let stlBtn01 = [useStyle.btnPrimary, { marginBottom: 4, width: 200, height: 35 }];
  let stlBtnTxt = [useStyle.txInverseColor];


  let stl01 = [useStyle.flexRow, useStyle.flexBetween, { borderBottomWidth: 1, borderBottomColor: '#eee', position: 'absolute', top: -90, left: 0, width: "100%", padding: 20 }];
  let stl02 = [useStyle.input, { flex: 1 }];


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
        <ScrollView
          style={stlScroll01}
          ref={ref => (_refScrollView = ref)}
          onScroll={ref => (offSetYPosition = ref.nativeEvent.contentOffset.y)}
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

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <>
      <_STYLE>
        <FORM renderProps={({ values, handleTextChange, handleChangeState }) => (
          <>
            <View style={stl01}>
              <SELECTYEAR values={values} handleTextChange={handleTextChange} />
              <SELECTMONTH values={values} handleChangeState={handleChangeState} />
            </View>
            {rdTeste && <Text>{rdTeste}</Text>}
            {
              getManyListPending === true
                ? <UseLoader />
                : kpi_query &&
                <>
                  <GOALS values={values} handleChangeState={handleChangeState} />
                  {
                    kpi_query && kpi_query.kpi && kpi_query.kpi[0] && (
                      <>
                        {
                          month_kpi && <MONTHS values={values} handleChangeState={handleChangeState} />
                        }
                      </>
                    )
                  }
                </>
            }
          </>
        )} />
      </_STYLE>
    </>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const FORM = props => {
    // #region [setLogic]

    // ------------------------------

    // --- Use Form APP
    // ------------------------------
    // set Hook
    const { values, handleTextChange, handleChangeState } = useForm();
    // ------------------------------

    // ------------------------------

    // #endregion
    return props.renderProps({ values, handleTextChange, handleChangeState });
  };

  //_______________________________

  const SELECTYEAR = props => {
    // #region [NOsetLogic]
    // ------------------------------
    const { values, handleTextChange } = props;
    let listYear = new Array();
    let current_year = new Date().getFullYear() - 5;
    for (let index = 0; index < 16; index++) {
      listYear.push(String(current_year+index))
    }
    // let listYear = ['Escolha o Ano', '2018', '2019', '2020'];
    const selectYearKpi = (year) => {
      callChangeRd({ reducerName: 'year_kpi', value: year })

      year !== 'Escolha o Ano' && callDbByYear(year);
    }
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={[stl02, { marginRight: 10 }]}>
        <UsePicker
          style={stlPicker01}
          values={values}
          handleTextChange={handleTextChange}
          onValueChange={(item) => selectYearKpi(item)}
          content={{
            name: 'year_kpi',
            values: year_kpi ? listYear.sort(year => year === year_kpi ? -1 : 1) : listYear
          }}
        // onValueChange={(itemValue, itemIndex) => {
        //   handleTextChange(itemValue, 'year_kpi')

        // }}
        />
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SELECTMONTH = props => {
    // #region [NOsetLogic]
    // ------------------------------
    const { values, handleTextChange } = props;
    const selectMonthKpi = (month) => {
      callChangeRd({ reducerName: 'month_kpi', value: month })
    }
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stl02}>
        <UsePicker
          style={stlPicker01}
          values={values}
          handleTextChange={handleTextChange}
          onValueChange={(item) => {
            keepYPosition();
            selectMonthKpi(item);
          }}
          content={{
            name: 'month_kpi',
            values: month_kpi ? listMonth.sort(month => month === month_kpi ? -1 : 1) : listMonth
          }}
        // onValueChange={(itemValue, itemIndex) => {
        //   handleTextChange(itemValue, 'year_kpi')

        // }}
        />
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const GOALS = (props) => {
    // #region [setLogic]
    // ------------------------------
    const { values, handleChangeState } = props;
    const cond01 =
      values.goals_toggle === true || values.goals_toggle === undefined
        ? 'minus-square'
        : 'plus-square';
    let valueMensalAnual = 0;
    let valueAtingidoAnual = 0;
    kpi_query && kpi_query.kpi[0] && kpi_query.kpi[0].products && kpi_query.kpi[0].products.map(prod => {
      valueMensalAnual = valueMensalAnual + prod.valueMensal;
    })
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView03}>
        <TouchableOpacity
          onPress={() => {
            handleChangeState(values.goals_toggle === undefined ? false : !values.goals_toggle, 'goals_toggle')
          }}
        >
          <View style={stlView04}>
            <Text style={stlTxt01}>{`Metas de ${year_kpi}`}</Text>
            <View>
              <UseIcoMoon name={cond01} size={22} color={'#333'} />
            </View>
          </View>
        </TouchableOpacity>
        {(values.goals_toggle === true || values.goals_toggle === undefined) &&
          <View style={stlView05}>

            {
              kpi_query && kpi_query.kpi && kpi_query.kpi[0] ? (
                <>
                  {
                    kpi_query.kpi[0].products.map(product => {
                      // QUANDO - HOUVER - KPI REGISTRADO NO BANCO, MOSTRA O BLOCO ABAIXO
                      // console.log(product)
                      // console.log(kpi_query.opportunities.filter(opp => opp.opportunity_products_category === product.productName))
                      let _atingidoArray = new Array();
                      let _valueMensalAtingido = Number(kpi_query.opportunities
                        .filter(opp => opp.opportunity_products_category === product.productName && opp.opportunity_deal === true)
                        .filter(opp => new Date(opp.dateEndOpportunity.seconds * 1000).getFullYear() === Number(year_kpi) )
                        .map(opp => _atingidoArray = [..._atingidoArray,...new Array(opp.amount_opportunity)])
                        )
                      let valueMensalAtingido = _atingidoArray.length;
                      valueAtingidoAnual = valueAtingidoAnual + valueMensalAtingido;
                      // let valueMensalAtingidoPercentual = Number((valueMensalAtingido/Number(product.valueMensal))*100)
                      let valueMensalFaltante = Number(Number(product.valueMensal) - valueMensalAtingido);
                      // let valueMensalFaltantePercentual = valueMensalFaltante <= 0 ? 0 : Number((valueMensalAtingido/valueMensalFaltante)*100)
                      return (
                        <PRODUCT_META
                          productName={product.productName}
                          anual={product.anual}
                          valueMensal={product.valueMensal}
                          valueMensalAtingido={valueMensalAtingido}
                          // valueMensalAtingidoPercentual={valueMensalAtingidoPercentual}
                          valueMensalFaltante={Number(product.anual) - Number(valueMensalAtingido)}
                          // valueMensalFaltantePercentual={valueMensalFaltantePercentual}
                        />
                      )
                      // ------------------------------------------------------------
                    })
                  }
                  <PRODUCT_META
                    productName={'Total'}
                    anual={kpi_query.kpi[0].total.anual}
                    valueMensal={valueMensalAnual}
                    valueMensalAtingido={valueAtingidoAnual}
                    // valueMensalAtingidoPercentual={'--'}
                    valueMensalFaltante={Number(kpi_query.kpi[0].total.anual) - Number(valueAtingidoAnual)}
                    // valueMensalFaltantePercentual={'--'}
                  />
                  <TABLE_ANUAL />
                </>
              ) : (
                  <>
                    {
                      // QUANDO  - NÃO HOUVER - KPI REGISTRADO NO BANCO, MOSTRA ESTE BLOCO ABAIXO
                      // rdContent[4].txt49.map((product) => (
                      // <PRODUCT_META
                      //   handleChangeState={handleChangeState}
                      //   values={values}
                      //   productName={product}
                      //   anual={'00'}
                      //   valueMensal={'00'}
                      //   valueMensalAtingido={'00'}
                      //   valueMensalAtingidoPercentual={'00'}
                      //   valueMensalFaltante={'00'}
                      //   valueMensalFaltantePercentual={'00'}
                      // />
                      // ))
                      <>
                        <PRODUCT_META
                          handleChangeState={handleChangeState}
                          values={values}
                          productName={'Linha VM'}
                          anual={'00'}
                          valueMensal={'00'}
                          valueMensalAtingido={'00'}
                          // valueMensalAtingidoPercentual={'00'}
                          valueMensalFaltante={'00'}
                          // valueMensalFaltantePercentual={'00'}
                        />
                        <PRODUCT_META
                          handleChangeState={handleChangeState}
                          values={values}
                          productName={'Linha F'}
                          anual={'00'}
                          valueMensal={'00'}
                          valueMensalAtingido={'00'}
                          // valueMensalAtingidoPercentual={'00'}
                          valueMensalFaltante={'00'}
                          // valueMensalFaltantePercentual={'00'}
                        />
                        <PRODUCT_META
                          handleChangeState={handleChangeState}
                          values={values}
                          productName={'Consórcio'}
                          anual={'00'}
                          valueMensal={'00'}
                          valueMensalAtingido={'00'}
                          // valueMensalAtingidoPercentual={'00'}
                          valueMensalFaltante={'00'}
                          // valueMensalFaltantePercentual={'00'}
                        />
                        <PRODUCT_META
                          handleChangeState={handleChangeState}
                          values={values}
                          productName={'Seguros'}
                          anual={'00'}
                          valueMensal={'00'}
                          valueMensalAtingido={'00'}
                          // valueMensalAtingidoPercentual={'00'}
                          valueMensalFaltante={'00'}
                          // valueMensalFaltantePercentual={'00'}
                        />
                        <PRODUCT_META
                          handleChangeState={handleChangeState}
                          values={values}
                          productName={'Semi Novos'}
                          anual={'00'}
                          valueMensal={'00'}
                          valueMensalAtingido={'00'}
                          // valueMensalAtingidoPercentual={'00'}
                          valueMensalFaltante={'00'}
                          // valueMensalFaltantePercentual={'00'}
                        />
                      </>
                      // ------------------------------------------------------------
                    }
                    <View style={{ alignItems: 'center', padding: 20 }}>
                      {/* BOTÃO DE SALVAR O NOVO KPI */}
                      {
                        addDataPending === true ? (
                          <UseLoader />
                        ) : (
                            <TouchableOpacity
                              style={stlBtn01}
                              onPress={() => {

                                keepYPosition();
                                callFbAddData({
                                  collection: 'kpi',
                                  reducerName: `rdNewKpi`,
                                  dataToAdd: {
                                    createdAt: new Date(),
                                    products: values.kpi.products,
                                    total: values.kpi.total,
                                    year: year_kpi
                                  }
                                })
                              }}
                            ><Text style={stlBtnTxt}>Salvar</Text></TouchableOpacity>
                            // <UseButtonSubmit
                            //   style={stlBtn01}
                            //   disableBtnStyle={{ backgroundColor: '#c9c9c9' }}
                            //   onPress={async () => {
                            //     let products = [];
                            //     let total_anual = {
                            //       anual: 0,
                            //       valueMensal: 0,
                            //       valueMensalAtingido: 0,
                            //       valueMensalFaltante: 0,
                            //     };
                            //     await rdContent[4].txt49.map(async (product) => {
                            //       let _valueMensalAtingido = await Number(kpi_query.opportunities.filter(opp => opp.opportunity_products_category === product).length);
                            //       let _value = Number(values[product]);
                            //       total_anual.anual = total_anual.anual + _value;
                            //       total_anual.valueMensal = total_anual.valueMensal + Math.ceil(Number(_value / 12));
                            //       total_anual.valueMensalAtingido = total_anual.valueMensalAtingido + _valueMensalAtingido;
                            //       total_anual.valueMensalFaltante = total_anual.valueMensalFaltante + (_value - _valueMensalAtingido);
                            //       products.push({
                            //         anual: _value,
                            //         productName: product,
                            //         valueMensal: Math.ceil(Number(_value / 12)),
                            //         valueMensalAtingido: _valueMensalAtingido,
                            //         valueMensalAtingidoPercentual: Math.round((_valueMensalAtingido / _value) * 100),
                            //         valueMensalFaltante: (_value - _valueMensalAtingido),
                            //         valueMensalFaltantePercentual: Math.round(((_value - _valueMensalAtingido) / _value) * 100)

                            //       });
                            //     });
                            //     keepYPosition();
                            //     callFbAddData({
                            //       collection: 'kpi',
                            //       reducerName: `rdNewKpi`,
                            //       dataToAdd: {
                            //         createdAt: new Date(),
                            //         products: products,
                            //         total: total_anual,
                            //         year: year_kpi
                            //       }
                            //     })
                            //   }}
                            //   requiredFields={['Linha VM', 'Linha F', 'Consórcio', 'Seguros', 'Semi Novos']}
                            //   state={values}
                            //   btnText={'Salvar'}
                            //   btnTextStyle={stlBtnTxt}
                            // />
                          )
                      }
                    </View>
                  </>
                )
            }
          </View>
        }
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const MONTHS = (props) => {
    // #region [setLogic]
    // ------------------------------
    const { values, handleChangeState } = props;
    const cond01 =
      values.month_toggle === true || values.month_toggle === undefined
        ? 'minus-square'
        : 'plus-square';
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView06}>
        <TouchableOpacity
          onPress={() => {
            handleChangeState(values.month_toggle === undefined ? false : !values.month_toggle, 'month_toggle')
          }}
        >
          <View style={stlView07}>
            <Text style={stlTxt02}>{`${month_kpi} / ${year_kpi}`}</Text>
            <UseIcoMoon name={cond01} size={22} color={'#333'} />
          </View>
        </TouchableOpacity>
        {
          values.month_toggle === false
            ? <></>
            : <View style={stlView07a}>
              {
                kpi_query && kpi_query.kpi && kpi_query.kpi[0] && [{ productName: 'Total' }, ...kpi_query.kpi[0].products].map(product => {
                  return (
                    <ITEM_TOGGLE
                      productName={product.productName}
                      values={values}
                      handleChangeState={handleChangeState}
                    />)
                })
              }
              {/* COMENTADO PARA EFEITOS DE DESENVOLVIMENTO */}
              {/* <ITEM_CLOSED />
                  <ITEM_CLOSED />
                  <ITEM_CLOSED /> */}
            </View>
        }
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const ITEM_CLOSED = (props) => {
    // #region [NOsetLogic]
    // ------------------------------
    const { productName, values, handleChangeState } = props;
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {/* ITEM FECHADO */}
        <TouchableOpacity
          style={stlView08}
          onPress={() => {
            handleChangeState(productName, 'item_toggle');
          }}
        >
          <View style={stlView09}>
            <Text style={stlTxt03}>{productName}</Text>
            <Text style={stlTxt04}>
              Atividades / Oportunidades / Clientes / Negocios
            </Text>
          </View>
          <UseIcoMoon name="plus-square" size={22} color={'#999'} />
        </TouchableOpacity>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const ITEM_TOGGLE = (props) => {
    // #region [NOsetLogic]
    // ------------------------------
    const { productName, values, handleChangeState } = props
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {
          values.item_toggle && values.item_toggle === productName ? (

            <>
              {/* ITEM ABERTO */}
              <View style={stlView10}>
                <TouchableOpacity
                  style={stlView11}
                  onPress={() => {
                    handleChangeState('', 'item_toggle');
                  }}
                >
                  <View style={stlView09}>
                    <Text style={stlTxt05}>{productName}</Text>
                  </View>
                  <UseIcoMoon name="minus-square" size={22} color={'#999'} />
                </TouchableOpacity>
                <View style={stlView12}>
                  <TABLE productName={productName} />
                </View>
              </View>
            </>
          ) : (
              <ITEM_CLOSED
                productName={productName}
                values={values}
                handleChangeState={handleChangeState}
              />
            )
        }
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const PRODUCT_META = (props) => {
    // #region [NOsetLogic]
    // ------------------------------
    const { onChangeText, values, handleChangeState, productName, anual, valueMensal, valueMensalAtingido, valueMensalAtingidoPercentual, valueMensalFaltante, valueMensalFaltantePercentual } = props;

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <View style={stlView17}>
          <View style={stlView18}>
            {/* MODO DE CRIAÇÃO DE META */}
            <Text style={stlTxt13}>{productName}</Text>
            <View style={stlView19}>
              {
                kpi_query && kpi_query.kpi && kpi_query.kpi.length > 0 ? (
                  <>
                    {/* =================== MODO LISTANDO INFORMAÇÕES DO BANCO =================== */}
                    <View>
                      <Text style={stlTxt14}>Anual</Text>
                      <TextInput
                        style={stlTxtInput01}
                        defaultValue={anual}
                        editable={false}
                        keyboardType={'numeric'}
                      />
                    </View>
                    <View>
                      <Text style={stlTxt14}>Mensal</Text>
                      <Text style={stlTxtInput02}>{valueMensal}</Text>
                    </View>
                    <View>
                      <Text style={stlTxt14}>Atingido</Text>
                      <View style={stlView20}>
                        <Text style={stlTxtInput02}>{valueMensalAtingido}</Text>
                        <Text style={stlTxt15}>{valueMensalAtingidoPercentual && `${valueMensalAtingidoPercentual}%`}</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={stlTxt14}>Faltante</Text>
                      <View style={stlView21}>
                        <Text style={stlTxtInput02}>{valueMensalFaltante}</Text>
                        <Text style={stlTxt16}>{valueMensalFaltantePercentual && `${valueMensalFaltantePercentual}%`}</Text>
                      </View>
                    </View>
                    {/* =================== END MODO LISTANDO INFORMAÇÕES DO BANCO =================== */}
                  </>
                ) : (
                    <>
                      {/* ========== MODO CRIAÇÃO DE KPI ========== */}
                      <View>
                        <Text style={stlTxt14}>Anual</Text>
                        {/* COMENTADO PARA CONTORNAR BUG EM HOSTING */}
                        {/* <UseTextInput
                          style={stlTxtInput01}
                          placeholder="00"
                          inputName={productName}
                          setState={handleChangeState}
                        /> */}
                        <TextInput
                          style={stlTxtInput01}
                          placeholder={"00"}
                          keyboardType={'numeric'}
                          onChangeText={(text) => {
                            let total_anual = 0;
                            let total_valueMensal = 0;
                            let total_valueMensalFaltante = 0
                            values.kpi && values.kpi.products.filter(prod => prod.productName !== productName).map(prodKpi => {
                              total_anual = total_anual + prodKpi.anual;
                              total_valueMensal = total_valueMensal + prodKpi.valueMensal;
                              total_valueMensalFaltante = total_valueMensalFaltante + prodKpi.valueMensalFaltante;
                          })
                            !values.kpi ? handleChangeState({
                              products: [{
                                anual: Number(text),
                                productName,
                                valueMensal: Math.ceil(Number(text) / 12),
                                valueMensalAtingido: 0,
                                valueMensalAtingidoPercentual: 0,
                                valueMensalFaltante: Number(text),
                                valueMensalFaltantePercentual: 100
                              }],
                              total: {
                                anual: Number(text),
                                valueMensal: Math.ceil(Number(text) / 12),
                                valueMensalAtingido: 0,
                                valueMensalFaltante: Number(text),
                              }
                            }, 'kpi')
                              : handleChangeState({
                                products: [...values.kpi.products.filter(prod => prod.productName !== productName), {
                                  anual: Number(text),
                                  productName,
                                  valueMensal: Math.ceil(Number(text) / 12),
                                  valueMensalAtingido: 0,
                                  valueMensalAtingidoPercentual: 0,
                                  valueMensalFaltante: Number(text),
                                  valueMensalFaltantePercentual: 100
                                }],
                                total: {
                                  anual: total_anual + Number(text),
                                  valueMensal: Math.ceil(Number((total_anual + Number(text)) / 12)),
                                  valueMensalAtingido: 0,
                                  valueMensalFaltante: values.kpi.total.valueMensalFaltante + Number(text),
                                }
                              }, 'kpi')
                          }}
                        />
                      </View>
                      <View>
                        <Text style={stlTxt14}>Mensal</Text>
                        <Text style={stlTxtInput02}>{'-'}</Text>
                      </View>
                      <View>
                        <Text style={stlTxt14}>Atingido</Text>
                        <View style={stlView20}>
                          <Text style={stlTxtInput02}>{'-'}</Text>
                          {/* <Text style={stlTxt15}>{'-'}</Text> */}
                        </View>
                      </View>
                      <View>
                        <Text style={stlTxt14}>Faltante</Text>
                        <View style={stlView21}>
                          <Text style={stlTxtInput02}>{'-'}</Text>
                          {/* <Text style={stlTxt16}>{'-'}</Text> */}
                        </View>
                      </View>
                      {/* ========== END MODO CRIAÇÃO DE KPI ========== */}
                    </>
                  )
              }
            </View>
          </View>
        </View>
      </>

      // ------------------------------
      // #endregion
    );
  };
  //_______________________________

  const TABLE_ANUAL = (props) => {
    // #region [NOsetLogic]
    // ------------------------------

    const totalClientsThatsHadEnvolved = (clients, activities) => {
      let arr = [];
      clients.map((client) => {
        activities.find(act => act.clientId === client.docId) && arr.push(client)
      });
      return arr;
    }

    let total_clients = kpi_query.clients.length
    let clientes_envolvidos = totalClientsThatsHadEnvolved(kpi_query.clients, kpi_query.activities)
    let fechamentos = new Array();
    let _fechamentos = kpi_query.opportunities.filter(opp => opp.opportunity_deal).map(dealedOpp => fechamentos = [...fechamentos, ...new Array(dealedOpp.amount_opportunity)])
    let indicie_faltante = Number(fechamentos.length) === 0 ? 0 : Number(Math.round(Number(kpi_query.kpi[0].total.anual) / Number(fechamentos.length) * 100) - 100)/100;
    let this_year_activities = kpi_query.activities;
    let this_year_opportunities = kpi_query.opportunities;
    let yearly_meta = kpi_query.kpi[0].total.anual;
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <View style={stlView22}>
          {/* title */}
          <View style={stlView23}>
            <Text style={stlTxt17}>Falta</Text>
            <Text style={stlTxt18}>Total de:</Text>
          </View>

          {/* line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Clientes Cadastrados</Text>
            </View>

            <View style={stlView26}>
              <Text style={stlTxt20}>{total_clients}</Text>
              <Text style={stlTxt20}>{`100%`}</Text>
              <View style={stlTxt20} />
              <View style={stlTxt20} />
              <View style={stlTxt20} />
            </View>
          </View>

          {/* temp line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Clientes Envolvidos</Text>
            </View>
            <View style={stlView26}>
              <Text style={stlTxt20}>{clientes_envolvidos.length}</Text>
              <Text style={stlTxt20}>{`${total_clients === 0 ? 0 : Math.round((clientes_envolvidos.length / total_clients) * 100)}%`}</Text>
              <Text style={stlTxt20}>{`1/${Number(clientes_envolvidos.length) === 0 ? 0 : Math.round(total_clients / clientes_envolvidos.length)}`}</Text>
              <Text style={stlTxt20}>{Number(Number(clientes_envolvidos.length) * (Number(indicie_faltante))).toFixed(2)}</Text>
              <Text style={stlTxt20}>{Number((Number(clientes_envolvidos.length) * (Number(indicie_faltante))) + Number(clientes_envolvidos.length)).toFixed(2)}</Text>
            </View>
          </View>

          {/* temp line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Atividades</Text>
            </View>

            <View style={stlView26}>
              <Text style={stlTxt20}>{this_year_activities.length}</Text>
              <Text style={stlTxt20}>{`${Number(clientes_envolvidos.length) === 0 ? 0 : Math.round(Number(this_year_activities.length) / Number(clientes_envolvidos.length) * 100)}%`}</Text>
              <Text style={stlTxt20}>{`${Number(clientes_envolvidos.length) === 0 ? 0 : Math.round(Number(this_year_activities.length) / Number(clientes_envolvidos.length))}/1`}</Text>
              <Text style={stlTxt20}>{Number((Number(this_year_activities.length) * Number(indicie_faltante))).toFixed(2)}</Text>
              <Text style={stlTxt20}>{Number((Number(this_year_activities.length) * Number(indicie_faltante)) + Number(this_year_activities.length)).toFixed(2)}</Text>
            </View>
          </View>
          {/* temp line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Oportunidades</Text>
            </View>

            <View style={stlView26}>
              <Text style={stlTxt20}>{this_year_opportunities.length}</Text>
              <Text style={stlTxt20}>{`${Number(this_year_activities.length) === 0 ? 0 : Math.round(Number(this_year_opportunities.length) / Number(this_year_activities.length) * 100)}%`}</Text>
              <Text style={stlTxt20}>{`${Number(this_year_activities.length) === 0 ? 0 : Math.round(Number(this_year_opportunities.length) / Number(this_year_activities.length))}/1`}</Text>
              <Text style={stlTxt20}>{Number(Number(this_year_opportunities.length) * Number(indicie_faltante)).toFixed(2)}</Text>
              <Text style={stlTxt20}>{Number(Number(this_year_opportunities.length) * Number(indicie_faltante) + Number(this_year_opportunities.length)).toFixed(2)}</Text>
            </View>
          </View>
          {/* temp line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Fechamentos</Text>
            </View>

            <View style={stlView26}>
              <Text style={stlTxt20}>{fechamentos.length}</Text>
              <Text style={stlTxt20}>{`${Number(this_year_opportunities.length) === 0 ? 0 : Math.round(Number(fechamentos.length) / Number(this_year_opportunities.length) * 100)}%`}</Text>
              <Text style={stlTxt20}>{`${Number(this_year_opportunities.length) === 0 ? 0 : Math.round(Number(fechamentos.length) / Number(this_year_opportunities.length))}/1`}</Text>
              <Text style={stlTxt20}>{Number((Number(fechamentos.length) * Number(indicie_faltante))).toFixed(2)}</Text>
              <Text style={stlTxt20}>{Number((Number(fechamentos.length) * Number(indicie_faltante)) + Number(fechamentos.length)).toFixed(2)}</Text>
            </View>
          </View>
          {/* totais */}
          <View style={stlView27}>
            <View style={stlView28}>
              <Text style={stlTxt21}>Meta</Text>
              <View style={stlView31}>
                <Text style={stlTxt22}>{yearly_meta}</Text>
              </View>
            </View>
            <View style={stlView28}>
              <Text style={stlTxt21}>Sucesso</Text>
              <View style={stlView31}>
                <Text style={stlTxt22}>{`${Math.round(Number(fechamentos.length) / Number(yearly_meta) * 100)}%`}</Text>
              </View>
            </View>
            <View style={stlView30}>
              <Text style={stlTxt21}>Faltam</Text>
              <View style={stlView31}>
                <View style={stlView29}>
                  <Text>{Number(yearly_meta) - Number(fechamentos.length)}</Text>
                  <Text>{`${Math.round(Number(fechamentos.length) / Number(yearly_meta) * 100) - 100}%`}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={stlView27}>
            <View style={stlView28}>
              <Text style={stlTxt21}>Índice Faltante</Text>
              <View style={stlView31}>
                <Text style={stlTxt22}>{`${indicie_faltante}%`}</Text>
              </View>
            </View>
          </View>
        </View>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const TABLE = (props) => {
    // #region [NOsetLogic]
    // ------------------------------
    // Tabela de meses e suas representações numéricas
    
    const monthTable = {
      Janeiro: 1,
      Fevereiro: 2,
      Marco: 3,
      Abril: 4,
      Maio: 5,
      Junho: 6,
      Julho: 7,
      Agosto: 8,
      Setembro: 9,
      Outubro: 10,
      Novembro: 11,
      Dezembro: 12
    }
    // Estabelece o Range baseado em Segundos para filtrar as listas baseadas nesse Range de Segundos.
    const getDateRangeByMonth = (info) => {
      if (info.range === 'max') {
        return new Date(year_kpi, monthTable[info.month] - 1, new Date(year_kpi, monthTable[info.month], 0).getDate(), 23, 59, 59).getTime();
      } else {
        return new Date(year_kpi, monthTable[info.month] - 1, 0, 23, 59, 59).getTime();
      }
    }
    // Filtra baseado no período mínimo e máximo (em segundos) do mês selecionado Ex.: de 31/01/2019 às 23:59:59 até 28/02/2019 às 23:59:59
    const conditionToRangeMonthly = (arr, field, returnAnArray) => {
      
      if (returnAnArray) {
        if (field) {
          return arr.filter(item => item[field].seconds * 1000 > getDateRangeByMonth({ month: month_kpi, range: 'min' }) && item[field].seconds * 1000 < getDateRangeByMonth({ month: month_kpi, range: 'max' }))
        } else {
          return arr.filter(item => item.createdAt.seconds * 1000 > getDateRangeByMonth({ month: month_kpi, range: 'min' }) && item.createdAt.seconds * 1000 < getDateRangeByMonth({ month: month_kpi, range: 'max' }))
        }
      } else {
        if (field) {
          return Number(arr.filter(item => item[field].seconds * 1000 > getDateRangeByMonth({ month: month_kpi, range: 'min' }) && item[field].seconds * 1000 < getDateRangeByMonth({ month: month_kpi, range: 'max' })).length)
        } else {
          return Number(arr.filter(item => item.createdAt.seconds * 1000 > getDateRangeByMonth({ month: month_kpi, range: 'min' }) && item.createdAt.seconds * 1000 < getDateRangeByMonth({ month: month_kpi, range: 'max' })).length)
        }
      }
    }
    const filterByDataSince = (arr, field, returnAnArray) => {
      if (returnAnArray) {
        if (field) {
          return arr.filter(item => (item[field].seconds * 1000) < getDateRangeByMonth({ month: month_kpi, range: 'max' }))
        } else {
          return arr.filter(item => (item.createdAt.seconds * 1000) < getDateRangeByMonth({ month: month_kpi, range: 'max' }))
        }
      } else {
        if (field) {
          return Number(arr.filter(item => item[field].seconds * 1000 < getDateRangeByMonth({ month: month_kpi, range: 'max' })).length)
        } else {
          return Number(arr.filter(item => item.createdAt.seconds * 1000 < getDateRangeByMonth({ month: month_kpi, range: 'max' })).length)
        }
      }
    }
    // Filtra o total de clientes envolvidos baseado nas atividades criadas dentro do mês selecionado
    const totalClientsThatsHadEnvolved = (clients, activities) => {
      let arr = [];
      clients.map((client) => {
        conditionToRangeMonthly(activities, 'dateActivity', true).find(act => act.clientId === client.docId) && arr.push(client)
      });
      return arr;
    }
    let this_month_activities = conditionToRangeMonthly(kpi_query.activities, 'dateActivity', true); //Filtrando as atividades dentro do Mês Selecionado.
    let total_clients = filterByDataSince(kpi_query.clients); // Filtrando os clientes criados dentro do mês selecionado.
    let clientes_envolvidos = totalClientsThatsHadEnvolved(kpi_query.clients, kpi_query.activities); //Filtrando os clientes que tiveram foram envolvidos por atividades dentro do mês selecionado.

    let this_month_opportunities = props.productName === 'Total'
      ? conditionToRangeMonthly(kpi_query.opportunities, 'dateOpportunity', true)
      : conditionToRangeMonthly(kpi_query.opportunities.filter(opp => opp.opportunity_products_category === props.productName), 'dateOpportunity', true); //Filtrando oportunidades pertencentes à categoria de produto para depois filtrar por data de criação dentro do mês selecionado.
    let fechamentos = new Array();
    let _fechamentos = props.productName === 'Total'
      ? conditionToRangeMonthly(kpi_query.opportunities, 'dateEndOpportunity', true).filter(opp => opp.opportunity_deal).map(dealedOpp => fechamentos = [...fechamentos, ...new Array(dealedOpp.amount_opportunity)])
      : conditionToRangeMonthly(kpi_query.opportunities.filter(opp => opp.opportunity_products_category === props.productName), 'dateEndOpportunity', true).filter(opp => opp.opportunity_deal).map(dealedOpp => {fechamentos = [...fechamentos, ...new Array(dealedOpp.amount_opportunity)]}); //Filtrando apenas as oportunidades fechadas (Baseado nas oportunidades filtradas)

    let month_meta = props.productName === 'Total'
      ? kpi_query.kpi[0].total.valueMensal
      : kpi_query.kpi[0].products.find(product => product.productName === props.productName).valueMensal;
    let indicie_faltante = Number(fechamentos.length) === 0 ? 0 : Number(fechamentos.length) === 0 ? 0 : Math.round(Number(Number(month_meta) / Number(fechamentos.length) * 100)).toFixed(2) - 100;

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <View style={stlView22}>
          {/* title */}
          <View style={stlView23}>
            <Text style={stlTxt17}>Falta</Text>
            <Text style={stlTxt18}>Total de:</Text>
          </View>

          {/* line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Clientes Cadastrados</Text>
            </View>

            <View style={stlView26}>
              <Text style={stlTxt20}>{total_clients}</Text>
              <Text style={stlTxt20}>{`100%`}</Text>
              <View style={stlTxt20} />
              <View style={stlTxt20} />
              <View style={stlTxt20} />
            </View>
          </View>

          {/* temp line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Clientes Envolvidos</Text>
            </View>

            <View style={stlView26}>
              <Text style={stlTxt20}>{clientes_envolvidos.length}</Text>
              <Text style={stlTxt20}>{`${!!total_clients ? Math.round((Number(clientes_envolvidos.length) / Number(total_clients)) * 100) : '0'}%`}</Text>
              <Text style={stlTxt20}>{`1/${!!clientes_envolvidos.length ? Math.round(total_clients / clientes_envolvidos.length) : '0'}`}</Text>
              <Text style={stlTxt20}>{!!clientes_envolvidos ? Math.round(Number(clientes_envolvidos.length) * (Number(indicie_faltante) / 100)) : '0'}</Text>
              <Text style={stlTxt20}>{Math.round(Number(clientes_envolvidos.length) * (Number(indicie_faltante) / 100) + Number(clientes_envolvidos.length))}</Text>
            </View>
          </View>

          {/* temp line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Atividades</Text>
            </View>

            <View style={stlView26}>
              <Text style={stlTxt20}>{this_month_activities.length}</Text>
              <Text style={stlTxt20}>{`${!!clientes_envolvidos.length ? Math.round(Number(this_month_activities.length) / Number(clientes_envolvidos.length) * 100) : '0'}%`}</Text>
              <Text style={stlTxt20}>{`${!!clientes_envolvidos.length ? Math.round(Number(this_month_activities.length) / Number(clientes_envolvidos.length)) : '0'}/1`}</Text>
              <Text style={stlTxt20}>{!!this_month_activities.length ? Math.round((Number(this_month_activities.length) * Number(indicie_faltante)) / 100) : '0'}</Text>
              {/* Comentado em 27/01/2020 */}
              {/* <Text style={stlTxt20}>{!!this_month_activities.length ? Math.round((Number(this_month_activities.length) * (Number(this_month_activities.length) * Number(indicie_faltante))) / 100) : '0'}</Text> */}
              <Text style={stlTxt20}>{!!this_month_activities.length ? Math.round((Number(this_month_activities.length) * Number(indicie_faltante)) / 100) + Number(this_month_activities.length) : '0'}</Text>
            </View>
          </View>
          {/* temp line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Oportunidades</Text>
            </View>

            <View style={stlView26}>
              <Text style={stlTxt20}>{this_month_opportunities.length}</Text>
              <Text style={stlTxt20}>{`${!!this_month_opportunities.length ? Math.round(Number(this_month_opportunities.length) / Number(this_month_activities.length) * 100) : '0'}%`}</Text>
              <Text style={stlTxt20}>{`${!!this_month_opportunities.length ? Math.round(Number(this_month_opportunities.length) / Number(this_month_activities.length)) : '0'}/1`}</Text>
              <Text style={stlTxt20}>{!!this_month_opportunities.length ? Math.round((Number(this_month_opportunities.length) * Number(indicie_faltante)) / 100) : '0'}</Text>
              {/* Comentado em 27/01/2020 */}
              {/* <Text style={stlTxt20}>{!!this_month_opportunities.length ? Math.round((Number(this_month_opportunities.length) * (Number(this_month_opportunities.length) * Number(indicie_faltante))) / 100) : '0'}</Text> */}
              <Text style={stlTxt20}>{!!this_month_opportunities.length ? Math.round((Number(this_month_opportunities.length) * Number(indicie_faltante)) / 100) + Number(this_month_opportunities.length) : '0'}</Text>
            </View>
          </View>
          {/* temp line */}
          <View style={stlView24}>
            <View style={stlView25}>
              <Text style={stlTxt19}>Fechamentos</Text>
            </View>

            <View style={stlView26}>
              <Text style={stlTxt20}>{fechamentos.length}</Text>
              <Text style={stlTxt20}>{`${!!fechamentos.length ? Math.round(Number(fechamentos.length) / Number(this_month_opportunities.length) * 100) : '0'}%`}</Text>
              <Text style={stlTxt20}>{`${!!fechamentos.length ? Math.round(Number(fechamentos.length) / Number(this_month_opportunities.length)) : '0'}/1`}</Text>
              <Text style={stlTxt20}>{!!fechamentos.length ? Math.round((Number(fechamentos.length) * Number(indicie_faltante)) / 100) : '0'}</Text>
              {/* Comentado em 27/01/2020 */}
              {/* <Text style={stlTxt20}>{!!fechamentos.length ? Math.round((Number(fechamentos.length) * (Number(fechamentos.length) * Number(indicie_faltante))) / 100) : '0'}</Text> */}
              <Text style={stlTxt20}>{!!fechamentos.length ? Math.round((Number(fechamentos.length) * Number(indicie_faltante)) / 100) + Number(fechamentos.length) : '0'}</Text>
            </View>
          </View>
          {/* totais */}
          <View style={stlView27}>
            <View style={stlView28}>
              <Text style={stlTxt21}>Meta</Text>
              <View style={stlView31}>
                <Text style={stlTxt22}>{month_meta}</Text>
              </View>
            </View>
            <View style={stlView28}>
              <Text style={stlTxt21}>Sucesso</Text>
              <View style={stlView31}>
                <Text style={stlTxt22}>{`${Number(month_meta) === 0 ? 0 : Math.round(Number(Number(fechamentos.length) / Number(month_meta) * 100).toFixed(2))}%`}</Text>
              </View>
            </View>
            <View style={stlView30}>
              <Text style={stlTxt21}>Faltam</Text>
              <View style={stlView31}>
                <View style={stlView29}>
                  <Text>{Number(month_meta) - Number(fechamentos.length)}</Text>
                  <Text>{`${Number(month_meta) === 0 ? 0 : Math.round(Number(Number(fechamentos.length) / Number(month_meta) * 100).toFixed(2) - 100)}%`}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={stlView27}>
            <View style={stlView28}>
              <Text style={stlTxt21}>Índice Faltante</Text>
              <View style={stlView31}>
                <Text style={stlTxt22}>{`${indicie_faltante}%`}</Text>
              </View>
            </View>
          </View>
        </View>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
