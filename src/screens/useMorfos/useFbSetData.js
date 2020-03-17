// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { asyncCall } from '../../config/redux/asyncCall';

// import Internals
import { useReducer } from '.';

// ------------------------------
// #endregion

// Create a new Doc with a provided Id
export default function useFbSetData() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(asyncCall(res));

  // set reducer
  const dynamicRd = useReducer();

  // set Action
  const callSetNameData = info => {
    let arr = dynamicRd[info.reducerName];
    arr.push(info.dataToSet);
    // set Call
    let infoCall = {
      callName: 'setData',
      reducerName: info.reducerName,
      par: {
        collection: info.collection,
        docId: info.docId,
        dataToSet: info.dataToSet,
        dataToReducer: arr
      }
    };

    return callAsync(infoCall);
  };

  // send Result
  return callSetNameData;

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  // set Hooks
  const callFbSetData = useFbSetData();

  // #region [setLogic]
  // ------------------------------
  
  // set Call
  let infoEmailData = {
    collection: 'users',
    reducerName: 'rdAuthUser'
    docId: rdAuthUser.docId,
    dataToSet: { email: 'new@morfos.io', }
  };
    
  // function Call
  // callFbSetData(infoEmailData)

  // ------ or ------
  
  // button Call
  // <TouchableOpacity onPress={() => callFbSetData(infoEmailData)}> 
  // </ TouchableOpacity>
  
  // ------------------------------
  // #endregion

*/
