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
  UseCalendar,
  UseButtonSubmit,
  UseTextInput,
  UseOptions,
  useForm,
  useChangeManyRd,
  useFbUpdateData,
  UseIcoMoon,
  useFbUpdateFieldFromDoc,
  UseLoader,
  useCurrencyMask
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
    rdContent,
    Sc06b_opportunity,
    updateDataPending,
    updateDataError
  } = useReducer();
  const screenContent = rdContent[4];
  const callChangeManyRd = useChangeManyRd();
  const callFbUpdateData = useFbUpdateData();
  const currencyMask = useCurrencyMask;

  useEffect(() => {
    callChangeManyRd({
      Cp01: 'Editar Oportunidade',
      Sc06b_opportunity: Sc06b_opportunity && {
        ...Sc06b_opportunity,
        options_probabilidadeVenda_starred: Sc06b_opportunity.options_probabilidadeVenda_starred
          ? ['Estrela']
          : ['']
      }
    });
    return () => {
      callChangeManyRd({
        updateDataError: false,
        updateDataPending: false,
        Sc06b_opportunity: null
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
          renderProps={({ values, handleTextChange, setAllValues }) => (
            <>
              {/* {values.cancel_form &&
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
                })()} */}
              {updateDataPending === true && updateDataError === null ? (
                <UseLoader />
              ) : updateDataPending === false && updateDataError === null ? (
                compProps.history.goBack()
              ) : (
                    Sc06b_opportunity && (
                      <>
                        <OPPORTUNITY
                          opportunity={Sc06b_opportunity}
                          values={values}
                          handleTextChange={handleTextChange}
                          setAllValues={setAllValues}
                        />
                        <BUTTONS
                          values={values}
                          handleTextChange={handleTextChange}
                        />
                      </>
                    )
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
    const { values, handleTextChange, setAllValues } = useForm();
    // ------------------------------
    // #endregion
    return props.renderProps({ values, handleTextChange, setAllValues });
  };
  //_______________________________

  const OPPORTUNITY = props => {
    // #region [setLogic]
    // ------------------------------
    // set Props
    let { values, handleTextChange, opportunity, setAllValues } = props;
    console.log(values);
    console.log(opportunity);

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
    let stl15 = [useStyle.mgB20, useStyle.colView];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <View style={stl01}>
        <View style={stl02}>
          <Text style={stl03}>{screenContent.txt23}</Text>
          <Text style={stl04}>{screenContent.txt24}</Text>
          <View style={stl10}>
            <UseCalendar
              inputName={`dateOpportunity`}
              inputStyle={stl08}
              state={values}
              setState={handleTextChange}
              calendarName={`opportunity_date_opportunity_calendar`}
              defaultValue={
                new Date(Sc06b_opportunity.dateOpportunity.seconds * 1000)
              }
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
              name: `options_probabilidadeVenda`,
              values: ['Alta', 'Baixa']
            }}
            handleTextChange={handleTextChange}
            defaultValue={Sc06b_opportunity.options_probabilidadeVenda}
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
              name: `options_probabilidadeVenda_starred`,
              values: ['Estrela']
            }}
            handleTextChange={handleTextChange}
            defaultValue={
              Sc06b_opportunity.options_probabilidadeVenda_starred[0] ===
                'Estrela'
                ? ['Estrela']
                : ['']
            }
          />

          {/* DIV TITLE */}
          <View style={stl06}>
            <Text style={stl11}>{screenContent.txt30}</Text>
            <View style={stl05} />
          </View>
          <Text style={[stl06, { fontWeight: 600 }]}>{`${Sc06b_opportunity.opportunity_products_category}: ${Sc06b_opportunity.opportunity_products}`}</Text>
          {/* <Text style={stl06}>{Sc06b_opportunity.opportunity_products}</Text> */}
          {/* EDITAR TIPO DE PRODUTO DESABILITADO */}
          {/* <UseOptions
            values={values}
            styledOptions={stl15}
            optionCategory={screenContent.txt31[0]}
            optionCategoryName={`opportunity_products_category`}
            optionMainCategoryName={`opportunity_products`}
            pickerDefaultValue={Sc06b_opportunity.opportunity_products_category}
            content={{
              name: `opportunity_products`,
              values: [screenContent.txt31[0]]
            }}
            handleTextChange={handleTextChange}
            showChildSelect={{
              show: true,
              contentSelect: screenContent.txt31
            }}
            defaultValue={Sc06b_opportunity.opportunity_products} // <----- Ele Seta o campo opportunity_products para o camponente, não precisa repetir nos outros UseOptions
          />

          <UseOptions
            values={values}
            styledOptions={stl15}
            optionCategory={screenContent.txt32[0]}
            optionCategoryName={`opportunity_products_category`}
            optionMainCategoryName={`opportunity_products`}
            pickerDefaultValue={Sc06b_opportunity.opportunity_products_category}
            content={{
              name: `opportunity_products`,
              values: [screenContent.txt32[0]]
            }}
            handleTextChange={handleTextChange}
            showChildSelect={{
              show: true,
              contentSelect: screenContent.txt32
            }}
          />

          <UseOptions
            values={values}
            styledOptions={stl15}
            optionCategory={screenContent.txt33[0]}
            optionCategoryName={`opportunity_products_category`}
            optionMainCategoryName={`opportunity_products`}
            pickerDefaultValue={Sc06b_opportunity.opportunity_products_category}
            content={{
              name: `opportunity_products`,
              values: [screenContent.txt33[0]]
            }}
            handleTextChange={handleTextChange}
            showChildSelect={{
              show: true,
              contentSelect: screenContent.txt33
            }}
          />

          <UseOptions
            values={values}
            styledOptions={stl15}
            optionCategory={screenContent.txt34[0]}
            optionCategoryName={`opportunity_products_category`}
            optionMainCategoryName={`opportunity_products`}
            pickerDefaultValue={Sc06b_opportunity.opportunity_products_category}
            content={{
              name: `opportunity_products`,
              values: [screenContent.txt34[0]]
            }}
            handleTextChange={handleTextChange}
            showChildSelect={{
              show: true,
              contentSelect: screenContent.txt34
            }}
          />

          <UseOptions
            values={values}
            styledOptions={stl15}
            optionCategory={screenContent.txt35[0]}
            optionCategoryName={`opportunity_products_category`}
            optionMainCategoryName={`opportunity_products`}
            pickerDefaultValue={Sc06b_opportunity.opportunity_products_category}
            content={{
              name: `opportunity_products`,
              values: [screenContent.txt35[0]]
            }}
            handleTextChange={handleTextChange}
            showChildSelect={{
              show: true,
              contentSelect: screenContent.txt35
            }}
          /> */}

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
                  editable={true}
                  style={stl08}
                  placeholder={screenContent.txt38}
                  state={values}
                  setState={handleTextChange}
                  inputName={`unit_value_opportunity`}
                  mask={'currency'}
                  value={values[`unit_value_opportunity`]}
                  defaultValue={currencyMask(
                    Sc06b_opportunity.unit_value_opportunity,
                    true
                  )}
                />
              </View>
            </View>
            {/* QUANTIDADE */}
            <View>
              <Text style={stl11}>{screenContent.txt39}</Text>
              <View style={stl10}>
                <UseTextInput
                  style={stl08}
                  editable={false}
                  placeholder={screenContent.txt41}
                  state={values}
                  inputName={`amount_opportunity`}
                  setState={handleTextChange}
                  value={values[`amount_opportunity`]}
                  defaultValue={Sc06b_opportunity.amount_opportunity}
                />
                {values.add_opportunity &&
                  values[`unit_value_opportunity`] &&
                  !values[`amount_opportunity`] ? (
                    handleTextChange(1, `amount_opportunity`)
                  ) : (
                    <></>
                  )}
                {/* BOTÕES DE ACRESCENTAR E DIMINUIR VALOR */}
                <TouchableOpacity
                  onPress={() => {
                    handleTextChange(
                      values[`amount_opportunity`] &&
                        values[`amount_opportunity`] > 0
                        ? values[`amount_opportunity`] - 1
                        : 1,
                      `amount_opportunity`
                    );
                  }}
                >
                  <UseIcoMoon name="minus-circle" size={22} color={'#2A576B'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleTextChange(
                      values[`amount_opportunity`] &&
                        values[`amount_opportunity`] > 0
                        ? values[`amount_opportunity`] + 1
                        : 1,
                      `amount_opportunity`
                    );
                  }}
                  onLayout={() => {
                    // Setar automaticamente no estado do componente os valores para AMOUNT_OPPORTUNITY e UNIT_VALUE_OPPORTUNITY
                    handleTextChange(
                      Sc06b_opportunity.amount_opportunity,
                      'amount_opportunity'
                    );
                    handleTextChange(
                      currencyMask(
                        Sc06b_opportunity.unit_value_opportunity,
                        true
                      ),
                      'unit_value_opportunity'
                    );
                  }}
                >
                  <UseIcoMoon name="plus-circle" size={22} color={'#2A576B'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={stl11}>{screenContent.txt40}</Text>
          <Text style={stl12}>{`R$ ${
            values[`unit_value_opportunity`]
              ? values[`amount_opportunity`]
                ? currencyMask(
                  Number(values[`amount_opportunity`]) *
                  Number(values[`unit_value_opportunity`])
                )
                : values[`unit_value_opportunity`]
              : '0,00'
            }`}</Text>

          {/* OBSERVATION */}
          <UseTextInput
            style={stl09}
            placeholder={screenContent.txt42}
            multiline={true}
            numberOfLines={4}
            setState={handleTextChange}
            inputName={`observation`}
            state={values}
            defaultValue={
              Sc06b_opportunity.observation && Sc06b_opportunity.observation
            }
          />
          {/* DATE END */}
          <Text style={stl11}>{screenContent.txt44}</Text>
          <View style={stl10}>
            <UseCalendar
              inputName={`dateEndOpportunity`}
              inputStyle={stl08}
              state={values}
              setState={handleTextChange}
              calendarName={`opportunity_date_end_opportunity_calendar`}
              defaultValue={
                new Date(Sc06b_opportunity.dateEndOpportunity.seconds * 1000)
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
                name: `options_actions_opportunity`,
                values: screenContent.txt48
              }}
              handleTextChange={handleTextChange}
              defaultValue={Sc06b_opportunity.options_actions_opportunity}
            />
          </View>
        </View>
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
      <View style={stl01}>
        <UseButtonSubmit
          style={stl02}
          onPress={() => {
            callChangeManyRd({ Sc06: Sc06b_opportunity.user });
            callFbUpdateData({
              collection: 'opportunities',
              reducerName: 'updated_opportunities',
              offline: Sc06b_opportunity.offline,
              docId: Sc06b_opportunity.docId,
              dataToUpdate: {
                ...values,
                options_probabilidadeVenda_starred:
                  values.options_probabilidadeVenda_starred[0] === 'Estrela',
                total_amount_opportunity:
                  Number(values.unit_value_opportunity) *
                  Number(values.amount_opportunity)
              }
            });
          }}
          btnText={screenContent.txt12}
          btnTextStyle={stl02b}
          state={{
            ...values,
            options_probabilidadeVenda_starred:
              values &&
              values.options_probabilidadeVenda_starred &&
              values.options_probabilidadeVenda_starred[0]
          }}
          anyFieldsToEnableSubmit={[
            'amount_opportunity',
            'dateOpportunity',
            'options_probabilidadeVenda',
            'options_probabilidadeVenda_starred',
            'opportunity_products_category',
            'unit_value_opportunity',
            'dateEndOpportunity',
            'options_actions_opportunity',
            'observation'
          ]}
          requiredFields={[
            'amount_opportunity',
            'dateOpportunity',
            'options_probabilidadeVenda',
            'options_probabilidadeVenda_starred',
            'opportunity_products_category',
            'unit_value_opportunity',
            'dateEndOpportunity',
            'options_actions_opportunity',
            'observation'
          ]}
          stateToCompare={{
            ...Sc06b_opportunity,
            options_probabilidadeVenda_starred:
              Sc06b_opportunity &&
              Sc06b_opportunity.options_probabilidadeVenda_starred &&
              Sc06b_opportunity.options_probabilidadeVenda_starred[0]
          }}
          disableBtnStyle={{ backgroundColor: '#c9c9c9' }}
        />

        <TouchableOpacity
          style={stl03}
          onPress={() => {
            callChangeManyRd({ Sc06: Sc06b_opportunity.user });
            compProps.history.goBack();
          }}
        >
          <Text>{screenContent.txt13}</Text>
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
