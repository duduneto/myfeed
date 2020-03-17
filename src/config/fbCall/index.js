import { firestore, fb } from '../common/fbConfig';
import { authGoogle, authFacebook, authSignOut, authWithEmailAndPassword } from '../platforms/authSocial';
// import { useChangeRd } from '../../screens/useMorfos';
// Seria interessante esse arquivo conseguir visualizar o estado do app.

firestore.settings({
  cacheSizeBytes: fb.firestore.CACHE_SIZE_UNLIMITED
});
firestore.enablePersistence()
.catch(err => {
  console.log(err)
})
// fb.firestore().disableNetwork()
//     .then(function() {
//         // Do offline actions
//         // ...
//     });

/********************************
 *********************** SET DATA
 ********************************/

export const setData = info => {
  return firestore
    .collection(info.collection)
    .doc(info.docId)
    .set(info.dataToSet)
    .then(() => info.dataToReducer);
};

/********************************
 ******************** UPDATE DATA
 ********************************/

export const updateData = info => {
  console.log(info)
  if(info.offline){
    firestore
    .collection(info.collection)
    .doc(info.docId)
    .update(info.dataToUpdate)
    return info.dataToReducer
  }else{
    return firestore
      .collection(info.collection)
      .doc(info.docId)
      .update(info.dataToUpdate)
      .then(() => info.dataToReducer);
  }
};

/*********************************************************
 ******************** UPDATE INCREASE/DECREASE FIELD DATA
 *********************************************************/

export const updateFieldData = async (info) => {
  console.log(info)
  let reducerData;
  const dbRef = await firestore.collection(info.collection).doc(info.docId);
  const docInfo = await dbRef.get().then((res) => res.data());
  console.log(docInfo)
  info.dataToUpdate.map(async (field) => {
    if (field) {
      const valueField = docInfo[field.nameField] ? Number(docInfo[field.nameField]) + Number(1 * field.value * field.operation) : Number(1 * field.value * field.operation);
      await dbRef.update({ [field.nameField]: valueField });
    }
  })
  return reducerData
};

/********************************
 *********************** ADD DATA
 ********************************/

/// Firestore adds a new doc with an ID AUTO GENERATED ///
//
export const addData = info => {
  console.log(info)
  let dbRef = firestore.collection(info.collection).doc();
  dbRef.set({...info.dataToAdd, docId: dbRef.id});
  return {...info.dataToAdd, docId: dbRef.id}
};

/********************************************
 *********************** ADD AND BIND DATAS
 ********************************************/

/// Firestore adds a new doc with an ID AUTO GENERATED ///
//
export const addAndBindData = async (info) => {
  console.log(info)
  if(info.data1.offline){
    let dbRef1 = firestore.collection(info.data1.collection).doc();
    dbRef1.set({...info.data1.dataToAdd, docId: dbRef1.id});

    let dbRef2 = info.data2 && firestore.collection(info.data2.collection).doc();
    info.data2 && dbRef2.set({...info.data2.dataToAdd, docId: dbRef2.id, [info.data2.refFieldName]: dbRef1.id});

    let dbRef3 = info.data3 && firestore.collection(info.data3.collection).doc();
    info.data3 && dbRef3.set({...info.data3.dataToAdd, docId: dbRef3.id, [info.data3.refFieldName]: dbRef2.id });

    return ({
      data1: info.data1 && {...info.data1.dataToAdd, docId: dbRef1.id}, 
      data2: info.data2 && {...info.data2.dataToAdd, docId: dbRef2.id, [info.data2.refFieldName]: dbRef1.id}, 
      data3: info.data3 && {...info.data3.dataToAdd, docId: dbRef3.id, [info.data3.refFieldName]: dbRef2.id }
    })
  }else{
    let dbRef1 = firestore.collection(info.data1.collection);
    const data1_info = info.data1 && await dbRef1.add(info.data1.dataToAdd)
      .then(async (res) => {
        console.log(res)
        await dbRef1.doc(res.id).update({docId: res.id})
        return {
          docId: res.id,
          dataToReducer: {
            ...info.data1.dataToAdd,
            docId: res.id
          }
        };
      });
    const data2_info = info.data2 && await firestore.collection(info.data2.collection).add({ ...info.data2.dataToAdd, [info.data2.refFieldName]: data1_info.docId })
      .then(async (res) => {
        console.log(res)
        await firestore.collection(info.data2.collection).doc(res.id).update({docId: res.id})
        return {
          docId: res.id,
          dataToReducer: {
            ...info.data2.dataToAdd,
            docId: res.id
          }
        };
      });
    const data3_info = info.data3 && await firestore.collection(info.data3.collection).add({ ...info.data3.dataToAdd, [info.data3.refFieldName]: data1_info.docId })
      .then(async (res) => {
        console.log(res)
        await firestore.collection(info.data3.collection).doc(res.id).update({docId: res.id})
        return {
          docId: res.id,
          dataToReducer: {
            ...info.data3.dataToAdd,
            docId: res.id
          }
        };
      });
      console.log({ data1: data1_info && data1_info, data2: data2_info && data2_info, data3: data3_info && data3_info })
    return { data1: data1_info && data1_info, data2: data2_info && data2_info, data3: data3_info && data3_info }
  }
};

