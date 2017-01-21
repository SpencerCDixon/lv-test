import React, { Component, PropTypes } from 'react';
import PasswordReset from '../PasswordReset';
import LearningProfileQuestions from '../LearningProfileQuestions';
import ExternalTests from '../ExternalTests';
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
  currentStep: PropTypes.number.isRequired,
};

class AssessmentWizard extends Component {
  get content() {
    switch (this.props.currentStep) {
      case 1: 
        return <PasswordReset />;
      case 2:
        return <LearningProfileQuestions />;
      case 3:
        return <ExternalTests />
      default:
        return <h1>Uh oh. Something bad happened.</h1>;
    }
  }

  render() {
    const { currentStep } = this.props;

    return (
      <div>
        <Steps steps={steps} currentStep={currentStep} />
        <Flex mt={3}>
          {this.content}
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
