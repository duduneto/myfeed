import React from 'react';

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
    <select
      // style={props.style}
      size={1}
      selected={(item) => console.log(item)}
      // selectedValue={
      //   optionCategoryName && values[optionCategoryName] === optionCategory
      //     ? values && values[content.name]
      //       ? values[content.name]
      //       : content.values[0]
      //     : content.values[0]
      // }
      onChange={(itemValue, itemIndex) =>{
        console.log(itemValue.currentTarget(), itemValue)
        // props.onValueChange ? props.onValueChange(itemValue, itemIndex) : handleTextChange(itemValue, content.name)
      }}
    >
      {content.values.map((option, index) => (
        <option key={index} label={option} value={option} color="black" />
      ))}
    </select>
  )
}

export default OptionPicker