// #region [setImports]
// ------------------------------

import { useState } from 'react';

// ------------------------------
// #endregion

const useForm = (init_state, callback) => {
  // #region [useMorfos]
  // ------------------------------

  const [values, setValues] = useState(init_state || {});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  const handleChangeState = (value,name) => {
    
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  const setAllValues = (value) => {
    setValues(values => ({
      ...values,
      ...value
    }));
  };

  const handleTextChange = (value, name) => {
    // event.persist();
    // console.log(value, name)
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  const handleManyChange = (state) => {
    setValues(states => ({...states, ...state}))
  }
  
  const handleReplaceState = (state) => {
    setValues(states => ({...state}))
  }

  return {
    handleTextChange,
    handleChangeState,
    handleChange,
    setAllValues,
    handleSubmit,
    handleManyChange,
    handleReplaceState,
    values
  };

  // ------------------------------
  // #endregion [setImports]
};

export default useForm;

/*** HOW TO USE IT ****

  // #region [setLogic]
  // ------------------------------
  
    // --- Use Form Web
    // ------------------------------

    // set Hook
    const { values, handleChange, handleSubmit } = useForm(login);

    // function Log
    function login() {
      console.log(values);
    }

    // inputs Call
    //  <input className="input" type="email" name="email" onChange={handleChange} value={values.email} required />
    //  <input className="input" type="password" name="password" onChange={handleChange} value={values.password} required />

  // ------------------------------
  #endregion

*/
