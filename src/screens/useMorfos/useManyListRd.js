// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { asyncCall } from '../../config/redux/asyncCall';

// ------------------------------
// #endregion

export default function useManyListRd() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(asyncCall(res));

  // set Action
  const callListName = (reducerName,firestoreParamsArray) => {

    let infoCall = {
      callName: 'getManyList',
      reducerName: reducerName,
      par: firestoreParamsArray
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
  const callUseManyListRd = useManyListRd();

  // #region [setLogic]
  // ------------------------------

    // --- Use List Reducer
    // ------------------------------

    // set Call
    let infoRatesList = {
      collection: 'rates',
      reducerName: 'rdListUserRates',
      // filter
      where1: {
        field: 'rattingUserId',
        type: '==',
        value: rdAuthUser.docId
      },
    };

    // component Call (TOPLEVEL)
    // useEffect(() => {
    //   callUseListRd(infoRatesList);
    // }, []);

    // ------ or ------

    // button Call
    // <TouchableOpacity
    // onPress={() => callUseListRd(infoRatesList)}
    // >
    // </TouchableOpacity>

  // ------------------------------
  // #endregion

*/
