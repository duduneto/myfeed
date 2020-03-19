// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useChangeRd,
  UseRedirect,
  UseTextInput,
  useForm,
  useAuth,
  useListRd
} from './useMorfos';

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const { rdAuthUser, rdContent, rdMenuSelect } = useReducer();
  // const screenContent = rdContent[0];
  const callListRd = useListRd();
  const callChangeRd = useChangeRd();

  // rdAuthUser &&
  //   rdAuthUser.length > 0 &&
  //   callChangeRd({
  //     reducerName: 'rdAuthUser',
  //     value: { ...rdAuthUser[0], logged: true }
  //   });
  // rdAuthUser && rdAuthUser.logged && compProps.history.push('/menus');
  compProps.history.push('/menus')
  // ------------------------------
  // #endregion

  // #region [allStyles]
  // ------------------------------

  // _STYLE
  // let stl = [useStyle.xxx,];
  let stlView01 = [useStyle.flexMaster];
  let stlView02 = [useStyle.pad20, useStyle.flex1];

  // BRAND
  let srcBgImage = require('../images/splash.png');
  let srcImg01 = require('../images/logo.png');

  let stlView03 = [useStyle.flex1, useStyle.brandBox];
  let stlImg01 = [useStyle.logo];

  let stlView04 = [useStyle.flex1, useStyle.flexCenter];
  let stlTxt01 = [useStyle.txBase, { color: '#ebebeb', margin: 10 }];
  let stlTxt02 = stlTxt01;

  // BUTTONS
  let stlBtn01 = [useStyle.btnPrimary, useStyle.btnLarge];
  let stlTxt03 = [useStyle.txInverseColor];

  // INPUTS
  let stlInput = [
    useStyle.input,
    {
      marginBottom: 20,
      backgroundColor: 'rgba(255,255,255,.8)',
      outline: 'none',
      width: 200,
      borderRadius: 100,
      paddingVertical: 12,
      paddingHorizontal: 20
    }
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

      <ImageBackground style={stlView01} source={srcBgImage}>
        <View style={stlView02}>
          {/*  */}

          {props.children}

          {/*  */}
        </View>
      </ImageBackground>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    /* Para ativar o signin suba ESSA LINHA acima do Redirect.
    <UseRedirect to={'/dealsList'} />

    /* */

    <_STYLE>
      <FORM
        renderProps={({ values, handleTextChange }) => (
          <>
            <BRAND />
            <BUTTONS handleTextChange={handleTextChange} values={values} />
          </>
        )}
      />
    </_STYLE>

    /* */

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
    const { values, handleTextChange } = useForm();
    // ------------------------------

    // ------------------------------

    // #endregion
    return props.renderProps({ values, handleTextChange });
  };

  //_______________________________

  const BRAND = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView03}>
        <Image source={srcImg01} resizeMode={'cover'} style={stlImg01} />
        {/* <Text style={stlTxt01}>{screenContent.txt01}</Text> */}
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BUTTONS = props => {
    // #region [setLogic]
    // ------------------------------
    const { values, handleTextChange } = props;
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlView04}>
        <UseTextInput
          secureTextEntry={true}
          style={stlInput}
          placeholder={'Senha'}
          inputName={'password_login'}
          setState={handleTextChange}
        />
        <TouchableOpacity
          style={stlBtn01}
          onPress={() => {
            // signinWithEmailAndPassword(values)
            callListRd({
              collection: 'user',
              reducerName: 'rdAuthUser',
              // filter
              where1: {
                field: 'password',
                type: '==',
                value: values.password_login
              }
            });
          }}
        >
          {/* <Text style={stlTxt03}>{screenContent.txt03}</Text> */}
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
