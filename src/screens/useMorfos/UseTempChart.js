// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
// import Internal Components
import { useStyle } from './';

// ------------------------------
// #endregion

const UseTempChart = (props) => (
  // #region [useMorfos]
  // ------------------------------

  <View style={{ position: 'relative', overflow: 'hidden' }} >
    <View style={{ left: '40%' }}>
      <View style={{ height: 35 * props.data.length, width: 1, backgroundColor: '#a1a1a1', position: 'absolute', left: 4 * 10 }} />
      <View style={{ height: 35 * props.data.length, width: 1, backgroundColor: '#a1a1a1', position: 'absolute', left: 4 * 20 }} />
      <View style={{ height: 35 * props.data.length, width: 1, backgroundColor: '#a1a1a1', position: 'absolute', left: 4 * 30 }} />
      <View style={{ height: 35 * props.data.length, width: 1, backgroundColor: '#a1a1a1', position: 'absolute', left: 4 * 40 }} />
      <View style={{ height: 35 * props.data.length, width: 1, backgroundColor: '#a1a1a1', position: 'absolute', left: 4 * 50 }} />
    </View>
    {
      props.data.map((city) => {
        return (
          <View>
            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
              <View style={{ width: '40%', backgroundColor: '#0000', alignItems: 'flex-end', paddingRight: 5 }}>
                <Text style={{ color: '#000' }} >{city[0]}</Text>
              </View>
              <View style={{ height: '100%', alignSelf: 'center' }}>
                <View style={{ width: 4 * city[1], backgroundColor: '#b54', height: 20 }} >
                  <Text style={{ alignSelf: 'flex-start' }} >{city[1]}</Text>
                </View>
              </View>
            </View>
          </View>
        )
      })
    }
    <View style={{ flexDirection: 'row', left: '40%', borderTopWidth: 2, borderTopColor: '#5e5e5e', position: 'relative' }} >
      <Text>0</Text>
      <Text style={{ left: 4 * 10, position: 'absolute' }} >10</Text>
      <Text style={{ left: 4 * 20, position: 'absolute' }} >20</Text>
      <Text style={{ left: 4 * 30, position: 'absolute' }} >30</Text>
      <Text style={{ left: 4 * 40, position: 'absolute' }} >40</Text>
      <Text style={{ left: 4 * 50, position: 'absolute' }} >50</Text>
    </View>
  </View>

  // ------------------------------
  // #endregion
);

export default UseTempChart;
