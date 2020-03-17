// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { Picker } from 'react-native';
// import Internal Components
import { useStyle } from './';

// ------------------------------
// #endregion

const UsePicker = props => {
  // #region [useMorfos]
  // ------------------------------
  let {
    values,
    handleTextChange,
    content,
    preSetDefaultValueOfThisInput,
    optionCategory,
    optionCategoryName
  } = props;

  preSetDefaultValueOfThisInput &&
    preSetDefaultValueOfThisInput.preset &&
    !values[content.name] &&
    handleTextChange(preSetDefaultValueOfThisInput.value, content.name);

  // #endregion

  // #region [allStyles]
  // ------------------------------

  let stl01 = [useStyle.picker];
  Picker.size = 3;
  // ------------------------------
  // #endregion

  return (
    // #region [component]
    // ------------------------------
    <select
      style={props.style}
      // itemStyle={props.itemStyle}
      // selectedValue={
      //   optionCategoryName && values[optionCategoryName] === optionCategory
      //     ? values && values[content.name]
      //       ? values[content.name]
      //       : content.values[0]
      //     : content.values[0]
      // }
      onChange={(itemValue, itemIndex) =>
        console.log(itemValue, itemIndex)
        // props.onValueChange ? props.onValueChange(itemValue, itemIndex) : handleTextChange(itemValue, content.name)
      }
    >
      {content.values.map((option, index) => (
        <option  key={index} label={option} value={option} color="black" />
      ))}
    </select>

    // ------------------------------
    // #endregion
  );

  // ------------------------------
  // #endregion
};

export default UsePicker;
