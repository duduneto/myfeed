// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// ------------------------------
// #endregion

export default function useRdFilters(info) {
  // #region [useMorfos]
  // ------------------------------

  // set reducer
  let { reducer } = info;

  // set operators
  let operators = {
    '===': (a, b) => a === b,
    '!==': (a, b) => a !== b,
    '<': (a, b) => a < b,
    '>': (a, b) => a > b
  };

  // set filters
  if (info.reducer && info.filter1)
    reducer = reducer.filter(item =>
      operators[info.filter1.type](item[info.filter1.field], info.filter1.value)
    );
  if (info.reducer && info.filter2)
    reducer = reducer.filter(item =>
      operators[info.filter2.type](item[info.filter2.field], info.filter2.value)
    );

  // send Result
  return reducer;

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  // #region [setLogic] TOPLEVEL
  // ------------------------------
  
    // --- Use Reducer Filters
    // ------------------------------

    // set filters
    let infoPosts = {
      reducer: rdAllPosts
      filter1: { field: 'userId', type: '===', value: rdAuthUser.docId },
      filter2: { field: 'newComments', type: '===', value: true },
    }

    // set hook
    let reducer = useRdFilters(infoPosts);
  
  // ------------------------------
  // #endregion

*/
