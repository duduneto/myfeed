// #region [setImports]
// ------------------------------

// import Packages
import React, { useState } from 'react';

// ------------------------------
// #endregion

export default function useToggle(initialValue) {
  // #region [useMorfos]
  // ------------------------------

  const [sttName, setToggleValue] = useState(initialValue);
  const toggleName = () => setToggleValue(!sttName);

  return [sttName, toggleName];

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  // #region [setLogic]
  // ------------------------------
  
    // --- Use Toggle
    // ------------------------------

    // set Hook
    const [sttMsg, toggleMsg] = useToggle(false);

    // state Condition
    // <Text>{valueMsg && 'Show Text'}
    // </Text>

    // button Call
    // <TouchableOpacity onPress={toggleMsg} > 
    // </TouchableOpacity>

  // ------------------------------
  // #endregion

*/
