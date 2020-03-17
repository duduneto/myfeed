// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import Internal Components
import { useStyle, UsePicker, UseIcoMoon } from './';

// ------------------------------
// #endregion

const UseOptions = props => {
  // #region [useMorfos]
  // ------------------------------
  let {
    values,
    content,
    styledOptions,
    handleTextChange,
    showChildSelect,
    optionCategory,
    optionCategoryName,
    checkBox,
    defaultValue,
    optionMainCategoryName,
    pickerDefaultValue
  } = props;

  let condition01 =
    showChildSelect && showChildSelect.show
      ? [useStyle.flexRow, useStyle.flex1]
      : [useStyle.flexRow, { marginBottom: 6, marginLeft: 6 }];

  if (!values[content.name]&& defaultValue) {
    handleTextChange(defaultValue, content.name);
  }
  
  if (!values[optionCategoryName]&& pickerDefaultValue) {
    handleTextChange(pickerDefaultValue, optionCategoryName);
  }

  // #endregion

  // #region [allStyles]
  //OPTIONS
  // let stlView10 = [useStyle.mgB20];
  let stlTxt03 = [useStyle.mgL5];
  let stlTxt06 = stlTxt03;
  // #endregion

  return (
    <View style={styledOptions}>
      {content.values.map((option, index) => (
        <>
          <TouchableOpacity
            style={condition01}
            onPress={() => {
              handleTextChange(
                !showChildSelect
                  ? checkBox
                    ? values[content.name]
                      ? values[content.name].find(_opt => _opt === option)
                        ? values[content.name].filter(opt => opt !== option)
                        : [option, ...values[content.name]]
                      : [option]
                    : option
                  : showChildSelect.contentSelect[0],
                content.name
              );
              optionCategory &&
                optionCategoryName &&
                handleTextChange(
                  optionCategory && optionCategory,
                  optionCategoryName
                );
            }}
          >
            <View style={{ width: 24, height: 24 }}>
              <UseIcoMoon
                name={
                  checkBox
                    ? values[content.name] &&
                      values[content.name].find(op => op === option)
                      ? 'check-circle'
                      : 'circle'
                    : showChildSelect && showChildSelect.show
                    ? showChildSelect.contentSelect.find(
                        option => option === values[content.name] && optionCategory === values[optionCategoryName]
                      )
                      ? 'check-circle'
                      : 'circle'
                    : values && values[content.name] === option
                    ? 'check-circle'
                    : 'circle'
                }
                size={22}
                color={
                  checkBox
                    ? values[content.name] &&
                      values[content.name].find(op => op === option)
                      ? 'check-circle'
                      : 'circle'
                    : showChildSelect && showChildSelect.show
                    ? showChildSelect.contentSelect.find(
                        option => option === values[content.name] && optionCategory === values[optionCategoryName]
                      )
                      ? '#333'
                      : '#ccc'
                    : values && values[content.name] === option
                    ? '#333'
                    : '#ccc'
                }
              />
            </View>
            {showChildSelect && showChildSelect.show ? (
              <></>
            ) : (
              <Text style={stlTxt06}>{option}</Text>
            )}
            {showChildSelect && showChildSelect.show && (
              <View style={[useStyle.input, { flex: 1 }]}>
                <UsePicker
                  style={{ border: 'none' }}
                  values={values}
                  handleTextChange={handleTextChange}
                  optionCategory={optionCategory}
                  optionCategoryName={optionCategoryName}
                  content={{
                    name: content.name,
                    values: showChildSelect.contentSelect
                  }}
                />
              </View>
            )}
          </TouchableOpacity>
        </>
      ))}
    </View>
  );

  // ------------------------------
  // #endregion
};

export default UseOptions;
