// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { asyncCall } from '../../config/redux/asyncCall';

// ------------------------------
// #endregion

export default function useDocRd() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(asyncCall(res));

  // set Action
  const callListName = info => {
    // set Call
    let infoCall = {
      callName: 'getDoc',
      reducerName: info.reducerName,
      par: {
        collection: info.collection,
        docId: info.docId
      }
    };

    return callAsync(infoCall);
  };

  // send Result
  return callListName;

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  // set Hooks
  const callDocRd = useDocRd();

  // #region [setLogic]
  // ------------------------------
  
    // --- Use Doc Reducer
    // ------------------------------

    // set Call
    let infoUserId = {
      collection: 'users',
      docId: rdSelectedPost.userId,
      reducerName: 'rdPostOwner' 
    };

    // function Call
    // callDocRd(infoUserId);

    // ------ or ------

    // component Call (TOPLEVEL)
    // useEffect(() => {
    //   callDocRd(infoUserId);
    // }, []);

    // button Call
    // <TouchableOpacity 
    // onPress={() => callDocRd(infoUserId)}
    // > 
    // </TouchableOpacity>

  // ------------------------------
  // #endregion

*/
