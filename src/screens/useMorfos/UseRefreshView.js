// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, ActivityIndicator, Dimensions, PixelRatio, ScrollView } from 'react-native';
// import Internal Components
import { useStyle } from '.';

// ------------------------------
// #endregion

const UseRefreshView = (props) => {
  // #region [useMorfos]
  // ------------------------------

  let _startScrollMoving = false;
  return (
    <View
    style={props.style}
    onTouchEndCapture={(e) => {
      console.log(_startScrollMoving)
      console.log(props)
      console.log(e.nativeEvent.locationY)
      if((e.nativeEvent.locationY - _startScrollMoving) >= props.triggerRefreshHeight){
        props.onRefresh()
      }
    }}
    onTouchMove={(e) => {
      // console.log('TouchMoving => ',e.nativeEvent.locationY);
      _startScrollMoving = _startScrollMoving !== false ? _startScrollMoving : e.nativeEvent.locationY;
    }}
    >
      {props.children}
    </View>
    // <View
    // style={[{backgroundColor: '#0009', width: widthPercentageToDP('100%')}, props.style, {position: 'absolute'}]}
      
    //   onTouchStart={(e) => { _startScrollMoving = e.nativeEvent.locationY }}
    //   // onTouchMove={(e) => {console.log('TouchMoving => ',e.nativeEvent.locationY); _scrollMoving = e.nativeEvent.locationY }}
    //   onTouchEndCapture={(e) => {
    //     if (e.nativeEvent.locationY - _startScrollMoving >= props.triggerRefreshHeight) {
    //       // props.onRefresh();
    //       // console.log('Refresh', props)
    //     }
    //   }}
    // />
  )

  // ------------------------------
  // #endregion
  };

export default UseRefreshView;
