// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Internal Components
import { UseLoader, useRdFilters } from '.';

// ------------------------------
// #endregion

export default function UseRdItems(info) {
  // #region [useMorfos]
  // ------------------------------

  // set reducer
  let { reducer, filter1, filter2 } = info;

  // set filter
  reducer = useRdFilters({ reducer, filter1, filter2 });

  // set lets
  let rdNameslength = reducer && reducer.length;

  // set map itens
  const NamesList = props => {
    return reducer == null ? (
      <UseLoader />
    ) : rdNameslength === 0 ? (
      info.noItem
    ) : (
      reducer.map((item, id) => props.renderProps({ item, id }))
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
  
    // --- Use Reducer Items
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
        reducer: rdAllPosts,
        filter1: { field: 'userId', type: '===', value: rdAuthUser.docId },
        noItem: <NoItem />
      };

    // set Hook
    const [PostsList] = UseListItems(infoPosts);
  
  // ------------------------------
  // #endregion

*/
