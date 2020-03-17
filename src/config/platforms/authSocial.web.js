import firebase from './firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const authSignOut = () => {
  return firebase
    .auth()
    .signOut()
};

export const authWithEmailAndPassword = async (info) => {
  console.log(info)
  return await firebase.auth().signInWithEmailAndPassword(info.email_login,info.password_login).then((resp) => {
    console.log(resp);
    return resp.user.uid
  })
  .catch((err) => err)
}

export const authGoogle = () => {
  return firebase.auth().signInWithPopup(googleProvider);
};

export const authFacebook = () => {
  return firebase.auth().signInWithPopup(facebookProvider);
};
/* */
