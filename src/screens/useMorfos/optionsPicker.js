import React from 'react';
import { Picker } from 'react-native';

const OptionPicker = (props) => {

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

  return (
    <Picker
      style={props.style}
      itemStyle={props.itemStyle}
      selectedValue={
        optionCategoryName && values[optionCategoryName] === optionCategory
          ? values && values[content.name]
            ? values[content.name]
            : content.values[0]
          : content.values[0]
      }
      onValueChange={(itemValue, itemIndex) =>
        props.onValueChange ? props.onValueChange(itemValue, itemIndex) : handleTextChange(itemValue, content.name)
      }
    >
      {content.values.map((option, index) => (
        <Picker.Item key={index} label={option} value={option} color="black" />
      ))}
    </Picker>
  )
}

export default OptionPicker