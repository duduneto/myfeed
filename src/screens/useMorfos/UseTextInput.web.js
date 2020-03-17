// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { TextInput } from 'react-native';
// import Internal Components
// ------------------------------
// #endregion

const UseTextInput = props => {
  // #region [useMorfos]
  // ------------------------------
  props.defaultValue &&
    !props.state[props.inputName] &&
    props.setState(props.defaultValue, props.inputName);
  // ------------------------------

  return (
    <TextInput
      secureTextEntry={props.secureTextEntry}
      style={props.style}
      editable={props.editable}
      selectTextOnFocus={props.selectTextOnFocus}
      placeholder={props.placeholder}
      onChangeText={inputValue => {
        if (props.mask === 'currency') {
          let newInputValueWithMask;
          let inputValueCleanMask = inputValue.replace(/\D/g, '');
          inputValueCleanMask = inputValueCleanMask.replace(/^(0+)(\d)/g, '$2');
          props.setState(inputValueCleanMask, props.inputName);
        } else {
          props.setState(inputValue, props.inputName);
        }
      }}
      defaultValue={props.defaultValue && props.defaultValue}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
      value={
        props.mask === 'currency'
          ? props.value
            ? (Number(props.value) / 100)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
            : 0
          : props.value
      }
    />
  );

  // ------------------------------
  // #endregion
};

export default UseTextInput;

/*** HOW TO USE IT ****

  // #region [setLogic] TOPLEVEL
  // ------------------------------

    // ------------------------------
    // --- Import UseAutocomplete
    // ------------------------------

    import { UseTextInput } from './useMorfos';

    // using UseTextInput

    <UseTextInput
      style={stlTxtInput03}
      placeholder={screenContent.txt09}
      multiline={true}
      inputName={'obs_activity'}
      numberOfLines={4}
      setState={handleTextChange}
      defaultValue={screenContent.txt43}
      state={values}
    />

  // ------------------------------
  // #endregion

*/
