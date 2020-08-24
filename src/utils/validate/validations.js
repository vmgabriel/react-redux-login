/**
 * @fileOverview
 * @name validations.js
 * @author vmgabriel - Gabriel Vargas
 * @license GPL 3.0
 */

// Constants
const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const min = 3;
const max = 40;

const notError = { error: false, message: '' };

/**
  * Validation Email Data
  * params {data: string} - Data to Verify
  * return {error: boolean, message: string} - is Valid Email
  */
const isValidateEmail = (data) => (
  (!reEmail.test(data.toLowerCase())) ? { error: true, message: 'Email not Valid' } : notError
);

/**
 * Validation Clear Data
 * params {data: string | undefined} - Data to Verify
 * return {error: boolean, message: string} - is Data no Valid
 */
const isValidateClear = (data) => (
  (!data || data === '') ? { error: true, message: 'Data clear' } : notError
);

/**
 * Validation of Min Data.
 * @param {string} data - Data to eval min
 */
const isValidateMin = (data) => (
  (data.length <= min) ? { error: true, message: 'Data is very small' } : notError
);

/**
 * Validation of Max Data.
 * @param {string} data - Data to eval max
 */
const isValidateMax = (data) => (
  (data.length > max) ? { error: true, message: 'Data is very long' } : notError
);

/**
 * Validation Data to Verify
 */
const validations = [
  { name: 'required', funcValidation: isValidateClear },
  { name: 'isEmail', funcValidation: isValidateEmail },
  { name: 'min', funcValidation: isValidateMin },
  { name: 'max', funcValidation: isValidateMax },
];

export default validations;
