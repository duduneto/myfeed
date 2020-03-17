// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Internal Components
import { useReducer, UseRedirect } from '../../screens/useMorfos';

// ------------------------------
// #endregion

export default function AllPublic(props) {
  const { rdAuthUser } = useReducer();

  // return <UseRedirect to="signin" />;
  // return <>{props.children}</>;

  // FALTA: Entender o route pra que esse componente não leia repetido
  return !rdAuthUser ? props.children : <UseRedirect to="/profile" />;
}
