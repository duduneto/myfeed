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
  Image,
  Animated
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
  UseRefreshView,
  useForm
} from './useMorfos';

// ANT DESIGN
import 'antd/dist/antd.css';
import { Select, Switch, Radio, Checkbox, Row, Col } from 'antd';

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
    Sc07b_clients,
    Sc07b_opportunities,
    Sc07b,
    yOffSetPosition,
    fromSc06
  } = useReducer();
  // const screenContent = rdContent[0];
  const screenContent = rdContent[4];
  const callListRd = useListRd();
  const callChangeRd = useChangeRd();
  const callManyChangeRd = useChangeManyRd();
  const currencyMask = useCurrencyMask;
  let _refScrollView;
  let offSetYPosition;

  const callToDb = () => {
    callListRd({
      collection: 'clients',
      reducerName: 'Sc07b_clients'
    });
    callListRd({
      collection: 'opportunities',
      reducerName: 'Sc07b_opportunities'
    });
  };
  useEffect(() => {
    callChangeRd({reducerName: 'Cp01', value:'Filtrar Oportunidades'});
    callToDb();
    
    return () => {
      callChangeRd({reducerName: 'fromSc06', value:false});
      callManyChangeRd({
        fromSc06: false,
      })
    }
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
          ref={ref => (_refScrollView = ref)}
          scrollEventThrottle={ref => console.log(ref)}
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
          {/* <UseRefreshView style={stl03}
            triggerRefreshHeight={200}
            onRefresh={callToDb}
          > */}
          {/*  */}
          <View style={stl03}>{props.children}</View>
          {/*  */}
          {/* </UseRefreshView> */}
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
        {getListPending === true ? (
          <UseLoader />
        ) : (
            <FORM
              renderProps={({ values, handleTextChange, handleChangeState, handleManyChange, handleReplaceState }) => (
                <>
                  <FILTER values={values} handleChangeState={handleChangeState} handleManyChange={handleManyChange} handleReplaceState={handleReplaceState} />
                  {values.filter_result_pending === true ? (
                    <UseLoader />
                  ) : (
                      <>
                        {!!values.filter_result && (
                          <FILTER_RESULTS
                            values={values}
                            handleChangeState={handleChangeState}
                          />
                        )}
                      </>
                    )}
                </>
              )}
            />
          )}
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
    const {
      values,
      handleTextChange,
      handleChangeState,
      handleManyChange, 
      handleReplaceState
    } = useForm({
      init: true,
      field_to_order: {
        key: 'Nome do Cliente',
        parent: 'user',
        value: 'nomeDaEmpresa'
      },
      default_alphabetic_order: true
    });
    useEffect(() => {
      console.log('Sc07b => ', Sc07b_opportunities)
      Sc07b_opportunities && !!Sc07b_opportunities.find(opp => opp.opportunity_deal === true) && callManyChangeRd({
        Sc07b_opportunities: Sc07b_opportunities.filter(opp => opp.opportunity_deal !== true)
      })
        if (values.init === true && Sc07b && fromSc06) {
          handleManyChange({
            ...Sc07b,
            init: false,
            goals_toggle: false
            // SETANDO UMA ORDENACAO PADRAO
          });
          console.log('Veio do Sc06')
        }
    }, []);

    // ------------------------------

    // ------------------------------

    // #endregion
    return props.renderProps({ values, handleTextChange, handleChangeState, handleManyChange, handleReplaceState });
  };

  //_______________________________
  const FILTER = props => {
    // #region [setLogic]
    // ------------------------------

    const { values, handleChangeState, handleManyChange, handleReplaceState } = props;
    useEffect(() => {
      let client_cities = [];
      let client_ufs = [];
      Sc07b_clients &&
        Sc07b_clients.map(client => {
          if (values.estado && values.estado.length > 0) {
            if (
              !client_cities.find(city => city === client.cidade) &&
              !!values.estado.find(estado => estado === client.estado)
            ) {
              client_cities.push(client.cidade);
            }
          } else {
            if (!client_cities.find(city => city === client.cidade)) {
              client_cities.push(client.cidade);
            }
          }
          if (!client_ufs.find(uf => uf === client.estado)) {
            client_ufs.push(client.estado);
          }
        });
      handleChangeState(client_cities.sort(), 'client_cidades');
      handleChangeState(client_ufs.sort(), 'client_estados');
      let _modelos_to_filter = [
        ...screenContent.txt31,
        ...screenContent.txt32,
        ...screenContent.txt33,
        ...screenContent.txt34
      ]
        .sort()
        .filter(model => model !== 'Outros (especificar)');
      handleChangeState(
        [..._modelos_to_filter, 'Outros (especificar)'],
        'client_modelos'
      );
      // SETANDO TOGGLE PARA DEIXAR FILTRO ABERTO POR PADRAO
      handleChangeState(true,'goals_toggle')
    }, [values.estado]);

    const modelos = {
      [screenContent.txt31[0]]: screenContent.txt31.filter(item => item !== screenContent.txt31[0]),
      [screenContent.txt32[0]]: screenContent.txt32.filter(item => item !== screenContent.txt32[0]),
      [screenContent.txt33[0]]: screenContent.txt33.filter(item => item !== screenContent.txt33[0]),
      [screenContent.txt34[0]]: screenContent.txt34.filter(item => item !== screenContent.txt34[0]),
      [screenContent.txt35[0]]: screenContent.txt35.filter(item => item !== screenContent.txt35[0])
    };

    const getModelsByProductsSelected = () => {
      let modelsSelected = ['Outros (especificar)'];
      if (
        values &&
        values.opportunity_products_category &&
        values.opportunity_products_category.length > 0 &&
        !values.opportunity_products_category.find(
          product => product === 'Todos'
        )
      ) {
        values.opportunity_products_category.map(product =>
          modelsSelected.unshift(
            ...modelos[product].filter(
              model => model !== 'Outros (especificar)'
            )
          )
        );
      } else {
        if (values.client_modelos) {
          modelsSelected = values.client_modelos;
        }
      }
      return modelsSelected;
    };

    let _modelos = ['Todos', ...getModelsByProductsSelected()];

    // MANIPULADOR DO COLLAPSADOR
    const cond01 = !!values.goals_toggle ? 'minus-square' : 'plus-square';

    const filterOpportunitiesOnSubmitFilter = () => {
      handleChangeState(true, 'filter_result_pending');
      handleChangeState('', 'selectedItem');
      let filtered_opps;
      let fieldsNameByOpp = [
        'options_probabilidadeVenda',
        'options_probabilidadeVenda_starred',
        'opportunity_products_category',
        'opportunity_products'
      ];
      let fieldNameByClient = ['nomeDaEmpresa', 'estado', 'cidade'];
      let fieldsNameByOpportunityBased_validated = new Array();
      let fieldsNameByClientBased_validated = new Array();

      // CAMPOS QUE SERAO USADOS PARA CONDICAO
      fieldsNameByOpp.map(field => {
        if (
          (!!values[field] &&
            values[field].length > 0 &&
            !values[field].find(value => value === 'Todos')) ||
          (field === 'options_probabilidadeVenda_starred' &&
            values.options_probabilidadeVenda_starred !== undefined)
        ) {
          console.log(field);
          let conditionAboutThisField = new Array();
          if (field === 'options_probabilidadeVenda_starred') {
            conditionAboutThisField.push(`opp.${field} === ${values[field]}`);
            console.log(conditionAboutThisField);
            fieldsNameByOpportunityBased_validated.push(
              `(${conditionAboutThisField[0]})`
            );
          } else {
            values[field].map(value => {
              if (value === 'Todos') {
                conditionAboutThisField.push(`!!opp.${field}`);
              } else {
                conditionAboutThisField.push(`opp.${field} === '${value}'`);
              }
              fieldsNameByOpportunityBased_validated.push(
                `(${conditionAboutThisField.join(' || ')})`
              );
            });
          }
        }
      });

      // CAMPOS QUE FICAM DENTRO DO OBJETO USER DENTRO DE OPPORTUNITY
      fieldNameByClient.map(field => {
        if (!!values[field] && values[field].length > 0) {
          let conditionAboutThisField = new Array();
          values[field].map(value => {
            if (value === 'Todos') {
              conditionAboutThisField.push(`!!opp.user.${field}`);
            } else {
              conditionAboutThisField.push(`opp.user.${field} === '${value}'`);
            }
          });
          fieldsNameByClientBased_validated.push(
            `(${conditionAboutThisField.join(' || ')})`
          );
        }
      });
      // COLOCANDO CONDICOES UMA ATRAS DA OUTRA
      let pre_condition_filter = [
        ...fieldsNameByClientBased_validated,
        ...fieldsNameByOpportunityBased_validated
      ];
      console.log(pre_condition_filter);

      // JUNTANDO AS CONDICIONAIS
      let condition_filter = `${pre_condition_filter.join(' && ')}`;

      filtered_opps = Sc07b_opportunities.filter(opp => eval(condition_filter));

      handleChangeState(filtered_opps, 'filter_result');
      handleChangeState(false, 'filter_result_pending');
    };

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.card, useStyle.flexRow, useStyle.flexBetween];
    //prettier-ignore
    let stl01b = [useStyle.card, useStyle.flexCenter, { width: widthPercentageToDP('43%'), height: 160 }];
    let stl02 = [useStyle.flex2, { paddingLeft: 20 }];
    let stl03 = [{ fontSize: 14 }];
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
    let stlView04 = [useStyle.flexRow, useStyle.flexBetween];
    let stlTxt01 = [useStyle.txTitleCard];
    // ------------------------------
    // #endregion

    return (
      <View style={[stl01, { flexDirection: 'column' }]}>
        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() => {
            handleChangeState(!!!values.goals_toggle, 'goals_toggle');
          }}
        >
          <View style={stlView04}>
            <Text style={stlTxt01}>Filtro</Text>
            <View>
              <UseIcoMoon name={cond01} size={22} color={'#333'} />
            </View>
          </View>
        </TouchableOpacity>

        {/* MANIPULANDO O TOGGLE */}

        {values.goals_toggle && Sc07b_clients && (
          // FILTRO DE CLIENTE
          <>
            <View style={{ width: '100%', marginTop: 20 }}>
              <View style={{ width: '100%' }}>
                <Text style={stl03}>Nome de Cliente </Text>
                <Select
                  mode="multiple"
                  value={values.nomeDaEmpresa}
                  style={{ width: '100%', marginTop: 5 }}
                  placeholder={'Nome do Cliente'}
                  onChange={e => handleChangeState(e, 'nomeDaEmpresa')}
                >
                  {/* ORDENANDO LISTA DE CLIENTES PARA SELECT */}
                  {[{ nomeDaEmpresa: 'Todos' }, ...Sc07b_clients.sort((a,b) => a.nomeDaEmpresa < b.nomeDaEmpresa ? -1 : 0)].map(
                    client => {
                      return (
                        <Select.Option key={client.nomeDaEmpresa}>
                          {client.nomeDaEmpresa}
                        </Select.Option>
                      );
                    }
                  )}
                </Select>
              </View>

              {/* FILTRO DE ESTADO/CIDADES */}

              {/* ATENÇÃO!! NÃO ESTAMOS FAZENDO FILTRANDO CIDADE BASEADO EM ESTADO, POIS O ESTADO PODE SER UM PARAMETRO DE FILTRO INDEPENDENTE */}

              <View style={{ width: '100%', marginTop: 20 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={stl03}>Estado</Text>
                    <Select
                      placeholder={'Estado'}
                      mode="multiple"
                      value={values.estado}
                      style={{ width: '90%', marginTop: 5 }}
                      onChange={e => handleChangeState(e, 'estado')}
                    >
                      {['Todos', ...values.client_estados].map(estado => {
                        return (
                          <Select.Option key={estado}>{estado}</Select.Option>
                        );
                      })}
                    </Select>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={stl03}>Cidade</Text>
                    <Select
                      disabled={!!values && !values.estado}
                      placeholder={'Cidade'}
                      value={values.cidade}
                      mode="multiple"
                      style={{ width: '100%', marginTop: 5 }}
                      onChange={e => handleChangeState(e, 'cidade')}
                    >
                      {['Todos', ...values.client_cidades].map(city => {
                        return <Select.Option key={city}>{city}</Select.Option>;
                      })}
                    </Select>
                  </View>
                </View>
              </View>

              {/* FILTRO DE PROBABILIDADE */}

              <View style={{ width: '100%', marginTop: 20 }}>
                <Text style={stl03}>Probabilidade</Text>

                <View style={{ flexDirection: 'row' }}>
                  {/* INPUT SELECT PARA PROBABILIDADE */}
                  <Select
                    placeholder={'Probabilidade'}
                    mode="multiple"
                    value={values.options_probabilidadeVenda}
                    style={{ width: '100%', marginTop: 5, paddingRight: 20 }}
                    onChange={e =>
                      handleChangeState(e, 'options_probabilidadeVenda')
                    }
                  >
                    {/* NO CONTENTPT ESTRELA É INCLUSA COMO UMA PROBABILIDADE O CODIGO DESCOMENTADO NÃO CONTA COM 'ESTRELA' SENDO UMA PROBABILIDADE VISTO QUE A ESTRELA É UM BOOLEANO NO BANCO*/}
                    <Select.Option key={'Todos'}>{'Todos'}</Select.Option>
                    <Select.Option key={'Alta'}>{'Alta'}</Select.Option>
                    <Select.Option key={'Baixa'}>{'Baixa'}</Select.Option>
                  </Select>

                  {/* PROBABILIDADE ESTRELA */}
                  <Checkbox.Group
                    // value={values.options_probabilidadeVenda_starred === undefined ? [] : [values.options_probabilidadeVenda_starred]}
                    value={values.options_probabilidadeVenda_starred_checkboxes}
                    style={{ width: '100%' }}
                    onChange={e => {
                      console.log(e);
                      handleChangeState(
                        e,
                        'options_probabilidadeVenda_starred_checkboxes'
                      );
                      if (e.length === 0 || e.length === 2) {
                        handleChangeState(
                          undefined,
                          'options_probabilidadeVenda_starred'
                        );
                      } else {
                        handleChangeState(
                          e[0],
                          'options_probabilidadeVenda_starred'
                        );
                      }
                    }}
                  >
                    <Row>
                      <Col span={12} xs={24}>
                        <Checkbox value={true}>Com Estrela</Checkbox>
                      </Col>
                      <Col span={12} xs={24}>
                        <Checkbox value={false}>Sem Estrela</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </View>

                {/* </View> */}
              </View>

              {/* </View> */}
            </View>

            {/* FILTRO DE PRODUTO/MODELO */}

            <View style={{ width: '100%', marginTop: 20 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={stl03}>Produto</Text>
                  <Select
                    placeholder={'Produto'}
                    mode="multiple"
                    value={values.opportunity_products_category}
                    style={{ width: '90%', marginTop: 5 }}
                    onChange={e =>
                      handleChangeState(e, 'opportunity_products_category')
                    }
                  >
                    {['Todos', ...screenContent.txt49].map(product => {
                      return (
                        <Select.Option key={product}>{product}</Select.Option>
                      );
                    })}
                  </Select>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={stl03}>Modelo</Text>
                  <Select
                    disabled={
                      (values &&
                        values.opportunity_products_category &&
                        values.opportunity_products_category.length === 0) ||
                      values.opportunity_products_category === undefined
                    }
                    value={values.opportunity_products}
                    placeholder={'Modelo'}
                    mode="multiple"
                    style={{ width: '100%', marginTop: 5 }}
                    onChange={e => handleChangeState(e, 'opportunity_products')}
                  >
                    {!!_modelos &&
                      _modelos.map(model => {
                        return (
                          <Select.Option key={model}>{model}</Select.Option>
                        );
                      })}
                  </Select>
                </View>
              </View>
            </View>
            {/* BOTÃO DE FILTRAR  */}
            {/* <<<<<<<<<CARLOS: Estilizar o botão para o padrão na documentacao */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <TouchableOpacity
                style={[
                  useStyle.btn,
                  { width: '40%', height: 40, marginTop: 40 }
                ]}
                onPress={e => handleManyChange({
                  nomeDaEmpresa: undefined,
                  estado: undefined,
                  cidade: undefined,
                  options_probabilidadeVenda: undefined,
                  options_probabilidadeVenda_starred_checkboxes: undefined,
                  options_probabilidadeVenda_starred: undefined,
                  opportunity_products_category: undefined,
                  opportunity_products: undefined
                })}
              >
                <Text style={{ color: '#666' }}>Limpar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  useStyle.btn,
                  { width: '40%', height: 40, marginTop: 40 }
                ]}
                onPress={e => filterOpportunitiesOnSubmitFilter()}
              >
                <Text style={{ color: '#666' }}>Filtrar</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
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
        key={props._key}
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

  //_______________________________

  const FILTER_RESULTS = props => {
    // #region [allStyles]
    // ------------------------------
    let stl01 = [useStyle.card, useStyle.flexRow, useStyle.flexBetween];
    let stl02 = [{ position: 'absolute', left: 10, top: 11 }];
    let stl03 = [useStyle.flex2, { paddingLeft: 75 }];
    let stl04 = [useStyle.txTitleCard];
    let stl05 = [useStyle.txSubTitleCard, { marginTop: -3 }];
    let stl06 = [{ marginRight: -10 }];
    // ------------------------------
    // #endregion

    const { values, handleChangeState } = props;

    const getTotalClients = () => {
      let total_clients_on_result = new Array();
      if (values && values.filter_result) {
        values.filter_result.map(result => {
          !total_clients_on_result.find(
            client => client === result.user.nomeDaEmpresa
          ) && total_clients_on_result.push(result.user.nomeDaEmpresa);
        });
      }
      return total_clients_on_result.length;
    };

    const getTotalValueAmount = () => {
      let opportunities_amount = 0;
      if (values && values.filter_result) {
        values.filter_result.map(result => {
          opportunities_amount =
            currencyMask(result.total_amount_opportunity, true) +
            opportunities_amount;
        });
      }
      return currencyMask(opportunities_amount);
    };

    const orderByThisFields = [
      { key: 'Nome do Cliente', parent: 'user', value: 'nomeDaEmpresa' },
      { key: 'Estado', parent: 'user', value: 'estado' },
      { key: 'Cidade', parent: 'user', value: 'cidade' },
      { key: 'Probabilidade', value: 'options_probabilidadeVenda' },
      { key: 'Produto', value: 'opportunity_products_category' },
      { key: 'Modelo', value: 'opportunity_products' }
    ];

    let orderedResult =
      !!values && !!values.filter_result && !!values.field_to_order
        ? values.filter_result.sort((opp1, opp2) => {
          let condition = values.field_to_order.parent
            ? `opp1.${values.field_to_order.parent}.${
            values.field_to_order.value
            } ${
            values.default_alphabetic_order === true ||
              values.default_alphabetic_order === undefined
              ? `<`
              : `>`
            } opp2.${values.field_to_order.parent}.${
            values.field_to_order.value
            }`
            : `opp1.${values.field_to_order.value} ${
            values.default_alphabetic_order ? `<` : `>`
            } opp2.${values.field_to_order.value}`;
          return eval(condition) ? -1 : 0;
        })
        : values.filter_result;
    // .sort((res1, res2) => res1.user.nomeDaEmpresa < res2.user.nomeDaEmpresa ? -1 : 0)
    return (
      <>
        {/* SELECIONADOR DE PARAMETRO PARA ORDENACAO */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Select
            placeholder={'Modelo'}
            value={values && values.field_to_order && values.field_to_order.key}
            style={{ width: '40%', marginTop: 10 }}
            onChange={e => {
              handleChangeState(orderByThisFields[e], 'field_to_order');
            }}
          >
            {orderByThisFields.map((field, index) => {
              return <Select.Option key={index}>{field.key}</Select.Option>;
            })}
          </Select>

          {/* CONTROLADOR DE LISTAGEM POR ORDEM ALFABETICA */}
          {/* <<<<<<<<<CARLOS: ESTILIZAR OS BOTOES RADIOS PARA FICAREM NO MESMO NÍVEL DO INPUT SELECT (ACIMA) */}
          <Radio.Group
            onChange={e =>
              handleChangeState(
                e.target.value === 1,
                'default_alphabetic_order'
              )
            }
            value={
              values && values.field_to_order
                ? (values && values.default_alphabetic_order === undefined) ||
                  values.default_alphabetic_order === true
                  ? 1
                  : 2
                : 0
            }
          >
            <Radio value={1}>A - Z</Radio>
            <Radio value={2}>Z - A</Radio>
          </Radio.Group>
        </View>

        {/* QUANTIFICADOR DO RESULTADO */}
        {values && values.filter_result && (
          <View style={[{ marginTop: 40, marginBottom: 10 }]}>
            <Text style={{ color: '#999', fontSize: 13 }}>
              {`Resultados (${
                values.filter_result.length
                }) / Clientes (${getTotalClients()}) / Valor Total: R$ ${getTotalValueAmount()}`}
            </Text>
          </View>
        )}

        {/* LISTAGEM DO RESULTADO FILTRADO */}

        {values && values.filter_result && values.filter_result.length > 0 ? (
          orderedResult.map((opportunity, index) => {
            return (
              <SELECTED_VIEW
                style={[]}
                _key={index}
                condition={values && values.selectedItem === opportunity.docId}
                initialColor={'#9eb0d0'}
                endColor={'transparent'}
                duration={1000}
              >
                <TouchableOpacity
                  onPress={() => {
                    callManyChangeRd({
                      _Sc06: { docId: opportunity.user.docId },
                      Sc06: opportunity.user,
                      Sc06_selected_opportunity: opportunity,
                      Sc07b: { ...values, selectedItem: opportunity.docId }
                    });
                    compProps.history.push('/activityProfile');
                  }}
                >
                  <View style={stl01}>
                    {!!opportunity.options_probabilidadeVenda_starred && (
                      <STAR activeStyle={true} />
                    )}
                    <View style={stl02}>
                      <View style={{ position: 'absolute', left: 10, top: 5 }}>
                        <UseIcoMoon
                          name={
                            opportunity.opportunity_deal === true
                              ? 'hands'
                              : opportunity.options_probabilidadeVenda === 'Baixa' 
                              ? 'hand-down'
                              : 'hand'
                          }
                          size={62}
                          color={
                            opportunity.opportunity_deal === true
                              ? '#2A576B'
                              : opportunity.options_probabilidadeVenda ===
                                'Baixa'
                                ? '#FF9800'
                                : '#008833'
                          }
                        />
                      </View>
                    </View>
                    <View style={stl03}>
                      {// MOSTRA O PARAMETRO E O VALOR QUE ESTÁ SENDO ORDENADO
                        values.field_to_order && values.field_to_order.value !== 'nomeDaEmpresa' && (
                          <Text>{`${values.field_to_order.key} : ${
                            values.field_to_order.parent
                              ? opportunity[values.field_to_order.parent][
                              values.field_to_order.value
                              ]
                              : opportunity[values.field_to_order.value]
                            }`}</Text>
                        )}
                      <Text style={stl04}>
                        {opportunity.user.nomeDaEmpresa}
                      </Text>
                      <Text
                        style={stl05}
                      >{`Unidades ${opportunity.amount_opportunity} / Produto: ${opportunity.opportunity_products} / ${opportunity.opportunity_products_category} / Valor Unitário: R$: ${typeof(opportunity.unit_value_opportunity) === 'number' ? currencyMask(opportunity.unit_value_opportunity) : opportunity.unit_value_opportunity}/ Total R$: ${typeof(opportunity.total_amount_opportunity) === 'number' ? currencyMask(opportunity.total_amount_opportunity) : opportunity.total_amount_opportunity}`}</Text>
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
              </SELECTED_VIEW>
            );
          })
        ) : (
            <Text>Sem Resultados</Text>
          )}
      </>
    );
  };

  //_______________________________

  const STAR = props => {
    // #region [setLogic]
    // ------------------------------

    // set Props
    let { activeStyle, onPress, item } = props;

    // let condition01 = activeStyle === 'false' && stlView05;

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
      // <<<<<CARLOS : Label da estrela está encaixando com oportunidades que tem um height maior q o padrão
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
        right: 40
      }
    ];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <TouchableOpacity
          style={activeStyle === true && stlView05}
          onPress={() => onPress(item)}
        >
          <Image
            style={stlImg01}
            source={require('../images/part_badge1.png')}
          />
          <UseIcoMoon
            name="star"
            size={20}
            color={activeStyle === true && '#eee'}
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

  // ---------------------- THE END
  return <SCREEN />;
}
