// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useChangeRd,
  UseListItems,
  UseRedirect,
  useFbSetData
} from './useMorfos';

// ------------------------------
// #endregion

export default function Sc01B() {
  // #region [setLogic] Reducers
  // ------------------------------

  const { rdAuthUser } = useReducer();

  // set Hook
  const callChangeRd = useChangeRd();

  // ------------------------------
  // #endregion

  const REDIRECT = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]

      rdAuthUser ? <UseRedirect to={'splash'} /> : props.children

      // #endregion
    );
  };

  const _STYLE = props => {
    // #region [setLogic]
    // ------------------------------

    let backImage = require('../images/splash.jpg');

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.flexMaster}>
        <ImageBackground source={backImage} style={useStyle.boxContent}>
          <View style={useStyle.signInMaster}>{props.children}</View>
        </ImageBackground>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <REDIRECT>
      <_STYLE>
        <LINKSIGNIN />

        <ADDUSER />

        <USERSLIST />
      </_STYLE>
    </REDIRECT>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const LINKSIGNIN = () => {
    // #region [noSetlogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UseLink to="/signin">
        <Text style={useStyle.blackLink}>Back to Sign In</Text>
      </UseLink>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const ADDUSER = () => {
    // #region [setLogic]
    // ------------------------------

    // set Hook
    const callSetUser = useFbSetData();

    let userNumber = '4';

    // set Call
    let userToSet = {
      createdAt: new Date(),
      userName: 'Morfos 0' + userNumber,
      docId: 'xxx' + userNumber,
      jumpSplashScreen: false,
      totalHugs: 20,
      totalLikes: 10,
      totalDislikes: 1,
      userAvatar:
        'https://firebasestorage.googleapis.com/v0/b/huguapp-43f57.appspot.com/o/avatar01.png?alt=media&token=d9511ebd-adc4-4d6c-87d1-df9952062beb',
      userBg:
        'https://firebasestorage.googleapis.com/v0/b/huguapp-43f57.appspot.com/o/bgs%2Fbgs09.jpg?alt=media&token=13538000-1e82-4d6b-b05b-776077e9c589',
      userImage:
        'https://lh4.googleusercontent.com/-6GCcxKSeSKU/AAAAAAAAAAI/AAAAAAAAABs/DTkJFWprqwo/photo.jpg',
      userSignins: new Date()
    };

    let infoSetName = {
      collection: 'users',
      docId: 'xxx' + userNumber,
      reducerName: 'rdAllUsers',
      dataToSet: userToSet
    };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <Text style={{ margin: 10, textAlign: 'center' }}>
          ANTES de ADICIONAR -> Indique no código o novo número do user
        </Text>
        <TouchableOpacity
          onPress={() => callSetUser(infoSetName)}
          style={[useStyle.btnPrimary, useStyle.bgFacebook, useStyle.btLarge]}
        >
          <Text style={useStyle.txWhite}>Add User {userNumber}</Text>
        </TouchableOpacity>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // #region [setLogic] TOPLEVEL
  // ------------------------------

  // set List Call
  let infoUsers = {
    collection: 'users',
    reducerName: 'rdAllUsers',
    noItem: <Text>Sem Itens</Text>
  };

  // set Hook
  const [UsersList] = UseListItems(infoUsers);

  // ------------------------------
  // #endregion

  const USERSLIST = () => {
    // #region [setLogic]
    // ------------------------------

    // set Call
    let handleAuth = item => {
      let infoAuth = {
        reducerName: 'rdAuthUser',
        value: item
      };

      callChangeRd(infoAuth);
    };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UsersList
        renderProps={({ item, id }) => (
          <TouchableOpacity
            key={id}
            onPress={() => handleAuth(item)}
            style={[useStyle.btnPrimary, useStyle.bgGoogle, useStyle.btLarge]}
          >
            <Text>{item.userName}</Text>
          </TouchableOpacity>
        )}
      />

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
