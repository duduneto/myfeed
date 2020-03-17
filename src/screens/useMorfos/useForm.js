// #region [setImports]
// ------------------------------

import { useState } from 'react';

// ------------------------------
// #endregion

const useForm = callback => {
  // #region [useMorfos]
  // ------------------------------

  const [values, setValues] = useState({});

  // const handleSubmit = event => {
  //   if (event) event.preventDefault();
  //   callback();
  // };

  const handleTextChange = (value, name) => {
    // event.persist();

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

  return {
    handleTextChange,
    setAllValues,
    // handleSubmit,
    values
  };

  // ------------------------------
  // #endregion [setImports]
};

export default useForm;

/*** HOW TO USE IT ****

  // #region [setLogic]
  // ------------------------------
  
    // --- Use Form APP
    // ------------------------------

    // set Hook
    const { values, handleChange, handleSubmit } = useFormApp(login);

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
