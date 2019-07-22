module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if(username.trim() === '') {
    errors.username = 'Username cannot be empty';
  }
  if(email.trim() === '') {
    errors.email = 'Email cannot be empty';
  } else {
    const regX = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if(!email.match(regX)) {
      errors.email = 'Email must be a valid email address';
    }
  }
  if(password === '') {
    errors.password = 'Password cannot be empty';
  } else if(password !== confirmPassword) {
    errors.password = 'Passwords do not match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if(username.trim() === '') {
    errors.username = 'Please enter your username';
  }
  if(password.trim() === '') {
    errors.password = 'Please enter your password';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
}