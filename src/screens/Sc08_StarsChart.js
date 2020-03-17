// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import Chart from 'react-google-charts';
import { ScrollView, View, ActivityIndicator, NetInfo, Text, TouchableOpacity } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useChangeRd,
  useListRd,
  UseLoader,
  UseRefreshView,
  UseTempChart
} from './useMorfos';

const { stlColor1, stlBgColor1 } = useStyle;

// ------------------------------
// #endregion

export default function Sc00(compProps) {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const {
    offline,
    rdContent,
    Sc08_opportunities,
    Sc08,
    getListPending,
    getListError
  } = useReducer();
  const callChangeRd = useChangeRd();
  const callListRd = useListRd();
  const screenContent = rdContent[4];
  const callToDb = () => {
    callChangeRd({ reducerName: 'Cp01', value: 'Gráficos' });
    callListRd({
      collection: 'clients',
      reducerName: 'Sc08'
    });
    callListRd({
      collection: 'opportunities',
      reducerName: 'Sc08_opportunities'
    });
  }

  useEffect(() => {

    // callChangeRd({ reducerName: 'offline', value: true })
    NetInfo.isConnected.fetch().then(isConnected => {
      console.log(isConnected)
      if (isConnected) {
        console.log("You are online!");
        callToDb();
      } else {
        console.log("You are offline!");
        callChangeRd({ reducerName: 'offline', value: true })
      }
    })
  }, []);


  let cidades = [];
  Sc08 &&
    Sc08.map(
      client =>
        !cidades.find(cidade => cidade === client.cidade) &&
        cidades.push(client.cidade)
    );
  let chartData = [];

  let clientsWithOpportunities =
    Sc08 && Sc08.filter(client => client.opportunities > 0);

  clientsWithOpportunities &&
    Sc08_opportunities &&
    cidades.map(async cidade => {
      let _total = [];
      clientsWithOpportunities
        .filter(client => client.cidade === cidade)
        .map(client =>
          Sc08_opportunities.filter(opp => opp.opportunity_deal !== true)
            .filter(opp => opp.clientId === client.docId)
            .map(opp => {
              _total.push(Number(opp.amount_opportunity));
            })
        );
      return chartData.push([
        cidade,
        _total && _total.reduce((prev, next) => Number(prev + next), 0),
        '#2A576B',
        null
      ]);
    });

  // ------------------------------
  // #endregion

  // #region [allStyles]
  // ------------------------------

  // _STYLE
  // let stl = [useStyle.xxx,];
  let stlView01 = [useStyle.flexMaster, useStyle.whitePage];
  let stlScroll01 = [useStyle.scrollView];
  let stlView02 = [];

  // CHART
  let stlView03 = [useStyle.card, { padding: 0, margin: 0 }];
  let stlTxt01 = [useStyle.a3, useStyle.a4];
  let stlTxt02 = [useStyle.a5, useStyle.a6];
  let stlTxt03 = [];
  let stlTxt04 = [];
  let stlTxt05 = [];
  let stlTxt06 = [];

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

  const cities = [
        ['Fortaleza', 10, '#2A576B', null],
        ['Guarulhos', 12, '#2A576B', null],
        ['São Paulo', 15, '#2A576B', null],
        ['Rio de Janeiro', 7, '#2A576B', null],
        ['Cidade X', 35, '#2A576B', null],
        ['Cidade Y', 21, '#2A576B', null],
        ['Cidade Z', 8, '#2A576B', null]
      ]

  const SCREEN = () => (
    // #region [component]
    // ------------------------------
    <>

        <FILTER_BUTTON /> {/* <<<<<<<<<<CARLOS ESTILIZAR O BOTAO DO FILTRO */}
      <_STYLE>
        {offline === true ? (
          <>
          {/* <UseTempChart data={cities} /> */}
          </>
        ) : (
            <>
              {getListPending === true ? (
                <UseLoader />
              ) : (
                  <>
                    <CHART chartData={chartData} />
                    {/* <UseTempChart data={chartData} /> */}
                  </>
                )}
            </>

          )}
      </_STYLE>
    </>
    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const FILTER_BUTTON = () => {

    // #region [allStyles]
    // ------------------------------

    // _STYLE
    // let stl = [useStyle.xxx,];
    let stl01 = [useStyle.card, useStyle.flexRow, useStyle.flexBetween];
    let stl03 = [useStyle.txTitleCard];

    // ------------------------------
    // #endregion

    return (
      <TouchableOpacity
        style={[stl01, {marginHorizontal: 20, marginTop: 20}]}
        onPress={() => {
          compProps.history.push('/filterOpp');
        }}
      >
        <Text style={stl03} >FILTRO</Text>
      </TouchableOpacity>
    )
  }

  //_______________________________

  const CHART = props => {
    // #region [setLogic]
    // ------------------------------
    let defaultChartData = props.chartData
      ? props.chartData
      : [
        ['Fortaleza', 10, '#2A576B', null],
        ['Guarulhos', 12, '#2A576B', null],
        ['São Paulo', 15, '#2A576B', null],
        ['Rio de Janeiro', 7, '#2A576B', null]
      ];
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View>
        
        <Chart
          height="100px"
          chartType="BarChart"
          loader={
            <View style={{ padding: 10 }}>
              <ActivityIndicator size="small" color="#222" />
            </View>
          }
          data={[
            [
              'Element',
              'Oportunidades',
              { role: 'style' },
              {
                sourceColumn: 0,
                role: 'annotation',
                type: 'string',
                calc: 'stringify'
              }
            ],
            ...defaultChartData
          ]}
          style={{
            position: 'relative',
            top: -70
          }}
          options={{
            width: '110%',
            fontSize: 11,
            height: 1000,
            backgroundColor: 'none',
            legend: { position: 'none' },
            chartArea: { width: '50%' }
          }}
          // For tests
          rootProps={{ 'data-testid': '6' }}
        />
        {/* <Text style={stlTxt01}>Component 01</Text>
        <Text style={stlTxt02}>------------</Text> */}
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
