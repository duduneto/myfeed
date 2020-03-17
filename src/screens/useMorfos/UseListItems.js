// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Internal Components
import { UseLoader, useListRd, useReducer } from '.';

// ------------------------------
// #endregion

export default function UseListItems(info) {
  // #region [useMorfos]
  // ------------------------------

  // call ListRd
  const callRdListName = useListRd();

  // set lets
  let rdNamesList = useReducer()[info.reducerName];
  let rdNameslength = rdNamesList && rdNamesList.length;

  // it is called when component did mount
  React.useEffect(() => {
    callRdListName(info);
  }, []);

  // set map itens
  const NamesList = props => {
    return rdNamesList == null ? (
      <UseLoader />
    ) : rdNameslength === 0 ? (
      info.noItem
    ) : (
      rdNamesList.map((item, id) => {
        return props.renderProps({ item, id });
      })
    );
  };

  // send Result
  return [NamesList, rdNameslength];

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  // #region [setLogic] TOPLEVEL
  // ------------------------------
  
    // ------------------------------
    // --- Use List Items
    // ------------------------------

    // set noItem
      const NoItem = () => (
        <>
          <Text>Você está</Text>
          <Text>Sem Item</Text>
        </>
      );

    // set List Call
    let infoPosts = {
      collection: 'posts',
      reducerName: 'rdMyPosts',
      // mergeUser: true,
      // Filter
      where1: { field: 'userId', type: '==', value: rdAuthUser.docId },
      // Order
      order1: { field: 'createdAt', type: 'desc' },
      // emptyList
      noItem: <NoItem />
    };

    // set Hook
    const [PostsList] = UseListItems(infoPosts);
  
  // ------------------------------
  // #endregion

*/
