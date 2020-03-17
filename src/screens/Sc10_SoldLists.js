// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  PixelRatio
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useListRd,
  useChangeRd,
  UseIcoMoon,
  useCurrencyMask,
  useChangeManyRd,
  UseRefreshView,
  UseLoader
} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const { Sc10_opportunities, getListPending, getListError } = useReducer();
  const callChangeRd = useChangeRd();
  const callChangeManyRd = useChangeManyRd();
  const callListRd = useListRd();
  const currencyMask = useCurrencyMask;
  // const screenContent = rdContent[0];
  const categProd = [
    'Total',
    'Linha VM',
    'Linha F',
    'Consórcio',
    'Seguros',
    'Semi Novos'
  ];
  const callToDb = () => {
    callChangeRd({ reducerName: 'Cp01', value: 'Negócios Fechados' });
    callListRd({
      collection: 'opportunities',
      reducerName: 'Sc10_opportunities'
    });

  }
  useEffect(() => {
    callToDb()
  }, []);

  //FUNÇÕES P/ CAPTURAR TAMANHO EM DP DA TELA
  const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };
  const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  };

  // ------------------------------
  // #endregion

  // #region [allStyles]
  // ------------------------------

  let stl01 = {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
  };

  // ------------------------------
  // #endRegion [component]

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    let stl01 = [useStyle.flexMaster];
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
    <>
      <_STYLE>
        {
          getListPending === true &&
          <UseLoader />
        }
        <View style={stl01}>
          {categProd.map((categ, index) => (
            <SOLDS categ={categ} key={index} />
          ))}
        </View>
      </_STYLE>
    </>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const SOLDS = props => {
    // #region [NOsetLogic]
    // ------------------------------
    const { categ, index } = props;
    let list_opportunities_by_categ =
      Sc10_opportunities &&
      Sc10_opportunities.filter(_opp =>
        categ === 'Total'
          ? !!_opp.opportunity_deal
          : _opp.opportunity_products_category === categ &&
          !!_opp.opportunity_deal
      );
    let total_value_list = 0;
    let total_clients = new Array();
    list_opportunities_by_categ &&
      list_opportunities_by_categ.map(_opp => {
        total_value_list =
          total_value_list + currencyMask(_opp.total_amount_opportunity, true);
        if (!total_clients.find(clientId => clientId === _opp.user.docId)) {
          total_clients.push(_opp.user.docId);
        }
      });

    // ------------------------------
    // #endregion

    // #region [allStyles]
    // ------------------------------

    // let stl01 = [useStyle.card, useStyle.flexRow, useStyle.flexBetween];
    let stl01 = [
      useStyle.card,
      useStyle.flexCenter,
      { width: widthPercentageToDP('43%'), height: 180 }
    ];
    let stl02 = [useStyle.flex2];
    let stl03 = [useStyle.txTitleCard, useStyle.txCenter];
    let stl04 = [useStyle.txSubTitleCard, useStyle.txCenter, { marginTop: 10 }];
    let stl05 = [{ marginRight: -10 }];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <TouchableOpacity
        style={{ textDecoration: 'none' }}
        onPress={() => {
          callChangeManyRd({
            Sc11_opportunities: list_opportunities_by_categ,
            Cp01: categ
          });
          compProps.history.push('/soldListsCategory');
        }}
      >
        <View style={stl01}>
          <UseIcoMoon name="align-left" size={30} color={'#2A576B'} />
          <View style={stl02}>
            <Text style={stl03}>{categ}</Text>
            <Text style={stl04}>
              {`Total Oportunidades: ${
                list_opportunities_by_categ
                  ? list_opportunities_by_categ.length
                  : '...'
                } / Valor Total: R$${currencyMask(
                  total_value_list
                )} / Total Clientes: ${total_clients.length}`}
            </Text>
          </View>
          {/* <View style={stl05}>
            <UseIcoMoon name="chevron-right" size={28} color={'#2A576B'} />
          </View> */}
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
