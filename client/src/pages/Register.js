import React, {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';
import gql from 'graphql-tag';

const Register = () => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault();

  }

  return (
    <div>
      <Form onSubmit={onSubmit} novalidate>
        <h1>Register</h1>
        <Form.Input 
          label="Username"
          name="username"
          value={values.username}
          onChange={onChange}
        />
        <Form.Input 
          label="Email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
        <Form.Input 
          label="Password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
        <Form.Input 
          label="Confirm Password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
        />
        <Button type="submit" primary>Register</Button>
      </Form>
    </div>
  )
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!,
    $email: String!,
    $password: String!,
    confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username,
        email: $email,
        password: $password,
        confirmPassword: $confirmPassword
      }
    ) {
        id
        email
        username
        createdAt
        token
      }
  }
`;

export default Register;