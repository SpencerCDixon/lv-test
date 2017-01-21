import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Flex, Box } from 'reflexbox';
import { ParagraphSelect, Button, H1 } from '~/components';
import validate from './validate';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  submitText: PropTypes.string,
};

const defaultProps = {
  submitText: 'Save',
};

class LearningProfileDurationForm extends Component {
  render() {
    const { handleSubmit, invalid, pristine, submitting, submitText } = this.props;

    // TODO: look into why this is forcing me to add widht 100% this is BS
    return (
      <Flex flexColumn style={{width: '100%'}}>
        <H1 center my={3}>Which paragraph describes you best?</H1>

        <Flex flexColumn>
          <Box>
            <Field
              name="duration"
              component={ParagraphSelect}
              paras={[
                { val: 'short', content: 'Some content here' },
                { val: 'long', content: 'Some other content here' },
              ]}
            />
          </Box>

          <Box mt={2} flex justify="flex-end" align="center">
            <Button
              primary
              onClick={handleSubmit}
              disabled={pristine || submitting || invalid}
            >
              {submitText}
            </Button>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

LearningProfileDurationForm.propTypes = propTypes;
LearningProfileDurationForm.defaultProps = defaultProps;
const enhance = reduxForm({
  form: 'LearningProfileDurationForm',
  fields: ['duration'],
  validate,
});
export default enhance(LearningProfileDurationForm);
