import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input, Button, P, H1 } from '~/components';
import { Flex, Box } from 'reflexbox';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { updatePassword, increment } from '../../duck';
import { getIsPassUpdating } from '../../selectors';

const sx = {
  maxWidth: 750,
};
const propTypes = {
  increment: PropTypes.func.isRequired,
  requestPasswordUpdate: PropTypes.func.isRequired,
  isUpdating: PropTypes.bool.isRequired,
};

class PasswordReset extends Component {
  render() {
    const { isUpdating } = this.props;

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
            type="password"
          />
        </Box>
        <Flex justify="flex-end">
          <Box mx={2}>
            <Button onClick={this.props.increment}>Skip</Button>
          </Box>
          <Box>
            <Button primary loading={isUpdating} onClick={this.props.requestPasswordUpdate}>
              Save
            </Button>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

const enhance = compose(
  reduxForm({
    form: 'PasswordResetForm',
    fields: ['newPassword'],
    validate: function(values) {
      const errors = {};
      if (!values.newPassword) {
        errors.newPassword = 'Required';
      }
      return errors;
    },
  }),
  connect(
    state => ({
      isUpdating: getIsPassUpdating(state),
    }),
    { increment, requestPasswordUpdate: updatePassword.request }
  ),
);
PasswordReset.propTypes = propTypes;
export default enhance(PasswordReset);
