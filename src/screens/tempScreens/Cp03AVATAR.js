// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  UseGallery,
  useChangeRd,
  useFbUpdateData
} from './useMorfos';

// ------------------------------
// #endregion

export default function Cp03({ history }) {
  // #region [setLogic] & Reducers
  // ------------------------------

  const { rdAuthUser, rdContent } = useReducer();
  const screenContent = rdContent[9];

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

      <View style={[useStyle.flexMaster, useStyle.lightPage]}>
        <View style={useStyle.yellowBar} />
        <ScrollView style={useStyle.scrollView}>
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
      <TITLE />

      <GALLERY />

      <BUTTON />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const TITLE = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <Text style={[useStyle.txts, useStyle.txCenter, useStyle.mgB20]}>
        {screenContent.txt01}
      </Text>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const GALLERY = () => {
    // #region [setLogic]
    // ------------------------------

    // set Hooks
    const callUpdateAvatar = useFbUpdateData();
    const changeRdAuthUser = useChangeRd();

    const changeImg = info => {
      // Update Data
      // ------------------------------

      // prepare Data (fb update do not remove other fields)
      let infoDataToUpdate = {
        userAvatar: info
      };
      // set Call
      let infoUpdateAvatar = {
        collection: 'users',
        docId: rdAuthUser.docId,
        dataToUpdate: infoDataToUpdate
      };
      // function Call
      callUpdateAvatar(infoUpdateAvatar);

      // Use Change Reducer
      // ------------------------------

      // set Call
      let infoChangeRdAuthUser = {
        reducerName: 'rdAuthUser',
        value: { ...rdAuthUser, userAvatar: info }
      };
      // function Call
      changeRdAuthUser(infoChangeRdAuthUser);

      // Change screen
      // ------------------------------

      // function Call
      history.push('/myprofile');
    };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UseGallery
        linkTo={'myprofile'}
        styleImg={useStyle.galleryImg}
        function={changeImg}
        data={screenContent.imgs}
      />

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BUTTON = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.btsWrite}>
        {/* <TouchableOpacity
            style={[useStyle.btnPrimary, useStyle.btMedium, useStyle.bgBlack]}
          >
            <Text style={useStyle.txWhite}>{screenContent.txt02}</Text>
          </TouchableOpacity> */}
        <UseLink to={'/myprofile'}>
          <View
            style={[
              useStyle.btnSecondary,
              useStyle.btMedium,
              useStyle.bgGoogle
            ]}
          >
            <Text>{screenContent.txt03}</Text>
          </View>
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
