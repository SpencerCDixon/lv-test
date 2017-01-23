import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Flex, Box } from 'reflexbox';
import { H1, Input, Button } from '~/components';
import validate from './validate';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  submitText: PropTypes.string,
};

const defaultProps = {
  submitText: 'Save Results',
};

class CviResultsForm extends Component {
  render() {
    const { handleSubmit, invalid, pristine, submitting } = this.props;

    return (
      <Flex flexColumn p={3}>
        <H1>Enter Your CVI Results</H1>
        <Box my={2}>
          <Field
            name="primary"
            placeholder="Primary Trait"
            component={Input}
          />
        </Box>

        <Box my={2}>
          <Field
            name="secondary"
            placeholder="Secondary Trait"
            component={Input}
          />
        </Box>

        <Box mt={2} flex justify="flex-end" align="center">
          <Button
            primary
            onClick={handleSubmit}
            disabled={pristine || submitting || invalid}
          >
            {this.props.submitText}
          </Button>
        </Box>
      </Flex>
    );
  }
}

CviResultsForm.propTypes = propTypes;
CviResultsForm.defaultProps = defaultProps;
const enhance = reduxForm({
  form: 'CviResultsForm',
  fields: ['primary', 'secondary'],
  validate,
});
export default enhance(CviResultsForm);
