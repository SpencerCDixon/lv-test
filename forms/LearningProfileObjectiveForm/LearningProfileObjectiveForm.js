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
              name="objective"
              component={ParagraphSelect}
              paras={[
                { val: 'independent', content: `You are your own best partner and believe that power comes from your faith in yourself. You belive you can solve any problem by looking at it objectively and gathering as much knowledge as possible. Through analysis and logic, you understand the rational course of action and then use your energy to communicate and inform others` },
                { val: 'group', content: `You know shared success is sweetest and that being accountable to a team brings out your best work. You love it when your teammates bring you their problems to help solve. Your always able to reframe it in a helpful way by asking the right question in a sensitive way. Your body language and energy express vision for the success of your team.` },
              ]}
            />
          </Box>

          <Flex mt={3} justify="flex-end" align="center">
            <Box>
              <Button
                primary
                onClick={handleSubmit}
                disabled={pristine || isLoading || invalid}
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
  form: 'LearningProfileObjectiveForm',
  fields: ['objective'],
  validate,
});
export default enhance(LearningProfileDurationForm);
