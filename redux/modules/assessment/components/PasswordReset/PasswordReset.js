import React, { Component, PropTypes } from 'react';
import { Button, P, H1 } from '~/components';
import Input from '~/components/Input';
import { Flex, Box } from 'reflexbox';
import { reduxForm, Field } from 'redux-form';

const sx = {
  maxWidth: 750,
};

class PasswordReset extends Component {
  state = {
    isLoading: false
  }
  handleClick = () => this.setState({isLoading: !this.state.isLoading})

  render() {
    return (
      <Flex flexColumn mx={1} style={sx}>
        <H1>Saving Your Learning Profile</H1>
        <P>
          In order to save your results you must set up a password which will be
          associated to your email.  If you'd prefer to continue without access
          to your results feel free to click 'Skip'.
        </P>

        <Box my={3}>
          <Field 
            label="Password"
            name="newPassword" 
            component={Input}
            placeholder="New Password"
          />
        </Box>
        <Flex justify="flex-end">
          <Box mx={2}>
            <Button>Skip</Button>
          </Box>
          <Box>
            <Button primary loading={this.state.isLoading} onClick={this.handleClick}>Save</Button>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default reduxForm({
  form: 'PasswordResetForm',
  fields: ['newPassword'],
  validate: function(values) {
    const errors = {};
    if (!values.newPassword) {
      errors.newPassword = 'Required';
    }
    return errors;
  },
})(PasswordReset);
