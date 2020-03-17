// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useChangeRd,
  UseIcoMoon,
  useListRd,
  UseLoader,
  useTimeStamp,
  useChangeManyRd,
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
    Sc05b_activities,
    getListPending
  } = useReducer();
  const callChangeRd = useChangeRd();
  const callChangeManyRd = useChangeManyRd();
  const callListRd = useListRd();
  const timeStamp = useTimeStamp;
  // const screenContent = rdContent[0];
  let infoActivities = {
    collection: 'activities',
    reducerName: 'Sc05b_activities',
    order1: { field: 'createdAt', type: 'desc' },
    mergeUser: true,
    mergeUserField: 'clientId',
    mergeUserFbCollection: 'clients'
  };

  const callToDb = () => {
    callChangeRd({ reducerName: 'Cp01', value: 'Atividades' });
    callListRd(infoActivities);
  }
  useEffect(() => {
    callToDb()
  }, []);

  // ------------------------------
  // #endregion

  // #region [allStyles]
  // ------------------------------

  // _STYLE
  // let stl = [useStyle.xxx,];
  let stlView01 = [useStyle.flexMaster, useStyle.whitePage];
  let stlScroll01 = [useStyle.scrollView];
  let stlView02 = [useStyle.pad20];

  // COMPONENT01
  let stlView03 = [
    useStyle.card,
    useStyle.flexRow,
    useStyle.flexBetween,
    { paddingHorizontal: 20 }
  ];
  let stlTxt01 = [useStyle.txTitleCard];
  let stlTxt02 = [useStyle.txSubTitleCard, { marginTop: -3 }];
  let stlTxt03 = [useStyle.txSubTitleCard, { fontSize: 11.4 }];
  let stlView04 = [useStyle.flex2, { paddingLeft: 65 }];

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

      <View style={stlView01}>
        <ScrollView style={stlScroll01}>
          <UseRefreshView style={stlView02}
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
      <>
        {
          getListPending === true && <UseLoader />
        }
        <COMPONENT01 />
      </>
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const COMPONENT01 = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {Sc05b_activities &&
          Sc05b_activities.map(activity => (
            <TouchableOpacity
              onPress={() => {
                callChangeRd({
                  reducerName: '_Sc06',
                  value: { activity, docId: activity.clientId }
                });
                // callChangeRd({ reducerName: 'Sc06', value: false });
                callChangeRd({
                  reducerName: 'Sc06_selected_activity',
                  value: activity
                });
                callChangeManyRd({
                  _Sc06: activity, docId: activity.clientId,
                  Sc06: activity.user,
                  Sc06_selected_activity: activity
                })
                compProps.history.push('/activityProfile');
              }}
            >
              <View style={stlView03}>
                <View style={{ position: 'absolute', left: 25 }}>
                  <UseIcoMoon name="briefcase" size={30} color={'#2A576B'} />
                </View>
                <View style={stlView04}>
                  <Text style={stlTxt01}>{activity.nomeDaEmpresa}</Text>
                  <Text style={stlTxt02}>{activity.options_contato}</Text>
                  <Text style={stlTxt03}>
                    {timeStamp(new Date(activity.dateActivity.seconds * 1000))}
                  </Text>
                </View>
                <View style={{ marginRight: -10 }}>
                  <UseIcoMoon
                    name="chevron-right"
                    size={28}
                    color={'#2A576B'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
