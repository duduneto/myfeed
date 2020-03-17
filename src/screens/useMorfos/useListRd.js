// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { asyncCall } from '../../config/redux/asyncCall';

// ------------------------------
// #endregion

export default function useListRd() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(asyncCall(res));

  // set Action
  const callListName = info => {
    // set Call
    let setFirestoreList = {
      collection: info.collection,
      mergeUser: info.mergeUser,
      mergeUserField: info.mergeUserField, // <----- Indicar qual o campo que contém o id do usuário.
      mergeUserFbCollection: info.mergeUserFbCollection, // <------ Indicar qual o nome da collection que contém as informações de usuário
      where1: info.where1,
      where2: info.where2,
      order1: info.order1,
      limit: info.limit // <---- Limitando Retorno de Dados - Criado por Duarte

    };
    let infoCall = {
      callName: 'getList',
      reducerName: info.reducerName,
      par: setFirestoreList
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
  const callUseListRd = useListRd();

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
