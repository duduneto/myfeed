// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, Picker } from 'react-native';
// import OptionsPicker from './optionsPicker';
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

  // preSetDefaultValueOfThisInput &&
  //   preSetDefaultValueOfThisInput.preset &&
  //   !values[content.name] &&
  //   handleTextChange(preSetDefaultValueOfThisInput.value, content.name);

  // #endregion

  // #region [allStyles]
  // ------------------------------

  let stl01 = [useStyle.picker];
  // ------------------------------
  // #endregion

  return (
    // #region [component]
    // ------------------------------
    <View style={props.boxViewStyle}>
      <Picker
        values={values}
        handleTextChange={handleTextChange}
        content={content}
        preSetDefaultValueOfThisInput={preSetDefaultValueOfThisInput}
        optionCategory={optionCategory}
        optionCategoryName={optionCategoryName}
        style={[props.style, { backgroundColor: '#fff' }]}
        itemStyle={props.itemStyle}
        selectedValue={
          optionCategoryName && values[optionCategoryName] === optionCategory
            ? values && values[content.name]
              ? values[content.name]
              : content.values[0]
            : content.values[0]
        }
        onValueChange={(itemValue, itemIndex) =>
          props.onValueChange
            ? props.onValueChange(itemValue, itemIndex)
            : handleTextChange(itemValue, content.name)
        }
        size={props.size}
      >
        {content.values.map((option, index) => (
          <Picker.Item
            key={index}
            label={option}
            value={option}
            color="black"
          />
        ))}
      </Picker>
    </View>

    // ------------------------------
    // #endregion
  );

  // ------------------------------
  // #endregion
};

export default UsePicker;
