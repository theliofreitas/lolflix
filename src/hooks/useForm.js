import { useState, useEffect } from 'react';

function useForm(valoresIniciais, validate) {
  const [values, setValues] = useState(valoresIniciais);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute('name');
    setTouched({
      ...touched,
      [fieldName]: true,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  function setNewValues(newValues) {
    setValues(newValues);
  }

  function validateValues(valuesToValidade) {
    setErrors(validate(valuesToValidade));
  }

  return {
    values,
    handleBlur,
    handleChange,
    clearForm,
    setNewValues,
    errors,
    setErrors,
    validateValues,
    touched,
    setTouched,
  };
}

export default useForm;
