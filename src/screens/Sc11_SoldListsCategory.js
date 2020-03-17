// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  UseIcoMoon,
  useChangeManyRd,
  useCurrencyMask,
  useTimeStamp
} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const { Sc11_opportunities } = useReducer();
  // const screenContent = rdContent[0];
  // const callChangeRd = useChangeRd();
  const callManyChangeRd = useChangeManyRd();
  const timeStamp = useTimeStamp;
  const currencyMask = useCurrencyMask;

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
          <View style={stl03}>
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
      <_STYLE>
        {Sc11_opportunities &&
          Sc11_opportunities.map(_opportunity => (
            <DEALSLIST opportunity={_opportunity} />
          ))}
      </_STYLE>
    </>
    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const DEALSLIST = props => {
    // #region [setLogic]
    // ------------------------------
    const { opportunity } = props;
    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.card, useStyle.flexRow, useStyle.flexBetween];
    let stl02 = [{ position: 'absolute', left: 10, top: 11 }];
    let stl03 = [useStyle.flex2, { paddingLeft: 75 }];
    let stl04 = [useStyle.txTitleCard];
    let stl05 = [useStyle.txSubTitleCard, { marginTop: -3 }];
    let stl06 = [{ marginRight: -10 }];
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <TouchableOpacity
        onPress={() => {
          callManyChangeRd({
            _Sc06: { docId: opportunity.user.docId },
            Sc06: opportunity.user,
            Sc06_selected_opportunity: opportunity
          });
          compProps.history.push('/activityProfile');
        }}
      >
        <View style={stl01}>
          <View style={stl02}>
            <View style={{ position: 'absolute', left: 10, top: 5 }}>
              <UseIcoMoon name="hands" size={62} color={'#2A576B'} />
            </View>
          </View>
          <View style={stl03}>
            <Text style={stl04}>{opportunity.user.nomeDaEmpresa}</Text>
            <Text style={stl05}>{`Unidades ${opportunity.amount_opportunity}/ Produto: ${opportunity.opportunity_products}/ ${opportunity.opportunity_products_category} / Valor Unitário: R$: ${opportunity.unit_value_opportunity}/ Total R$: ${opportunity.total_amount_opportunity}`}</Text>
          </View>
          <View style={stl06}>
            <UseIcoMoon name="chevron-right" size={28} color={'#2A576B'} />
          </View>
        </View>
      </TouchableOpacity>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
