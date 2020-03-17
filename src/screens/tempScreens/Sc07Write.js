// #region [setImports]
// ------------------------------

// import Packages
import React, { useState } from 'react';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useToggle,
  useFbAddData,
  useFormApp
} from './useMorfos';

// ------------------------------
// #endregion

export default function Sc07({ history }) {
  // #region [setLogic] & Reducers
  // ------------------------------

  const { rdAuthUser, rdContent } = useReducer();
  const screenContent = rdContent[4];

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

      <View style={useStyle.flexMaster}>
        <View style={useStyle.yellowBar} />
        <ScrollView>
          <View style={useStyle.pad20}>
            <View style={useStyle.card}>
              {/*  */}
              {props.children}
              {/*  */}
            </View>
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
      <USEFORM
        renderProps={({ values, handleTextChange }) => (
          <>
            <INPUTS values={values} handleTextChange={handleTextChange} />
            <BUTTONS values={values} />
          </>
        )}
      />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const USEFORM = props => {
    // #region [setLogic]
    // ------------------------------

    // --- Use Form APP
    // ------------------------------

    // set Hook
    const { values, handleTextChange } = useFormApp();

    // ------------------------------
    // #endregion

    return props.renderProps({ values, handleTextChange });
  };

  //_______________________________

  const INPUTS = props => {
    // #region [setLogic]
    // ------------------------------

    // set Props
    let { values, handleTextChange } = props;

    // set Conditions
    let titleText =
      (values.title ? values.title.length : '0') + ' - ' + screenContent.txt06;
    let descriptionText =
      (values.description ? values.description.length : '0') +
      ' - ' +
      screenContent.txt03;

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <>
        <Text style={[useStyle.txts, useStyle.txCenter, useStyle.mgB20]}>
          {screenContent.txt01}
        </Text>
        <TextInput
          value={values.title}
          onChangeText={txt => handleTextChange(txt, 'title')}
          //
          style={[useStyle.input, { marginBottom: 10 }]}
          placeholder={screenContent.txt02A}
          placeholderTextColor="#999"
        />
        <Text
          style={[
            useStyle.tx12,
            useStyle.txGrey,
            useStyle.txRight,
            { marginBottom: 10 }
          ]}
        >
          {titleText}
        </Text>

        <TextInput
          value={values.description}
          onChangeText={txt => handleTextChange(txt, 'description')}
          //
          style={useStyle.textArea}
          multiline={true}
          numberOfLines={9}
          placeholder={screenContent.txt02B}
          placeholderTextColor="#999"
        />
        <Text style={[useStyle.tx12, useStyle.txGrey, useStyle.txRight]}>
          {descriptionText}
        </Text>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BUTTONS = props => {
    // #region [setLogic]
    // ------------------------------

    // set props
    let { values } = props;

    // set toggle
    let [validation, toggleValidation] = useToggle(false);

    // --- Use Add Data
    // ------------------------------

    // set Hook
    const callAddPost = useFbAddData();

    // set states to reducer and add on firestore
    let infoSubmit = () => {
      if (
        values.description &&
        values.description.length >= 400 &&
        values.title
      ) {
        // set Call
        let infoAddPost = {
          collection: 'posts',
          reducerName: 'rdAddPost',
          dataToAdd: {
            createdAt: new Date(),
            userId: rdAuthUser.docId,
            title: values.title,
            xDescription: values.description
          }
        };

        callAddPost(infoAddPost);

        history.push('/feed');
      } else {
        toggleValidation();
      }
    };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.btsWrite}>
        {validation && (
          <Text
            style={[
              useStyle.alertMsg,
              useStyle.txMediumGrey,
              { textAlign: 'center' }
            ]}
          >
            Adicione um título com pelo menos 20 caracteres e um texto com pelo
            menos 400 caracteres
          </Text>
        )}
        <TouchableOpacity
          onPress={infoSubmit}
          style={[useStyle.btnPrimary, useStyle.btMedium, useStyle.bgBlack]}
        >
          <Text style={useStyle.txWhite}>{screenContent.txt04}</Text>
        </TouchableOpacity>
        <UseLink
          to={'/feed'}
          style={[useStyle.btnSecondary, useStyle.btMedium, useStyle.bgGoogle]}
        >
          <Text>{screenContent.txt05}</Text>
        </UseLink>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
