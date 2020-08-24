/**
 * @fileOverview
 * @name validation.js
 * @author vmgabriel - Gabriel Vargas
 * @license GPL 3.0
 */

import validations from './validate/validations';

/**
 * Function Validate with validation Data and Change formBase with Data Entry
 * @param {object} datas - Parameter Validation data for Control.
 * @param {object} formBase - Parameter Base Form for data.
 * @param {function} validation - Parameter Validation.
 * @returns {object} Return Validation.
 */
const validateControl = (datas) => (formBase) => (validation) => {
  const result = validation(datas[formBase.name]);
  const nFormBase = {
    ...formBase,
    isError: result.error,
    messageError: result.message,
  };
  return nFormBase;
};

/**
 * Function Validate Data into formBase
 * @param {object} datas - Parameter data to eval.
 * @param {object} formBase - Parameter rules for formBase.
 * @returns {object} Return a Object with error if exist.
 */
const validate = (datas) => (formBase) => {
  const validateField = validateControl(datas)(formBase);

  let validationAttribute = {
    ...formBase,
    isError: false,
    messageError: '',
  };

  validationAttribute = validations.reduce(
    (acc, curr) => (formBase[curr.name] && !acc.isError) ? validateField(curr.funcValidation) : acc,
    validationAttribute,
  );

  return validationAttribute;
};

export default validate;
