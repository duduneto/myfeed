// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Picker,
  TouchableOpacity,
  TextInput
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  UseOptions,
  useChangeRd,
  UseRedirect,
  UseAutocomplete,
  UseCalendar,
  UseButtonSubmit,
  UseTextInput,
  useForm,
  useListRd,
  UseIcoMoon,
  useFbAddAndBindData,
  useFbUpdateFieldFromDoc,
  useChangeManyRd,
  useTimeStamp,
  useCurrencyMask,
  UseLoader
} from './useMorfos';
import UseStyle from './useMorfos/useStyle';
import Calendar from 'react-calendar';

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
    rdMenuSelect,
    Sc05,
    rdUseAutocompleteListSearchClients,
    addAndBindDataPending,
    addAndBindDataError
  } = useReducer();
  const screenContent = rdContent[4];
  const callChangeRd = useChangeRd();
  const callChangeManyRd = useChangeManyRd();
  const callFbAddAndBindData = useFbAddAndBindData();
  const callFbUpdateFieldFromDoc = useFbUpdateFieldFromDoc();
  const timeStamp = useTimeStamp;
  const currencyMask = useCurrencyMask;
  const callUseListRd = useListRd();

  let date_now = new Date();

  useEffect(() => {
    callChangeRd({
      reducerName: 'Cp01',
      value: 'Adicionar'
    });
    return () => {
      callChangeManyRd({
        rdUseAutocompleteListSearchClients: null,
        AutoComplete_Sc05: '',
        addAndBindDataPending: false,
        addAndBindDataError: false
      });
    };
  }, []);

  // ------------------------------
  // #endregion

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // _STYLE
    // let stl = [useStyle.xxx,];
    let stlView01 = [useStyle.flexMaster];
    let stlScroll01 = [useStyle.scrollView];
    let stlView02 = [useStyle.longBar];
    let stlView02b = [useStyle.pad20];
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
      <_STYLE>
        <FORM
          renderProps={({ values, handleTextChange }) => (
            <>
              {addAndBindDataPending === true ? (
                <UseLoader />
              ) : addAndBindDataPending === false &&
                addAndBindDataError === null ? (
                compProps.history.push('/menus')
              ) : (
                <>
                  {values.cancel_form &&
                    (() => {
                      callChangeRd({
                        reducerName: 'AutoComplete_Sc05',
                        value: ''
                      });
                      callChangeRd({
                        reducerName: 'rdUseAutocompleteListSearchClients',
                        value: null
                      });
                      return <UseRedirect to="/menus" />;
                    })()}
                  {!values.current_client && (
                    <>
                      <AUTOCOMPLETE
                        values={values}
                        handleTextChange={handleTextChange}
                      />
                      <CLIENT
                        values={values}
                        handleTextChange={handleTextChange}
                      />
                    </>
                  )}
                  <CLIENTCARD
                    values={values}
                    handleTextChange={handleTextChange}
                  />
                  <ACTIVITY
                    values={values}
                    handleTextChange={handleTextChange}
                  />
                  <OPPORTUNITY
                    values={values}
                    handleTextChange={handleTextChange}
                  />
                  <ADDOPORTUNITY
                    values={values}
                    handleTextChange={handleTextChange}
                  />
                  <BUTTONS
                    values={values}
                    handleTextChange={handleTextChange}
                  />
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

  const FORM = props => {
    // #region [setLogic]
    // ------------------------------
    // set Hook
    const { values, handleTextChange } = useForm();

    rdUseAutocompleteListSearchClients &&
      !values.listSeachClients &&
      handleTextChange(rdUseAutocompleteListSearchClients, 'listSeachClients');
    // ------------------------------
    // #endregion
    return props.renderProps({ values, handleTextChange });
  };
  //_______________________________

  const CLIENT = props => {
    // #region [setLogic]
    // ------------------------------
    // set Props
    let { values, handleTextChange } = props;

    let fieldFocus = () => {
      handleTextChange(true, 'setFocus');
    };
    let fieldNoFocus = () => {
      handleTextChange(false, 'setFocus');
    };
    console.log('focus', values);

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // CLIENT
    let stlView03 = [useStyle.card];
    let stlTxtInput01 = [useStyle.input];
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView03}>
        <UseAutocomplete
          style={stlTxtInput01}
          placeholder={screenContent.txt02}
          reducerNameAutoComplete={'AutoComplete_Sc05'}
          onFocus={() => fieldFocus()}
          onBlur={() => fieldNoFocus()}
        />
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const CLIENTCARD = props => {
    // #region [setLogic]
    // ------------------------------
    // set Props
    let { values, handleTextChange } = props;
    // ------------------------------
    // #endregion

    // #region [allStyles]

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

    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {values.current_client && (
          <View style={stlView03}>
            <View style={stlView04}>
              <Text style={stlTxt01}>{screenContent.txt01}</Text>
              <TouchableOpacity
                onPress={() => {
                  handleTextChange(false, 'current_client');
                  callChangeRd({
                    reducerName: 'AutoComplete_Sc05',
                    value: ''
                  });
                }}
              >
                <UseIcoMoon name="x-square" size={22} color={'#999'} />
              </TouchableOpacity>
            </View>

            <View style={stlView05}>
              <UseIcoMoon name="user" size={42} color={'#333'} />
              <View style={[useStyle.flexRow, useStyle.flex2]}>
                <View style={{ paddingHorizontal: 20, flex: 1 }}>
                  <Text style={stlTxt02}>
                    {values.current_client.nomeDaEmpresa}
                  </Text>
                  <Text style={stlTxt03}>{values.current_client.contato}</Text>
                  <Text style={stlTxt04}>
                    {values.current_client.observacoes}
                  </Text>
                </View>
              </View>
              {/* <UseIcoMoon name="edit" size={22} color={'#999'} /> */}
            </View>
          </View>
        )}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const ACTIVITY = props => {
    // #region [setLogic]
    // ------------------------------

    // set Props
    let { values, handleTextChange } = props;

    // ------------------------------
    // #endregion
    console.log(values);

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.card];
    let stl02 = [useStyle.txTitleCard, useStyle.txCenter];
    let stl03 = [useStyle.mgL5];
    let stl04 = [useStyle.flexStart, useStyle.mgB20, { zIndex: 10 }];
    let stl05 = [
      useStyle.input,
      { zIndex: 1, marginRight: 5, width: 100, textAlign: 'center' }
    ];
    let stl06 = [useStyle.flexRow, useStyle.mgB20];
    let stl07 = [useStyle];
    let stl08 = [useStyle.line];
    let stl09 = [useStyle.mgB20, useStyle.colView];
    let stl09b = [
      useStyle.mgB20
      // { flexDirection: 'row', flexWrap: 'wrap', flex: 1 }
    ];
    let stl10 = [useStyle.input];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {values.current_client && (
          <>
            <View style={stl01}>
              <Text style={stl02}>{screenContent.txt04}</Text>
              <Text style={stl03}>{screenContent.txt05}</Text>
              <View style={stl04}>
                <UseCalendar
                  inputName={'dateActivity'}
                  state={values}
                  inputStyle={stl05}
                  setState={handleTextChange}
                  calendarName={'date_activity_calendar'}
                  defaultValue={
                    new Date(
                      date_now.getFullYear(),
                      date_now.getMonth(),
                      date_now.getDate(),
                      date_now.getHours(),
                      date_now.getMinutes(),
                      date_now.getSeconds()
                    )
                  }
                  // calendarValue={date_now}
                />
              </View>

              {/* DIV TITLE */}
              <View style={stl06}>
                <Text style={stl07}>{screenContent.txt08}</Text>
                <View style={stl08} />
              </View>
              <UseOptions
                values={values}
                styledOptions={stl09b}
                content={{
                  name: 'options_contato',
                  values: screenContent.txt20
                }}
                handleTextChange={handleTextChange}
              />

              <UseTextInput
                style={stl10}
                placeholder={screenContent.txt09}
                multiline={true}
                inputName={'obs_activity'}
                numberOfLines={4}
                setState={handleTextChange}
                state={values}
              />
            </View>
          </>
        )}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const ADDOPORTUNITY = props => {
    // #region [setLogic]
    // ------------------------------
    // set Props
    let { values, handleTextChange } = props;
    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl11 = [
      useStyle.flexEnd,
      { marginBottom: 30, marginTop: -10, zIndex: -1 }
    ];
    let stl12 = { fontWeight: 'bold' };
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <View style={stl11}>
          <UseButtonSubmit
            style={{ textDecoration: 'none' }}
            onPress={() => {
              // handleTextChange(
              //   values.add_opportunity ? !values.add_opportunity : true,
              //   'add_opportunity'
              // );
              let opportunities_array = values.opportunities;
              handleTextChange(
                values.opportunities
                  ? [...opportunities_array, Number(opportunities_array.length)]
                  : [0],
                'opportunities'
              );
            }}
            btnText={
              values.opportunities && values.opportunities.length > 0
                ? screenContent.txt50
                : screenContent.txt11
            }
            btnTextStyle={stl12}
            requiredFields={['dateActivity', 'options_contato']}
            state={values}
            disableTextStyle={{ color: '#ffffff' }}
          />
        </View>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const AUTOCOMPLETE = props => {
    // #region [setLogic]
    // ------------------------------
    // set Props
    let { values, handleTextChange } = props;
    // ------------------------------
    // #endregion

    // #region [allStyles]
    let stlView13 = [useStyle.itemAccordion, { paddingHorizontal: 20 }];
    let stlTxt09 = [useStyle.txBase];
    let stlTxt10 = { color: '#999' };
    let stlView12 = [useStyle.pad10, useStyle.flexRow, useStyle.flexCenter];
    let stlTxt08 = [useStyle.mgL5];
    let stlView11 = [
      useStyle.dialogueBox,
      {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        position: 'absolute',
        zIndex: 5,
        width: '80%',
        left: 40,
        top: 84
      }
    ];
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <View style={stlView11}>
        <View>
          {values.listSeachClients &&
            values.listSeachClients.map((client, id) => (
              <TouchableOpacity
                style={stlView13}
                key={id}
                onPress={() => {
                  handleTextChange(client, 'current_client');
                  handleTextChange(client.docId, 'clientId');
                  handleTextChange([], 'listSeachClients');
                }}
              >
                {console.log(client)}
                <Text style={stlTxt09}>{client.nomeDaEmpresa}</Text>
                <Text style={stlTxt10}>{client.nomeFantasia}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <View>
          {values.listSeachClients && (
            <View style={stlView12}>
              <UseLink to="/addClients" style={{ textDecoration: 'none' }}>
                <UseIcoMoon name="user" size={22} color="#333" />
                <Text style={stlTxt08}>{screenContent.txt03}</Text>
              </UseLink>
            </View>
          )}
        </View>
      </View>
      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const OPPORTUNITY = props => {
    // #region [setLogic]
    // ------------------------------
    // set Props
    let { values, handleTextChange } = props;
    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = { zIndex: 2 };
    let stl02 = [useStyle.card];
    let stl03 = [useStyle.txTitleCard, useStyle.txCenter];
    let stl04 = [useStyle.mgL5];
    let stl05 = [useStyle.line];
    let stl06 = [useStyle.flexRow, useStyle.mgB20];
    let stl07 = [useStyle.input];
    let stl08 = [
      useStyle.input,
      { zIndex: 2, marginRight: 5, width: 100, textAlign: 'center' }
    ];
    let stl09 = [stl07, { marginBottom: 20 }];
    let stl10 = [useStyle.flexStart, useStyle.mgB20, { zIndex: 10 }];
    let stl11 = [useStyle];
    let stl12 = [
      useStyle.txBase,
      { marginBottom: 20, color: '#2A576B', fontWeight: 600, fontSize: 18 }
    ];
    let stl13 = [useStyle.flexRow, useStyle.mgB20];
    let stl14 = [useStyle.mgB20];
    let stl15 = [useStyle.mgB20];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <View style={stl01}>
        {values.opportunities &&
          values.opportunities.map((item, index) => (
            <>
              <View style={stl02}>
                <Text style={stl03}>{screenContent.txt23}</Text>
                <Text style={stl04}>{screenContent.txt24}</Text>
                <View style={stl10}>
                  <UseCalendar
                    inputName={`opportunity_${index}_dateOpportunity`}
                    inputStyle={stl08}
                    state={values}
                    setState={handleTextChange}
                    calendarName={`opportunity_${index}_date_opportunity_calendar`}
                    defaultValue={date_now}
                  />
                </View>
                {/* DIV TITLE */}
                <View style={stl06}>
                  <Text style={stl11}>{screenContent.txt26}</Text>
                  <View style={stl05} />
                </View>

                <UseOptions
                  values={values}
                  styledOptions={stl15}
                  content={{
                    name: `opportunity_${index}_options_probabilidadeVenda`,
                    values: ['Alta', 'Baixa']
                  }}
                  handleTextChange={handleTextChange}
                />

                <View style={stl06}>
                  <Text style={stl11}>{'Estrelar Oportunidade'}</Text>
                  <View style={stl05} />
                </View>

                <UseOptions
                  values={values}
                  styledOptions={stl15}
                  checkBox={true}
                  content={{
                    name: `opportunity_${index}_starred_options_probabilidadeVenda`,
                    values: [screenContent.txt27[0]]
                  }}
                  handleTextChange={handleTextChange}
                />

                {/* DIV TITLE */}
                <View style={stl06}>
                  <Text style={stl11}>{screenContent.txt30}</Text>
                  <View style={stl05} />
                </View>
                <Text>Linha VM</Text>
                <UseOptions
                  values={values}
                  styledOptions={stl15}
                  optionCategory={screenContent.txt31[0]}
                  optionCategoryName={`opportunity_${index}_opportunity_products_category`}
                  content={{
                    name: `opportunity_${index}_opportunity_products`,
                    values: [screenContent.txt31[0]]
                  }}
                  handleTextChange={handleTextChange}
                  showChildSelect={{
                    show: true,
                    // Tirando LINHA VM como primeira opção
                    contentSelect: screenContent.txt31.slice(
                      (screenContent.txt31.length - 1) * -1,
                      screenContent.txt31.length
                    )
                  }}
                />
                <Text>Linha F</Text>
                <UseOptions
                  values={values}
                  styledOptions={stl15}
                  optionCategory={screenContent.txt32[0]}
                  optionCategoryName={`opportunity_${index}_opportunity_products_category`}
                  content={{
                    name: `opportunity_${index}_opportunity_products`,
                    values: [screenContent.txt32[0]]
                  }}
                  handleTextChange={handleTextChange}
                  showChildSelect={{
                    show: true,
                    contentSelect: screenContent.txt32.slice(
                      (screenContent.txt32.length - 1) * -1,
                      screenContent.txt32.length
                    )
                  }}
                />
                <Text>Consórcio</Text>
                <UseOptions
                  values={values}
                  styledOptions={stl15}
                  optionCategory={screenContent.txt33[0]}
                  optionCategoryName={`opportunity_${index}_opportunity_products_category`}
                  content={{
                    name: `opportunity_${index}_opportunity_products`,
                    values: [screenContent.txt33[0]]
                  }}
                  handleTextChange={handleTextChange}
                  showChildSelect={{
                    show: true,
                    contentSelect: screenContent.txt33.slice(
                      (screenContent.txt33.length - 1) * -1,
                      screenContent.txt33.length
                    )
                  }}
                />
                <Text>Seguro</Text>
                <UseOptions
                  values={values}
                  styledOptions={stl15}
                  optionCategory={screenContent.txt34[0]}
                  optionCategoryName={`opportunity_${index}_opportunity_products_category`}
                  content={{
                    name: `opportunity_${index}_opportunity_products`,
                    values: [screenContent.txt34[0]]
                  }}
                  handleTextChange={handleTextChange}
                  showChildSelect={{
                    show: true,
                    contentSelect: screenContent.txt34.slice(
                      (screenContent.txt34.length - 1) * -1,
                      screenContent.txt34.length
                    )
                  }}
                />
                <Text>Seminovo</Text>
                <UseOptions
                  values={values}
                  styledOptions={stl15}
                  optionCategory={screenContent.txt35[0]}
                  optionCategoryName={`opportunity_${index}_opportunity_products_category`}
                  content={{
                    name: `opportunity_${index}_opportunity_products`,
                    values: [screenContent.txt35[0]]
                  }}
                  handleTextChange={handleTextChange}
                  showChildSelect={{
                    show: true,
                    contentSelect: screenContent.txt35.slice(
                      (screenContent.txt35.length - 1) * -1,
                      screenContent.txt35.length
                    )
                  }}
                />

                {/* DIV TITLE */}
                <View style={stl06}>
                  <Text style={stl11}>{screenContent.txt36}</Text>
                  <View style={stl05} />
                </View>

                {/* VALOR UNIT */}
                <View style={useStyle.flexRow}>
                  <View>
                    <Text style={stl11}>{screenContent.txt37}</Text>
                    <View style={stl10}>
                      <UseTextInput
                        style={stl08}
                        placeholder={screenContent.txt38}
                        setState={handleTextChange}
                        inputName={`opportunity_${index}_unit_value_opportunity`}
                        mask={'currency'}
                        value={
                          values[`opportunity_${index}_unit_value_opportunity`]
                        }
                      />
                    </View>
                  </View>
                  {/* QUANTIDADE */}
                  <View>
                    <Text style={stl11}>{screenContent.txt39}</Text>
                    <View style={stl10}>
                      {!values[`opportunity_${index}_amount_opportunity`] &&
                        handleTextChange(
                          1,
                          `opportunity_${index}_amount_opportunity`
                        )}
                      <TextInput
                        style={stl08}
                        placeholder={screenContent.txt41}
                        onChangeText={_value => {
                          handleTextChange(
                            _value,
                            `opportunity_${index}_amount_opportunity`
                          );
                        }}
                        value={
                          values[`opportunity_${index}_amount_opportunity`]
                            ? Number(
                                values[
                                  `opportunity_${index}_amount_opportunity`
                                ]
                              )
                            : 1
                        }
                      />
                      {values.add_opportunity &&
                      values[`opportunity_${index}_unit_value_opportunity`] &&
                      !values[`opportunity_${index}_amount_opportunity`] ? (
                        handleTextChange(
                          1,
                          `opportunity_${index}_amount_opportunity`
                        )
                      ) : (
                        <></>
                      )}
                      <TouchableOpacity
                        onPress={() => {
                          handleTextChange(
                            values[`opportunity_${index}_amount_opportunity`] &&
                              values[
                                `opportunity_${index}_amount_opportunity`
                              ] > 0
                              ? values[
                                  `opportunity_${index}_amount_opportunity`
                                ] - 1
                              : 1,
                            `opportunity_${index}_amount_opportunity`
                          );
                        }}
                      >
                        <UseIcoMoon
                          name="minus-circle"
                          size={22}
                          color={'#2A576B'}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          handleTextChange(
                            values[`opportunity_${index}_amount_opportunity`] &&
                              values[
                                `opportunity_${index}_amount_opportunity`
                              ] > 0
                              ? values[
                                  `opportunity_${index}_amount_opportunity`
                                ] + 1
                              : 1,
                            `opportunity_${index}_amount_opportunity`
                          );
                        }}
                      >
                        <UseIcoMoon
                          name="plus-circle"
                          size={22}
                          color={'#2A576B'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <Text style={stl11}>{screenContent.txt40}</Text>
                <Text style={stl12}>{`R$ ${
                  values[`opportunity_${index}_unit_value_opportunity`]
                    ? values[`opportunity_${index}_amount_opportunity`]
                      ? (
                          (Number(
                            values[`opportunity_${index}_amount_opportunity`]
                          ) *
                            Number(
                              values[
                                `opportunity_${index}_unit_value_opportunity`
                              ]
                            )) /
                          100
                        )
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
                      : values[`opportunity_${index}_unit_value_opportunity`]
                    : '0,00'
                }`}</Text>

                {/* OBSERVATION */}
                <UseTextInput
                  style={stl09}
                  placeholder={screenContent.txt42}
                  multiline={true}
                  numberOfLines={4}
                  setState={handleTextChange}
                  inputName={`opportunity_${index}_observation_opportunity`}
                  state={values}
                />
                {/* DATE END */}
                <Text style={stl11}>{screenContent.txt44}</Text>
                <View style={stl10}>
                  <UseCalendar
                    inputName={`opportunity_${index}_dateEndOpportunity`}
                    inputStyle={stl08}
                    state={values}
                    setState={handleTextChange}
                    calendarName={`opportunity_${index}_date_end_opportunity_calendar`}
                    defaultValue={
                      new Date(
                        date_now.getFullYear(),
                        date_now.getMonth() + 1,
                        date_now.getDate()
                      )
                    }
                  />
                </View>

                {/* DIV TITLE */}
                <View style={stl06}>
                  <Text style={stl11}>{screenContent.txt46}</Text>
                  <View style={stl05} />
                </View>
                <View style={stl13}>
                  {/* <UseIcoMoon name="check-square" size={22} color={'#2A576B'} />
                  <Text style={stlTxt19}>{screenContent.txt47}</Text> */}
                  <UseOptions
                    values={values}
                    styledOptions={stl14}
                    checkBox={true}
                    content={{
                      name: `opportunity_${index}_options_actions_opportunity`,
                      values: screenContent.txt48
                    }}
                    handleTextChange={handleTextChange}
                  />
                </View>
              </View>
            </>
          ))}
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BUTTONS = props => {
    // #region [setLogic]
    // ------------------------------
    // set Props
    let { values, handleTextChange } = props;

    // let _opportunityDatas = dataOpportunities(values);
    // let infoAddAndBindDatas = {
    //   reducerName: 'rdAddNewActivity',
    //   data1: {
    //     collection: 'activities',
    //     dataToAdd: {
    //       createdAt: new Date(),
    //       clientId: values.clientId,
    //       dateActivity: values.dateActivity,
    //       options_forma: values.options_forma,
    //       options_contato: values.options_contato
    //     }
    //   },
    // data2: {
    //   collection: 'opportunities',
    //   refFieldName: 'activityId',
    //   dataToAdd: {
    //     createdAt: new Date(),
    //     ...values,
    //     dateOpportunity: values.dateOpportunity,
    //     options_probabilidadeVenda: values.options_probabilidadeVenda,
    //     opportunity_products_category: values.opportunity_products_category,
    //     opportunity_products: values.opportunity_products,
    //     observation_opportunity: values.observation_opportunity,
    //     dateEndOpportunity: values.dateEndOpportunity,
    //     unit_value_opportunity: values.unit_value_opportunity,
    //     total_amount_opportunity:
    //       Number(values.amount_opportunity) *
    //       Number(values.unit_value_opportunity),
    //     amount_opportunity: values.amount_opportunity,
    //     clientId: values.clientId
    //   }
    // }
    // };
    // let infoAddPostOpportunity = {
    //   collection: 'opportunities',
    //   reducerName: 'rdAddNewOpportunity',
    //   dataToAdd: {
    //     createdAt: new Date(),
    //     dateOpportunity: values.dateOpportunity,
    //     options_probabilidadeVenda: values.options_probabilidadeVenda,
    //     opportunity_products: values.opportunity_products,
    //     observation_opportunity: values.observation_opportunity,
    //     dateEndOpportunity: values.dateEndOpportunity,
    //     clientId: values.clientId
    //   }
    // };
    var _requireFields = state => {
      let _result = [];
      for (let index = 0; index < state.opportunities.length; index++) {
        _result = [
          ..._result,
          `opportunity_${index}_options_actions_opportunity`,
          `opportunity_${index}_dateOpportunity`,
          `opportunity_${index}_options_probabilidadeVenda`,
          `opportunity_${index}_opportunity_products`,
          `opportunity_${index}_unit_value_opportunity`,
          `opportunity_${index}_amount_opportunity`,
          `opportunity_${index}_dateEndOpportunity`,
          `opportunity_${index}_observation_opportunity`
        ];
      }
      return _result;
    };
    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.flexCenter, { zIndex: -1 }];
    let stl02 = [useStyle.btnPrimary, useStyle.btnLarge, { marginBottom: 10 }];
    let stl02b = [useStyle.txInverseColor];
    let stl03 = [useStyle.btn, useStyle.btnLarge];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {values.current_client && (
          <View style={stl01}>
            <UseButtonSubmit
              style={stl02}
              onPress={() => {
                // ------------------------- ONPRESS SAVE BTN ------------------------
                var dataOpportunities = state => {
                  let infoToAdd = {
                    reducerName: 'rdAddNewActivity',
                    data1: {
                      collection: 'activities',
                      offline: state.current_client.offline,
                      dataToAdd: {
                        createdAt: new Date(),
                        clientId: state.clientId,
                        dateActivity: state.dateActivity,
                        options_contato: state.options_contato,
                        obs_activity: state.obs_activity
                          ? state.obs_activity
                          : false,
                        nomeDaEmpresa: values.current_client.nomeDaEmpresa
                      }
                    }
                  };
                  if (state.opportunities) {
                    for (
                      let index = 0;
                      index < state.opportunities.length;
                      index++
                    ) {
                      infoToAdd[`data${index + 2}`] = {
                        collection: 'opportunities',
                        refFieldName: 'activityId',
                        dataToAdd: {
                          clientId: state.clientId,
                          createdAt: new Date(),
                          options_actions_opportunity:
                            state[
                              `opportunity_${index}_options_actions_opportunity`
                            ],
                          dateOpportunity:
                            state[`opportunity_${index}_dateOpportunity`],
                          options_probabilidadeVenda:
                            state[
                              `opportunity_${index}_options_probabilidadeVenda`
                            ],
                          options_probabilidadeVenda_starred: !!state[
                            `opportunity_${index}_starred_options_probabilidadeVenda`
                          ],
                          opportunity_products:
                            state[`opportunity_${index}_opportunity_products`],
                          opportunity_products_category:
                            state[
                              `opportunity_${index}_opportunity_products_category`
                            ],
                          unit_value_opportunity: currencyMask(
                            state[`opportunity_${index}_unit_value_opportunity`]
                          ),
                          amount_opportunity:
                            state[`opportunity_${index}_amount_opportunity`],
                          dateEndOpportunity:
                            state[`opportunity_${index}_dateEndOpportunity`],
                          total_amount_opportunity: currencyMask(
                            Number(
                              state[`opportunity_${index}_amount_opportunity`]
                            ) *
                              Number(
                                state[
                                  `opportunity_${index}_unit_value_opportunity`
                                ]
                              )
                          ),
                          observation:
                            state[
                              `opportunity_${index}_observation_opportunity`
                            ],
                          user: values.current_client
                        }
                      };
                    }
                  }
                  return infoToAdd;
                };
                callFbAddAndBindData(dataOpportunities(values));
                callFbUpdateFieldFromDoc({
                  collection: 'clients',
                  reducerName: 'rdUpdatedDoc',
                  docId: values.current_client.docId,
                  dataToUpdate: [
                    { nameField: 'activities', value: 1, operation: 1 },
                    values.opportunities && {
                      nameField: 'opportunities',
                      value: values.opportunities.length,
                      operation: 1
                    }
                  ]
                });
                // ------------------------- END ONPRESS SAVE BTN ------------------------
              }}
              btnText={screenContent.txt12}
              btnTextStyle={stl02b}
              state={values}
              // requiredFields={['dateActivity','options_forma','options_contato','obs_activity','dateOpportunity','options_probabilidadeVenda','opportunity_products','unit_value_opportunity','total_amount_opportunity','observation_opportunity','dateEndOpportunity']}
              requiredFields={
                values.opportunities && values.opportunities.length > 0
                  ? [
                      'dateActivity',
                      'obs_activity',
                      'options_contato',
                      ..._requireFields(values)
                    ]
                  : ['dateActivity', 'options_contato', 'obs_activity']
              }
              disableBtnStyle={{ backgroundColor: '#c9c9c9' }}
            />

            <TouchableOpacity
              style={stl03}
              onPress={() => {
                handleTextChange(true, 'cancel_form');
              }}
            >
              <Text>{screenContent.txt13}</Text>
            </TouchableOpacity>
          </View>
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
