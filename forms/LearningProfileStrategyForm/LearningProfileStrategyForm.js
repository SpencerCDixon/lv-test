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

class LearningProfileStrategyForm extends Component {
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
                { val: 'mind', content: `You consider all the possible paths forward and often uncover a direction everyone else missed.  You gather and organize data to reveal new opportunities by thinking systematicly from first principles. You believe you can brainstorm a solution to every problem by formulating the right questions, gathering knowledge, and considering alternatives.` },
                { val: 'hand', content: `You believe whats tangible is real and that the best type of interaction is always face-to-face. You know that taking action the fastest, most practical solution, and you value people who can make decisions and move quickly. You love it when the results speak for themselves and wow people. You balance your vision with realism when looking for opportunities, and usually settle on the pragmatic option.` },
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

LearningProfileStrategyForm.propTypes = propTypes;
LearningProfileStrategyForm.defaultProps = defaultProps;
const enhance = reduxForm({
  form: 'LearningProfileStrategyForm',
  fields: ['strategy'],
  validate,
});
export default enhance(LearningProfileStrategyForm);
