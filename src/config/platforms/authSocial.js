// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import firebase from 'react-native-firebase';
import * as Facebook from 'expo-facebook';
import * as GoogleSignIn from 'expo-google-sign-in';

// import Internals
import { expo } from '../../app.json';

// ------------------------------
// #endregion

export const authSignOut = () => {
  // #region [useMorfos]
  // ------------------------------

  return firebase.auth().signOut();

  // ------------------------------
  // #endregion
};

// ------------------------------

export const authFacebook = async () => {
  // #region [useMorfos]
  // ------------------------------

  // try { } catch ({}) {}

  try {
    let appId = expo.facebookAppId;

    // make expo async call
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      appId,
      {
        permissions: ['public_profile', 'email']
      }
    );

    // use expo call
    if (type === 'success') {
      // set credential
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // call firebase auth
      return firebase
        .auth()
        .signInWithCredential(credential)
        .then(currentUser => {
          let userData = currentUser.user.providerData[0];

          let socialData = {
            facebookToken: data.token,
            facebookProvider: userData.providerId,
            facebookUserId: userData.uid
          };
          let infoSignIn = {
            ...socialData,
            userImage: userData.photoURL,
            userEmail: userData.email,
            userName: userData.displayName
          };

          return infoSignIn;
        });
    } else if (type === 'cancel') {
      // set cancel msg
      let infoCancel = { cancel: 'Facebook Cancelled' };

      return infoCancel;
    }
  } catch ({ message }) {
    // set error msg
    let infoError = { error: `Facebook Login Error: ${message}` };

    return infoError;
  }

  // ------------------------------
  // #endregion
};

// ------------------------------

export const authGoogle = () => {
  // #region [useMorfos]
  // ------------------------------

  return GoogleSignIn.signInAsync().then(data => {
    // console.log("|info| data", data);

    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.user.auth.idToken,
      data.user.auth.accessToken
    );

    return firebase
      .auth()
      .signInWithCredential(credential)
      .then(currentUser => {
        // console.log("|info| currentUser: ", currentUser);

        let socialData = {
          googleToken: credential.token,
          googleProvider: credential.providerId,
          googleUserId: data.user.id
        };
        let infoSignIn = {
          socialData,
          userImage: data.user.photoURL,
          userEmail: data.user.email,
          userName: data.user.displayName
        };
        return infoSignIn;
      });
  });

  // ------------------------------
  // #endregion
};
