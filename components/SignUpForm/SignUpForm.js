import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import CtaInput from '../CtaInput';
import Button from '../Button';
import fetch from 'isomorphic-fetch';
import Api from '../../util/lvApi.js';
import { Flex, Box } from 'reflexbox';

class SignUpForm extends Component {
  render() {
    const { handleSubmit, invalid, pristine, submitting } = this.props;

    return (
      <Flex flexColumn>
        <Box my={1} style={{width: '100%'}}>
          <Field 
            name="firstName"
            component={CtaInput}
            placeholder="First Name" 
          />
        </Box>

        <Box my={1}>
          <Field 
            name="lastName"
            component={CtaInput}
            placeholder="Last Name" 
          />
        </Box>

        <Box my={1}>
          <Field 
            name="email"
            component={CtaInput}
            placeholder="Email" 
            hasBackground
          />
        </Box>

        <Box my={1}>
          <Button primary onClick={handleSubmit} disabled={invalid || pristine || submitting}>
            Become A Better Learner
          </Button>
        </Box>
      </Flex>
    );
  }
}

export default reduxForm({
  form: 'SignUpForm',
  fields: ['firstName', 'lastName', 'email'],
  validate: function(values) {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First name required to take test.';
    }

    if (!values.email) {
      errors.email = 'Email required. Don\'t worry, we hate spam too.';
    }
    return errors;
  },
})(SignUpForm);
