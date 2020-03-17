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
export default function useFbCustomData() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(asyncCall(res));

  // set reducer
  // const dynamicRd = useReducer();

  // set Action
  const callCustomData = info => {
    // set Call
    let infoCall = {
      callName: info.callName,
      reducerName: info.reducerName,
      par: {
        changeLocalidade: info.changeLocalidade,
        oldLocalidade: info.oldLocalidade,
        oldUf: info.oldUf,
        collection: info.collection,
        docId: info.docId,
        dataToCustom: info.dataToCustom,
      }
    };

    return callAsync(infoCall);
  };

  // send Result
  return callCustomData;

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  // set Hooks
  const callFbCustomData = useFbCustomData();

  // #region [setLogic]
  // ------------------------------

  // set Call
  let infoEmailData = {
    callName: 'increaseFieldDoc',
    collection: 'products',
    docId: order.productId,
    reducerName: '_Sc07b_',
    dataToCustom:{
    fieldToIncrease: 'amountProd',
    valueToIncrease: order.amoutOrder
    }
    };

  // function Call
  // callFbCustomData();

  // ------ or ------

  // button Call
  // <TouchableOpacity onPress={() => callFbCustomData(infoEmailData)}>
  // </ TouchableOpacity>

  // ------------------------------
  // #endregion

*/
