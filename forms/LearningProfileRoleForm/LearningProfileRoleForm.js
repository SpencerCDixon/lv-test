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

class LearningProfileRoleForm extends Component {
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
                { val: 'leader', content: `You always seem to be able to connect with people and find a new way to solve their problems. You take joy in connecting possibilities and questioning the assumptions. You're quick to share a pesonal story and always attentive to the interest of your audience. You love seeing other people succeed and finding win-win situations where other people say it can't been done.` },
                { val: 'follower', content: `You prefer to be helpful behind the scenes than to have the spotlight yourself. You prefer to get your work done on your own, but are happy to help when people ask. You work carefully to organize your thoughts and share it selectively to those few people you feel comfortable confiding in. You can shut down quickly if you're in an uncomfortable environment, but if you trust your teammates than you can be a valuable contributor` },
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

LearningProfileRoleForm.propTypes = propTypes;
LearningProfileRoleForm.defaultProps = defaultProps;
const enhance = reduxForm({
  form: 'LearningProfileRoleForm',
  fields: ['role'],
  validate,
});
export default enhance(LearningProfileRoleForm);
