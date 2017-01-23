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

class TimeParadoxResultsForm extends Component {
  render() {
    const { handleSubmit, invalid, pristine, submitting } = this.props;

    return (
      <Flex flexColumn p={3}>
        <H1>Enter Your Time Paradox Results</H1>
        <Box my={2}>
          <Field
            name="pastNegative"
            placeholder="Past Negative"
            component={Input}
            type="number"
            step="0.01"
          />
        </Box>

        <Box my={2}>
          <Field
            name="pastPositive"
            placeholder="Past Positive"
            component={Input}
            type="number"
            step="0.01"
          />
        </Box>

        <Box my={2}>
          <Field
            name="presentFatalistic"
            placeholder="Present Fatalistic"
            component={Input}
            type="number"
            step="0.01"
          />
        </Box>

        <Box my={2}>
          <Field
            name="presentHedonistic"
            placeholder="Present Hedonistic"
            component={Input}
            type="number"
            step="0.01"
          />
        </Box>

        <Box my={2}>
          <Field
            name="future"
            placeholder="Future"
            component={Input}
            type="number"
            step="0.01"
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

TimeParadoxResultsForm.propTypes = propTypes;
TimeParadoxResultsForm.defaultProps = defaultProps;
const enhance = reduxForm({
  form: 'TimeParadoxResultsForm',
  fields: ['pastNegative', 'pastPositive', 'presentFatalistic', 'presentHedonistic', 'future'],
  validate,
});
export default enhance(TimeParadoxResultsForm);
