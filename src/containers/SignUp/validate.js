import moment from 'moment';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'day',
    'month',
    'year',
    'email',
    'password',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.year&&values.year.length < 4) {
    errors.year = 'year should be YYYY';
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (values.password&&values.password.length < 6) {
    errors.password = 'less than 6';
  }
  if (values.confPassword !== values.password) {
    errors.confPassword = 'not eaqual';
  }

  return errors;
};

export default validate;

export const between = (min,max) => (value) => {
  if (!value) {
    return value
  }
  const onlyNums = +value.replace(/[^\d]/g, '')
  if(onlyNums > max) {
    return max;
  }

  if(onlyNums < min) {
    return min;
  }
  return onlyNums
}

export const numberX = (x) => (value) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')

  return onlyNums.slice(0,x)
}

export const checkDate = (dd,mm,yy) =>
  moment(`${dd}/${mm}/${yy}`,'DD/MM/YYYY').isValid()

export const getAge = (dd,mm,yy) =>
  Number.parseInt(moment(`${dd}/${mm}/${yy}`,'DD/MM/YYYY').fromNow(), 10)