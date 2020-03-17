// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { asyncCall } from '../../config/redux/asyncCall';

// import Internals
import { useChangeRd } from '.';

// ------------------------------
// #endregion

export default function useAuth() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(asyncCall(res));

  // set action
  const infoAuth = { callName: 'authAll', reducerName: 'rdAuthUser' };

  /********************************
   ***************** SIGN IN GOOGLE
   ********************************/

  let infoGoogle = { ...infoAuth, par: {opt: 'Google'} };
  const signinGoogle = () => callAsync(infoGoogle);

  /********************************
   *************** SIGN IN FACEBOOK
   ********************************/

  let infoFacebook = { ...infoAuth, par: {opt: 'Facebook'} };
  const signinFacebook = () => callAsync(infoFacebook);

  /********************************
   ********** WITH/CREDENTIALS AUTH
   ********************************/
  let loginEmailAndPassword = { ...infoAuth, par: {opt: 'EmailAndPassword'} };
  const signinWithEmailAndPassword = (info) => callAsync({...loginEmailAndPassword, par: {...loginEmailAndPassword.par, info: info}});

  /********************************
   *********************** SIGN OUT
   ********************************/

  let changeRdAuthUser = useChangeRd();
  let infoChangeRdAuthUser = { reducerName: 'rdAuthUser', value: null };
  const signOut = () => changeRdAuthUser(infoChangeRdAuthUser);

  // (Signout using Firebase Auth)
  // let infoSignOut = { ...infoAuth, par: 'SignOut' };
  // let signOut = () => callAsync(infoSignOut);

  /********************************
   ************************ RETURNS
   ********************************/

  return { signinGoogle, signinFacebook, signOut, signinWithEmailAndPassword };

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  // #region [setLogic]
  // ------------------------------

  // set Hook
  const { signOut } = useAuth();

  // Called by an event
  // <TouchableOpacity onPress={signOut}>
  // </TouchableOpacity>

  // ------------------------------
  #endregion

*/
