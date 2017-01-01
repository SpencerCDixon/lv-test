import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../Input';
import Button from '../Button';
import fetch from 'isomorphic-fetch';
import Api from '../../util/lvApi.js';
import { Flex, Box } from 'reflexbox';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.api = new Api();
  }

  handleSubmit = () => {
    console.log('DISPATCHING');
  }

  render() {
    return (
      <Flex flexColumn>
        <Box my={1} style={{width: '100%'}}>
          <Field 
            name="firstName"
            component={Input}
            placeholder="First Name" 
          />
        </Box>

        <Box my={1}>
          <Field 
            name="lastName"
            component={Input}
            placeholder="Last Name" 
          />
        </Box>

        <Box my={1}>
          <Field 
            name="email"
            component={Input}
            placeholder="Email" 
          />
        </Box>

        <Box my={1}>
          <Button onClick={this.handleSubmit}>
            Become A Better Learner
          </Button>
        </Box>
      </Flex>
    );
  }
}

export default reduxForm({
  form: 'SignUpForm',
  validate: function(values) {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First name required to take test.';
    }

    if (!values.email) {
      errors.email = 'Email required. We will never spam.';
    }
    return errors;
  },
})(SignUpForm);
