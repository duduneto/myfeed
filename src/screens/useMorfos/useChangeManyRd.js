// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { syncManyCall } from '../../config/redux/syncManyCalls';

// ------------------------------
// #endregion

export default function useChangeManyRd() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callManySync = res => dispatch(syncManyCall(res));

  // set action
  const changeRdName = info =>
    callManySync(info);

  return changeRdName;

  // ------------------------------
  // #endregion
}
/*** WHY USE IT
 * 
  Muitas vezes precisamos mudar mais de um objeto no estado da aplicação.
  Quando usamos o useChangeRd para mudar, por exemplo, 3 objetos do estado da aplicação,
    Pode demandar muito processamento do dispositivo e deixar a aplicação momentaneamente lenta.

  Usando o useChangeManyRd, conseguimos alterar o estado da aplicação com apenas uma chamada de action
 * 
 */


/*** HOW TO USE IT ****
 
  // set Hooks
  const callManyChangeRd = useChangeManyRd();

  // #region [setLogic]
  // ------------------------------
  
    // --- Use Change Reducer
    // ------------------------------

    // set Call
    let infoSelectedProfile = { 
      objeto1: 'hello',
      objeto2: ['asd', {asd: 'asd'}, {foo:'bar'}],
      objeto3: 123456
    }

    // function Call
    // callManyChangeRd(infoSelectedProfile);

    // ------ or ------

    // button Call
    // <TouchableOpacity 
    // onPress={() => callManyChangeRd(infoSelectedProfile)}
    // >
    // </TouchableOpacity>

    // component Call (TOPLEVEL)
    // useEffect(() => {
    //   callManyChangeRd(infoSelectedProfile);
    // }, []);

  // ------------------------------
  #endregion

*/
