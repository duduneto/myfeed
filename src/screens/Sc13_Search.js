// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Picker
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useFbUpdateData,
  useChangeManyRd,
  useChangeRd,
  UseIcoMoon,
  useTimeStamp,
  UseAutocomplete,
  UseLoader,
  useListRd
} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const { Sc13, getListPending, getListError } = useReducer();
  const callChangeRd = useChangeRd();
  const callManyChangeRd = useChangeManyRd();

  const timeStamp = useTimeStamp;

  useEffect(() => {
    callManyChangeRd({
      Cp01: 'search'
    });
    return () => {
      callManyChangeRd({
        rdUseAutocompleteListSearchClients: null
      });
    };
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

  // SEARCH
  let stlView03 = [
    useStyle.flexRow,
    useStyle.flexBetween,
    {
      position: 'absolute',
      top: 5,
      width: '85%',
      left: 40
    }
  ];
  let stlView04 = [useStyle.leftBox];
  let stlView05 = [useStyle.centerBox];
  let stlView06 = [useStyle.rightBox];
  let stlTxtInput01 = [
    useStyle.titlePageLeft,
    { position: 'relative', left: -20 }
  ];

  // RESULTS
  let stlView07 = [
    useStyle.card,
    useStyle.flexRow,
    useStyle.flexBetween,
    { paddingHorizontal: 20 }
  ];
  let stlImg01 = { width: 40, height: 40 };
  let stlView08 = [useStyle.flex2, { paddingLeft: 20 }];
  let stlTxt01 = [useStyle.txTitleCard];
  let stlTxt02 = [useStyle.txSubTitleCard];
  let stlTxt03 = [useStyle.txSubTitleCard, { fontSize: 11.4 }];

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
          <View style={stlView02}>
            {/*  */}

            {props.children}

            {/*  */}
          </View>
        </ScrollView>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------
    <>
      <SEARCHBAR />
      <_STYLE>{getListPending === true ? <UseLoader /> : <RESULTS />}</_STYLE>
    </>
    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const SEARCHBAR = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      // CRIAR COMPONENTE SEARCH.JS ?
      <View style={stlView03}>
        <View style={stlView04}></View>
        <View style={stlView05}>
          <UseAutocomplete
            style={stlTxtInput01}
            placeholder={'Buscar'}
            reducerNameAutoComplete={'AutoComplete_Sc13'}
            reducerName={'Sc13'}
            autoFocus={true}
          />
        </View>
        <View style={stlView06}>
          <TouchableOpacity
            onPress={() => {
              callChangeRd({
                reducerName: 'AutoComplete_Sc13',
                value: ''
              });
            }}
          >
            <UseIcoMoon name="x-square" size={22} color="#2A576B" />
          </TouchableOpacity>
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const RESULTS = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion
    return (
      // #region [component]
      // ------------------------------
      <View style={{ marginBottom: 13 }}>
        {Sc13 &&
          Sc13.map((user, index) => {
            return (
              <TouchableOpacity
                style={stlView07}
                key={index}
                onPress={() => {
                  console.log(compProps);
                  compProps.history.push('/activityProfile');
                  callManyChangeRd({
                    Sc06: user
                  });
                }}
              >
                <UseIcoMoon name="user" size={30} color={'#2A576B'} />
                <View style={stlView08}>
                  <Text style={stlTxt01}>{user.nomeDaEmpresa}</Text>
                  <Text style={stlTxt02}>{user.nomeFantasia}</Text>
                  <Text style={stlTxt03}>
                    {timeStamp(new Date(user.createdAt.seconds * 1000))}
                  </Text>
                </View>
                <View style={{ marginRight: -10 }}>
                  <UseIcoMoon
                    name="chevron-right"
                    size={28}
                    color={'#2A576B'}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
