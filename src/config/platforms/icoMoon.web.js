// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import IcomoonReact from 'icomoon-react';

// import Internal Components
import icoMoonConfig from '../icomoon/selection.json';

// ------------------------------
// #endregion

const IcoMoon = props => (
  // #region [useMorfos]
  // ------------------------------

  <IcomoonReact
    icon={props.name}
    size={props.size}
    color={props.color}
    iconSet={icoMoonConfig}
  />

  // ------------------------------
  // #endregion
);

export default IcoMoon;
