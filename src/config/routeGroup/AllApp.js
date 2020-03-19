// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

// import Internal Components
import {
  UseLoader,
  useListRd,
  useReducer,
  UseRedirect
} from '../../screens/useMorfos';

// ------------------------------
// #endregion

/*
  This is the root component of your app. Here you define
  the overall layout and the container of the react router.
  You should adjust it according to the requirement of your app.
*/

export default function AllApp(props) {
  // #region [allStyles]
  // ------------------------------

  let stlLimit = {
    height: '100vh',
    shadowColor: '#ccc',
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 1 }
  };

  // ------------------------------
  // #endregion

  // set Reducer
  const { rdContent } = useReducer();

  // set Hook
  const callContent = useListRd();

  // set List Call
  let infoUsers = {
    collection: 'contentPt',
    order1: { field: 'ref', type: 'asc' },
    reducerName: 'rdContent',
    noItem: <Text>Sem Itens</Text>
  };
  console.log(props)
  // call when component did mount
  useEffect(() => {
    if (!rdContent) {
      // callContent(infoUsers);
    }
  }, []);

  return (
    // <View style={stlLimit}>{!rdContent ? <UseLoader /> : props.children}</View>
    <View style={stlLimit}>{props.children}</View>
  );
}
