// #region [setImports]
// ------------------------------

// import Packages
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import Internal Components
// ------------------------------
import { UseIcoMoon, useReducer } from '.';
// #endregion

const UseButtonSubmit = (props) => {
  // #region [useMorfos]
  // ------------------------------
  const [values, setValues] = useState({});

  const changeState = (value, name) => {
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  const createArrayProdName = name => {
    let resultArray = new Array();
    let arrayCompleteName = name.split(' ');
    for (let i = 1; i <= name.length; i++) {
      resultArray.push(name.slice(0, i).toUpperCase());
    }
    arrayCompleteName.map(nameItem => {
      for (let i = 1; i <= nameItem.length; i++) {
        resultArray.push(nameItem.slice(0, i).toUpperCase());
      }
    })
    return resultArray;
  };
  const allFieldsExists = () => {
    var allFields = props.anyFieldsToEnableSubmit ? false : true;
    if(props.anyFieldsToEnableSubmit){
      props.anyFieldsToEnableSubmit.map(async (field) => {
        if(field === 'gallery'){
          await props.state[field].map((itemArray, index) => {
            if (!(props.stateToCompare[field].find(item => item === itemArray))){
              allFields = true
            }
          })
        } else if (props.state.hasOwnProperty(field) && props.stateToCompare[field] !== props.state[field]) {
          allFields = true
        }
      })
    } else {
      props.requiredFields.map(field => {
        if(!props.state.hasOwnProperty(field) || !props.state[field]){
          allFields = false
        }
      })
    }
    return allFields
  }

  return (
    <View>
      <TouchableOpacity
        style={[props.style, props.requiredFields ? props.disableBtnStyle && !allFieldsExists() && props.disableBtnStyle : '']}
        onPress={async () => {

          if (props.onPress) {
            props.onPress();
          }
          else {
            let infoToCall = props.dataToSubmit;
            infoToCall.dataToAdd 
            ? infoToCall.dataToAdd.arrayToSearch = await createArrayProdName(props.dataToSubmit.dataToAdd[props.fieldToCreateArrayToSearch])
            : infoToCall.dataToUpdate.arrayToSearch = await createArrayProdName(props.dataToSubmit.dataToUpdate[props.fieldToCreateArrayToSearch])
            
            props.callFbToSubmit(infoToCall)
          }
          // props.onPress
          //   ? props.onPress()
          //   : props.callFbToSubmit
          //   && props.callFbToSubmit(infoToCall)
        }}
        disabled={props.requiredFields && !allFieldsExists()}
      >
        <Text style={[props.btnTextStyle, props.requiredFields ? props.disableTextStyle && !allFieldsExists() && props.disableTextStyle : '']}>{props.btnText}</Text>
      </TouchableOpacity>
    </View>
  )

  // ------------------------------
  // #endregion
};

export default UseButtonSubmit;
