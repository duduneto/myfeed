// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { syncCall } from '../../config/redux/syncCall';

// ------------------------------
// #endregion

export default function useChangeRd() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callSync = res => dispatch(syncCall(res));

  // set action
  const changeRdName = info =>
    callSync({
      reducerName: info.reducerName,
      value: info.value
    });

  return changeRdName;

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****
 
  // set Hooks
  const callChangeRd = useChangeRd();

  // #region [setLogic]
  // ------------------------------
  
    // --- Use Change Reducer
    // ------------------------------

    // set Call
    let infoSelectedProfile = { 
      reducerName: 'rdSelectedProfile', 
      value: 'dark' 
    }

    // function Call
    // callChangeRd(infoSelectedProfile);

    // ------ or ------

    // button Call
    // <TouchableOpacity 
    // onPress={() => callChangeRd(infoSelectedProfile)}
    // >
    // </TouchableOpacity>

    // component Call (TOPLEVEL)
    // useEffect(() => {
    //   callChangeRd(infoSelectedProfile);
    // }, []);

  // ------------------------------
  #endregion

*/