/*********************************
 ************************* GET DOC
 *********************************/

export const getDoc = info => {
  let db = firestore.collection(info.collection);
  // console.log('* TCL * * *: db', db)

  return db
    .doc(info.docId)
    .get()
    .then(res => res.data());
};


/********************************
 *********************** GET LIST
 ********************************/

export const getList = async info => {
  // console.log('| info | getList => info: ', info);
  
  let db = firestore.collection(info.collection);
  // prettier-ignore
  if (info) {
    if (info.where1) db = db.where(info.where1.field, info.where1.type, info.where1.value);
    if (info.where2) db = db.where(info.where2.field, info.where2.type, info.where2.value);
    if (info.order1) db = db.orderBy(info.order1.field, info.order1.type);
    if (info.order2) db = db.orderBy(info.order2.field, info.order2.type);
    if (info.limit) db = db.limit(info.limit);
  }

  const callDb = await db.get();
  let arr = [];
  callDb.forEach(doc => arr.push({...doc.data(), offline: callDb.metadata.fromCache}));
  
  // only if the merge user is called
  if (info.mergeUser === true) {
    let dbUser = firestore.collection(info.mergeUserFbCollection ? info.mergeUserFbCollection : 'users');
    
    // make a array of async calls
    const promises = arr.map(async item => {
      let userId = info.mergeUserField ? item[info.mergeUserField] : item.userId;
      const callDbUser = await dbUser.doc(userId).get();
      let user = callDbUser.data();
      item.user = user;
    });
    
    // await a array of async calls
    await Promise.all(promises);
  }
  
  // Demora mais e traz da mesma forma o resultado
  // for (let item of arr) {}
  
  return arr;
};

/****************************************
 ************************* GET MANY DOCS
 ****************************************/

export const getManyList = async (info) => {

  const awaitLoop = async (_info) => {
    let query = {};
    const promises = _info.map( async (param) => {
      let queryParam = await getList(param);
      query[param.collection] = queryParam;
    })
    await Promise.all(promises);
    return query;
  }
  return await awaitLoop(info);
};

/****************************************
 ************************* DELETE DOC
 ****************************************/

export const deleteDoc = async (info) => {

  return await firestore.collection(info.collection).doc(info.docId).delete().then(res => {
    if(info.dataToCustom){
      return info.dataToCustom
    }
  })
};

/********************************
 *********************** AUTH ALL
 ********************************/

export const authAll = async(par) => {
  console.log(par)
  const opt = par.opt;
  switch (opt) {
    case 'Google':
      return authGoogle().then(res => {
        return authFirebase(res);
      });

    case 'Facebook':
      return authFacebook().then(res => {
        return authFirebase(res);
      });
    
      case 'EmailAndPassword':
      return await authWithEmailAndPassword(par.info).then(res => {
        return res;
      });

    // case 'SignOut':
    //   return authSignOut().then(res => {
    //     let authUser = null;
    //     return authUser;
    //   });

    // case 'Email':
    //   return;

    default:
      return;
  }
};

// Prepare Collection
const dbUsers = firestore.collection('users');

const authFirebase = async info => {
  // try { } catch ({}) {}

  console.log('* TCL * * *: authFirebase -> info', info);

  if (!info.cancel) {
    let { userImage, userEmail, userName, socialData } = info;

    let authUser = {
      userImage,
      userEmail,
      userName
    };

    let addData = {
      createdAt: new Date(),
      ...socialData,
      ...authUser
    };

    return getDocUserData(userEmail).then(docUserData => {
      //
      if (docUserData) {
        authUser.jumpSplashScreen = docUserData.jumpSplashScreen;

        let docId = docUserData.id;
        authUser.docId = docId;

        let userSignins = docUserData.userSignins
          ? docUserData.userSignins
          : [];
        userSignins.push(new Date());

        dbUsers.doc(docId).update({ userSignins });
        //
      } else {
        authUser.jumpSplashScreen = false;

        // add userSigns but keep authUser without it
        addData = { userSignins: [new Date()], ...addData, ...authUser };

        dbUsers.add(addData).then(res => {
          let docId = res.id;
          dbUsers.doc(docId).update({ docId: docId });
          authUser.docId = docId;
        });
        //
      }

      // console.log('| info | authFirebase => authUser:', authUser);
      return authUser;
    });
  }
};

const getDocUserData = userEmail => {
  // console.log('| info | getDocUserData => docUserData: ', docUserData);

  return dbUsers
    .where('userEmail', '==', userEmail)
    .get()
    .then(snap => {
      let docUserData;
      snap.forEach(
        // doc => (docId = doc.id),
        doc =>
          (docUserData = {
            id: doc.id,
            ...doc.data()
          })
      );

      return docUserData;
    });
};

/************************************
 *********************** FB FUNCTIONS
 ************************************/

export const fbFunctions = info => {
  // console.log(info);
  const fetchBody = JSON.stringify({ ...info });
  return fetch(
    `https://us-central1-huguapp-43f57.cloudfunctions.net/${info.funcName}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: fetchBody
    }
  )
    .then(async resp => {
      let data = await resp.json();
      return data;
    })
    .catch(err => {
      return false;
    });
};
