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
    rdContent,
    Sc06c_activity,
    updateDataPending,
    updateDataError,
    Sc05b_activities,
  } = useReducer();
  const screenContent = rdContent[4];
  const callChangeManyRd = useChangeManyRd();
  const callFbUpdateData = useFbUpdateData();

  useEffect(() => {
    callChangeManyRd({
      Cp01: 'Editar Atividade',
      Sc06c_activity: Sc06c_activity && {
        ...Sc06c_activity,
        options_probabilidadeVenda_starred: Sc06c_activity.options_probabilidadeVenda_starred ? ['Estrela'] : ['']
      }
    })
    return (() => {
      callChangeManyRd({
        updateDataError: null,
        updateDataPending: null,
        Sc06c_activity: null,
        Sc06_selected_activity: Sc06c_activity,
        Sc06: Sc06c_activity.user,
      })
    })
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
              {
                updateDataPending === true && updateDataError === null
                  ? <UseLoader />
                  : updateDataPending === false && updateDataError === null
                    ? compProps.history.push('/activityProfile')
                    : Sc06c_activity &&
                    <>
                      <ACTIVITY
                        activity={Sc06c_activity}
                        values={values}
                        handleTextChange={handleTextChange}
                        setAllValues={setAllValues}
                      />
                      <BUTTONS values={values} handleTextChange={handleTextChange} />
                    </>
              }

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

  const ACTIVITY = props => {
    // #region [setLogic]
    // ------------------------------

    // set Props
    let { values, handleTextChange, activity } = props;
    // ------------------------------
    // #endregion

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
      useStyle.mgB20,
      { flexDirection: 'row', flexWrap: 'wrap', flex: 1 }
    ];
    let stl10 = [useStyle.input];

    // ------------------------------
    // #endregion

    console.log(values);
    console.log(Sc06c_activity);
    return (
      // #region [component]
      // ------------------------------
      <>
        {activity && (
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
                  defaultValue={new Date(Sc06c_activity.dateActivity.seconds * 1000)}
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
                defaultValue={Sc06c_activity.options_contato}
              />

              <UseTextInput
                style={stl10}
                placeholder={screenContent.txt09}
                multiline={true}
                numberOfLines={4}
                setState={handleTextChange}
                inputName={`obs_activity`}
                state={values}
                defaultValue={Sc06c_activity.obs_activity && Sc06c_activity.obs_activity}
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
    console.log(Sc06c_activity)
    return (
      // #region [component]
      // ------------------------------
      <View style={stl01}>
        <UseButtonSubmit
          style={stl02}
          onPress={() => {
            // Setando Usuário para a tela Sc06
            callChangeManyRd({Sc06: Sc06c_activity.user})
            // O dateToUpdate está sendo colocado manualmente pois se dar um spread no values, ele vai subir a variavel que manipula o calendário.
            // Em dataToUpdate, está sendo feita a verificação se existe o values.dateActivity pois o mesmo não é setado automaticamente no estado do componente, caso não tenha sido alterado.
            callFbUpdateData({
              collection: 'activities',
              reducerName: 'updated_activities',
              docId: Sc06c_activity.docId,
              offline: Sc06c_activity.offline,
              dataToUpdate: { 
                dateActivity: values.dateActivity ? values.dateActivity : Sc06c_activity.dateActivity,
                options_contato: values.options_contato,
                obs_activity: values.obs_activity
               }
            })
          }}
          btnText={screenContent.txt12}
          btnTextStyle={stl02b}
          state={values}
          anyFieldsToEnableSubmit={[
            'dateActivity',
            'options_contato',
            'obs_activity'
          ]}
          requiredFields={[
            'dateActivity',
            'options_contato',
            'obs_activity'
          ]}
          stateToCompare={Sc06c_activity}
          disableBtnStyle={{ backgroundColor: '#c9c9c9' }}
        />

        <TouchableOpacity
          style={stl03}
          onPress={() => {
            callChangeManyRd({Sc06: Sc06c_activity.user})
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
