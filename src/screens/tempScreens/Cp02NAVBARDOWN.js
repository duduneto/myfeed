// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  UseIcoMoon,
  useChangeRd,
  useReducer,
  useRdFilters
} from './useMorfos';

// ------------------------------
// #endregion

export default function Cp02() {
  // #region [setLogic] & Reducers
  // ------------------------------

  const { rdNavSelection, rdAuthUser, rdAllPosts } = useReducer();
  // const screenContent = rdContent[0];

  // ------------------------------

  // set Hook
  const changeRdNavSelection = useChangeRd();

  // ------------------------------
  // #endregion

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.tabFooter}>{props.children}</View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <_STYLE>
      <FEED />

      <NEWCOMMENTS />

      <PROFILE />

      <WRITE />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const FEED = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UseLink
        to="/feed"
        component={TouchableOpacity}
        onPress={() =>
          changeRdNavSelection({ reducerName: 'navSelection', value: 1 })
        }
      >
        <View style={useStyle.iconCenter}>
          <UseIcoMoon
            name="layout"
            size={22}
            color={rdNavSelection === 1 ? '#ff2600' : '#333'}
          />
          <Text
            style={[useStyle.tx12, rdNavSelection == 1 && [useStyle.txOrange]]}
          >
            Feed
          </Text>
        </View>
      </UseLink>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const NEWCOMMENTS = () => {
    // #region [setLogic]
    // ------------------------------

    // --- Use Reducer Filters
    // ------------------------------

    // set List Call
    let infoPosts = {
      reducer: rdAllPosts,
      filter1: { field: 'userId', type: '===', value: rdAuthUser.docId },
      filter2: { field: 'newComments', type: '===', value: true }
    };
    // set hook
    let newComments = useRdFilters(infoPosts);
    // let tam = 0;
    // let dot = false;

    let tam = newComments && newComments.length;
    let dot = tam > 0 && true;

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UseLink
        to="/newcomments"
        component={TouchableOpacity}
        onPress={() =>
          changeRdNavSelection({ reducerName: 'navSelection', value: 2 })
        }
      >
        <View style={useStyle.iconCenter}>
          {dot && <View style={useStyle.dot} />}
          <UseIcoMoon
            name="message-circle"
            size={22}
            color={rdNavSelection === 2 ? '#ff2600' : '#333'}
          />
          <Text
            style={[useStyle.tx12, rdNavSelection === 2 && [useStyle.txOrange]]}
          >
            New
          </Text>
        </View>
      </UseLink>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const PROFILE = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UseLink
        to="/myprofile"
        component={TouchableOpacity}
        onPress={() =>
          changeRdNavSelection({ reducerName: 'navSelection', value: 3 })
        }
      >
        <View style={useStyle.iconCenter}>
          <UseIcoMoon
            name="user"
            size={22}
            color={rdNavSelection === 3 ? '#ff2600' : '#333'}
          />
          <Text
            style={[useStyle.tx12, rdNavSelection === 3 && [useStyle.txOrange]]}
          >
            Perfil
          </Text>
        </View>
      </UseLink>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const WRITE = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <UseLink
        to="/write"
        component={TouchableOpacity}
        onPress={() =>
          changeRdNavSelection({ reducerName: 'navSelection', value: 4 })
        }
      >
        <View style={useStyle.iconCenter}>
          <UseIcoMoon
            name="feather"
            size={22}
            color={rdNavSelection === 4 ? '#ff2600' : '#333'}
          />
          <Text
            style={[useStyle.tx12, rdNavSelection === 4 && [useStyle.txOrange]]}
          >
            Escrever
          </Text>
        </View>
      </UseLink>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
