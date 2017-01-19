import React, { Component, PropTypes } from 'react';
import PasswordReset from '../PasswordReset';
import LearningProfileQuestions from '../LearningProfileQuestions';
import Steps from '~/components/Steps';
import { getCurrentStep } from '../../selectors';
import { connect } from 'react-redux';
import { Flex, Box } from 'reflexbox';

const steps = [
  "Create Password",
  "Take Assessment",
  "External Tests",
  "Review Results",
];

const propTypes = {
};


class AssessmentWizard extends Component {
  get content() {
    switch (this.props.currentStep) {
      case 1: 
        return <PasswordReset />;
      case 2:
        return <LearningProfileQuestions />;
    }
  }

  render() {
    const { currentStep } = this.props;

    return (
      <div>
        <Steps steps={steps} currentStep={currentStep} />
        <Flex justify="center" mt={3}>
          <Box style={{maxWidth: 750}}>
            {this.content}
          </Box>
        </Flex>
      </div>
    );
  }
}

AssessmentWizard.propTypes = propTypes;
export default connect(
  state => ({
    currentStep: getCurrentStep(state),
  }),
)(AssessmentWizard);
