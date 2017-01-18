import React, { Component, PropTypes } from 'react';
import PasswordReset from '../PasswordReset';
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
        return <h2> Second Step </h2>;
    }
  }

  render() {
    const { currentStep } = this.props;

    return (
      <div>
        <Steps steps={steps} currentStep={currentStep} />
        <Flex flexColumn justify="center" align="center" mt={3}>
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
