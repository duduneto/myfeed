// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { asyncCall } from '../../config/redux/asyncCall';

// ------------------------------
// #endregion

export default function useFbAddData() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(asyncCall(res));

  // set Action
  const addAndBindData = (info) => {
    console.log(info)
    // set Call
    let infoCall = {
      callName: 'addAndBindData',
      reducerName1: info.reducerName,
      par: {
        data1: info.data1 && {
          collection: info.data1.collection,
          offline: info.data1.offline,
          dataToAdd: info.data1.dataToAdd
        },
        data2: info.data2 && {
          collection: info.data2.collection,
          offline: info.data2.offline,
          refFieldName: info.data2.refFieldName,
          dataToAdd: info.data2.dataToAdd
        },
        data3: info.data3 && {
          collection: info.data3.collection,
          offline: info.data3.offline,
          refFieldName: info.data3.refFieldName,
          dataToAdd: info.data3.dataToAdd
        },
      }
    };

    return callAsync(infoCall);
  };

  return addAndBindData;

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  // set Hooks
  const callFbAddAndBindData = useFbAddAndBindData();

  // #region [setLogic]
  // ------------------------------
  
    // --- Use Add Data
    // ------------------------------

    // set Call
    let infoAddAndBindDatas = {
      reducerName: 'rdAddNewActivity',
      data1: {
        collection: 'activities',
        dataToAdd: {
          createdAt: new Date(),
          ...values
        }
      },
      data2: {
        collection: 'opportunities',
        refFieldName: 'activityId',
        dataToAdd: {
          createdAt: new Date(),
          dateOpportunity: values.dateOpportunity,
          options_probabilidadeVenda: values.options_probabilidadeVenda,
          opportunity_products: values.opportunity_products,
          observation_opportunity: values.observation_opportunity,
          dateEndOpportunity: values.dateEndOpportunity,
          clientId: values.clientId
        }
      }
    };
    
    // function Call
    // callFbAddAndBindData(infoAddPost)

    // ------ or ------

    // button Call
    // <TouchableOpacity onPress={() => callFbAddAndBindData(infoAddAndBindDatas)}> 
    // </ TouchableOpacity>

  // ------------------------------
  // #endregion

*/
