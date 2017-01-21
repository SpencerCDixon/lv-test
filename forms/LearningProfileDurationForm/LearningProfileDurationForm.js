import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Flex, Box } from 'reflexbox';
import { ParagraphSelect, Button, H1 } from '~/components';
import validate from './validate';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  isLoading: PropTypes.bool,
  submitText: PropTypes.string,
};

const defaultProps = {
  submitText: 'Next',
};

class LearningProfileDurationForm extends Component {
  render() {
    const { handleSubmit, invalid, pristine, isLoading, submitText } = this.props;

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
                { val: 'short', content: `You like to see the finsh line when you start an adventure. Progress is what you can touch with your hands, and the next step is usually improvised based on an observation or opportunity you just noticed. You usually get discouraged if you project seems like it's taking too long.` },
                { val: 'long', content: `You believe the best things come to those who wait and the longer the adventure the better. You know the future is uncertain and that's why you plan for it. Your past adventures propell you to dream bigger, and you often imagine accomplishing your goals. You persevere in the face of long odds by adapting and modifying your the finish line to make success inevitable.` },
              ]}
            />
          </Box>

          <Flex mt={3} justify="flex-end" align="center">
            <Box>
              <Button
                primary
                onClick={handleSubmit}
                disabled={pristine || submitting || invalid}
                loading={isLoading}
              >
                {submitText}
              </Button>
            </Box>
          </Flex>
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
