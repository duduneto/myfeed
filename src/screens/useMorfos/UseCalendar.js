// #region [setImports]
// ------------------------------

// import Packages
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
// import Internal Components
// ------------------------------
import { UseIcoMoon, useTimeStamp, useCreateDate, useStyle } from '.';
import Calendar from 'react-calendar';
// #endregion

const UseCalendar = props => {
  // #region [useMorfos]
  // ------------------------------
  const timeStamp = useTimeStamp;
  const createDate = useCreateDate;
  const [values, setValues] = useState({});

  const changeState = (value, name) => {
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  if(!props.state[props.inputName]){
    props.defaultValue ? props.setState(props.defaultValue, props.inputName) : props.setState(new Date(), props.inputName)
  }

  return (
    <View style={useStyle.flexRow}>
      {/* {values[`error_input_calendarDate_${props.inputName}`] &&
        values[`error_input_calendarDate_${props.inputName}`].status ===
          true && (
          <Text style={{ color: '#fa5773' }}>
            {values[`error_input_calendarDate_${props.inputName}`].msg}
          </Text>
        )} */}
      <TouchableOpacity
        style={useStyle.flexRow}
        onPress={() => {
          props.setState(
            props.state[props.calendarName]
              ? !props.state[props.calendarName]
              : true,
            props.calendarName
          );
        }}
      >
        <TextInput
          editable={false}
          style={[
            props.inputStyle
            // values[`error_input_calendarDate_${props.inputName}`] &&
            //   values[`error_input_calendarDate_${props.inputName}`].status ===
            //     true && { color: '#fa5773' }
          ]}
          onChangeText={inputValue => {
            console.log(inputValue);
            props.setState(inputValue, props.inputName);
          }}
          onFocus={() =>
            changeState(
              { status: false }
              // `error_input_calendarDate_${props.inputName}`
            )
          }
          onBlur={() => {
            if (
              Object.prototype.toString.call(props.state[props.inputName]) !==
              '[object Date]'
            ) {
              let regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/g;
              console.log(regex.test(props.state[props.inputName]));
              console.log(props.state[props.inputName]);

              if (regex.test(props.state[props.inputName])) {
                console.log('Criando Date by String');
                let _newDate = createDate(props.state[props.inputName]);
                props.setState(_newDate, props.inputName);
              } else {
                changeState(
                  { status: true, msg: 'Data está com o formato errado' },
                  `error_input_calendarDate_${props.inputName}`
                );
              }
            }
          }}
          value={
            props.defaultValue && !props.state[props.inputName]
              ? props.defaultValue
              : props.state[props.inputName]
              ? Object.prototype.toString.call(props.state[props.inputName]) ===
                '[object Date]'
                ? timeStamp(props.state[props.inputName])
                : props.state[props.inputName]
              : 'dd/mm/aaaa'
          }
        />

        <UseIcoMoon name="calendar" size={22} color={'#333'} />
      </TouchableOpacity>
      {props.state[props.calendarName] && (
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            width: 300,
            zIndex: 3,
            left: -10,
            top: 40
          }}
        >
          <Calendar
            activeStartDate={props.activeStartDate}
            defaultActiveStartDate={props.defaultActiveStartDate}
            defaultValue={props.calendarDefaultValue}
            value={
              props.state[props.inputName] 
              ? props.state[props.inputName] 
              : props.calendarValue
                ? props.calendarValue
                : new Date()
            }
            onChange={data => {
              console.log(data);
              props.setState(data, props.inputName);
              props.setState(false, props.calendarName);
              changeState(
                { status: false },
                `error_input_calendarDate_${props.inputName}`
              );
            }}
          />
        </View>
      )}
    </View>
  );

  // ------------------------------
  // #endregion
};

export default UseCalendar;
