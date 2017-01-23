const inRange = num => {
  return num > 0 && num < 5;
}

const validate = values => {
  const errors = {};
  const requiredFields = [
    'pastNegative', 'pastPositive', 
    'presentFatalistic', 'presentHedonistic', 
    'future'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  requiredFields.forEach(field => {
    if (!inRange(parseInt(values[field], 10))) {
      errors[field] = 'Value must be between 0 - 5';
    }
  });

  return errors;
}

export default validate;
