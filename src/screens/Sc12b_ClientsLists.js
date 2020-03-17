// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  UseRedirect,
  useStyle,
  useReducer,
  useChangeRd,
  UseIcoMoon,
  useListRd,
  UseLoader,
  UseRefreshView
} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const {
    rdAuthUser,
    rdContent,
    rdMenuSelect,
    rdListClients,
    getListPending,
    getListError,
    _Sc06
  } = useReducer();
  // const screenContent = rdContent[0];
  const callListClients = useListRd();
  const callChangeRd = useChangeRd();

  // SetCall
  let infoListClients = {
    collection: 'clients',
    reducerName: 'rdListClients'
  };
  const callToDb = () => {
    callListClients(infoListClients);
    callChangeRd({ reducerName: 'Cp01', value: 'Meus Clientes' });
  }
  useEffect(() => {
    callToDb()
  }, []);

  let infoRatesList = {
    collection: 'clients',
    reducerName: 'rdListClients'
  };

  // component Call (TOPLEVEL)
  useEffect(() => {
    callListClients(infoRatesList);
  }, []);
  // ------------------------------
  // #endregion

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.flexMaster, useStyle.whitePage];
    let stl02 = [useStyle.scrollView];
    let stl03 = [useStyle.pad20];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stl01}>
        <ScrollView style={stl02}>
        <UseRefreshView style={stl03}
          triggerRefreshHeight={200}
          onRefresh={callToDb}
          >
            {/*  */}

            {props.children}

            {/*  */}
          </UseRefreshView>
          
        </ScrollView>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <_STYLE>
      {
        getListPending === true && <UseLoader/>
      }
      <CLIENTS />
      <REDIRECT />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const CLIENTS = props => {
    // #region [NOsetLogic]
    // ------------------------------
    let _rdListClients =
      rdListClients &&
      rdListClients.sort((client1, client2) =>
        client1.nomeDaEmpresa < client2.nomeDaEmpresa ? -1 : 1
      );
    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.card, useStyle.flexRow, useStyle.flexBetween];
    let stl02 = [useStyle.flex2, { paddingLeft: 20 }];
    let stl03 = [useStyle.txTitleCard];
    let stl04 = [useStyle.txSubTitleCard];
    let stl05 = [{ marginRight: -10 }];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        <TouchableOpacity
          style={[useStyle.card, useStyle.flexRow, { marginBottom: 20 }]}
          onPress={() => {
            compProps.history.push('/addClients');
          }}
        >
          <UseIcoMoon name="plus-circle" size={24} color={'#2A576B'} />
          <Text style={[stl03, { marginLeft: 10 }]}>Add. Cliente</Text>
        </TouchableOpacity>
        {_rdListClients &&
          _rdListClients.map(client => (
            <UseLink style={{ textDecoration: 'none' }}>
              <TouchableOpacity
                onPress={() => {
                  compProps.history.push('/activityProfile');
                  callChangeRd({ reducerName: '_Sc06', value: client });
                  callChangeRd({ reducerName: 'Sc06', value: client });
                }}
              >
                <View style={stl01}>
                  <UseIcoMoon name="user" size={30} color={'#2A576B'} />
                  <View style={stl02}>
                    <Text style={stl03}>{client.nomeDaEmpresa}</Text>
                    <Text style={stl04}>{client.nomeFantasia}</Text>
                    <Text
                      style={stl04}
                    >{`${client.cidade} - ${client.estado}`}</Text>
                    <Text style={stl04}>{`${
                      client.activities ? client.activities : '0'
                    } Atividades / ${
                      client.opportunities ? client.opportunities : '0'
                    } Oportunidade`}</Text>
                  </View>
                  <View style={stl05}>
                    <UseIcoMoon
                      name="chevron-right"
                      size={28}
                      color={'#2A576B'}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </UseLink>
          ))}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const REDIRECT = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>{/* {_Sc06 && <UseRedirect to="/activityProfile" />} */}</>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
