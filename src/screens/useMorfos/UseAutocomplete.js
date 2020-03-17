// #region [setImports]
// ------------------------------

// import Packages
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

// import Internal Components
import { useChangeRd, useReducer, useListRd } from '.';
// ------------------------------
// #endregion

const UseAutocomplete = props => {
  // #region [useMorfos]
  // ------------------------------

  // call Reducers
  let rdState = useReducer();
  const callChangeRd = useChangeRd();
  const callUseListRd = useListRd();

  // set Hooks
  const [values, setValues] = useState({});

  const handleChange = (value, name) => {
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  const { style, placeholder } = props;

  const search = txt => {
    clearTimeout(values.idSetTimeout);
    handleChange(
      setTimeout(
        () => {
          console.log('Pesquisando...', txt);
          if (props.useState) {
            props.setState(
              props.reducerNameAutoComplete,
              props.state[props.reducerNameAutoComplete]
                ? {
                    ...props.state[props.reducerNameAutoComplete],
                    search_client: txt
                  }
                : { search_client: txt }
            );
            callUseListRd({
              collection: 'clients',
              reducerName: props.reducerName
                ? props.reducerName
                : 'rdUseAutocompleteListSearchClients',
              // filter
              where1: {
                field: 'arrayToSearch',
                type: 'array-contains',
                value: txt.toUpperCase()
              },
              limit: 5
            });
          } else {
            callChangeRd({
              reducerName: props.reducerNameAutoComplete,
              value: rdState[props.reducerNameAutoComplete]
                ? {
                    ...rdState[props.reducerNameAutoComplete],
                    search_client: txt
                  }
                : { search_client: txt }
            });
            callUseListRd({
              collection: 'clients',
              reducerName: props.reducerName
                ? props.reducerName
                : 'rdUseAutocompleteListSearchClients',
              // filter
              where1: {
                field: 'arrayToSearch',
                type: 'array-contains',
                value: txt.toUpperCase()
              },
              limit: 5
            });
          }
        },
        props.time ? props.time : 800
      ),
      'idSetTimeout'
    );
  };
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      onChangeText={value => {
        search(value);
      }}
      defaultValue={
        rdState[props.reducerNameAutoComplete] &&
        rdState[props.reducerNameAutoComplete].search_client &&
        rdState[props.reducerNameAutoComplete].search_client
      }
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      autoFocus={props.autoFocus}
    />
  );
  // ------------------------------
  // #endregion
};

export default UseAutocomplete;

/*** HOW TO USE IT ****

  // #region [setLogic] TOPLEVEL
  // ------------------------------
  
    // ------------------------------
    // --- Import UseAutocomplete
    // ------------------------------

    import { UseAutocomplete } from './useMorfos';

    // using UseAutocomplete
    
    // Se não for especificado para o UseAutocomplete a forma como manipula o state, por padrão ele irá usar o reducer.

    // Usando Reducer :

    <UseAutocomplete 
    style={stlTxtInput01}  // This component accept custom style
    placeholder={screenContent.txt02} // This component accept a custom placeholder
    reducerNameAutoComplete={'AutoComplete_Sc05'} // Never repeat the same reducerNameAutoComplete value.
    reducerName={'Sc00'}
    />

    // Usando useState:
    
    <UseAutocomplete 
    style={stlTxtInput01} 
    placeholder={screenContent.txt02}
    reducerNameAutoComplete={'AutoComplete_Sc05'}
    reducerName={'Sc00'}
    state={values}
    setState={handleTextChange}
    />
  
  // ------------------------------
  // #endregion

*/
