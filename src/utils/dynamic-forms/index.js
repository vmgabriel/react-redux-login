/**
 * @fileOverview
 * @name index.js
 * @author vmgabriel
 * @license gpl3
 */

/**
 * Change Value of One Field With Valid Id
 * @param {object} field - Fields to Change.
 * @param {Array<object>} restField - Rest of Fields.
 * @returns {Array<object>} The State of Fields Changed.
 */
export const changeValueById = ([field, ...restField]) => (id) => (value) => {
  if (!field) return [];
  const uField = (field.id !== id) ? field : { ...field, value };
  return [uField].concat(changeValueById(restField)(id)(value));
};

/**
 * Function description.
 * @param {object} field - Field to Get Value
 * @param {Array<object>} restField - Rest of fields
 * @returns {object} The State of Fields Changed.
 */
export const getValues = ([field, ...restField]) => (values = {}) => {
  if (!field) return values;
  const value = (field.type === 'button') ? values : { ...values, [field.name]: field.value };
  return {
    ...value,
    ...getValues(restField)(value),
  };
};

/**
 * Clear All values in Array of Fields
 * @param {object} field - field to change value.
 * @param {Array<object>} restField - fields to change value.
 * @returns {Array<object>} Fields with data Cleared
 */
export const clearValues = ([field, ...restField]) => {
  if (!field) return [];
  const uField = { ...field, value: '' };
  return [uField].concat(clearValues(restField));
};
