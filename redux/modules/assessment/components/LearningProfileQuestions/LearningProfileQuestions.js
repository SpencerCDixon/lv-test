import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLpStep } from '../../selectors';

// Steps for the LP assessment
import LearningProfileDirections from '../LearningProfileDirections';
import LearningProfileDurationQuestions from '../LearningProfileDurationQuestions';
import LearningProfileObjectiveQuestions from '../LearningProfileObjectiveQuestions';

class LearningProfileQuestions extends Component {
  static propTypes = {
    step: PropTypes.number.isRequired,
  }

  get content() {
    switch (this.props.step) {
      case 1:
        return <LearningProfileDirections />;
      case 2:
        return <LearningProfileDurationQuestions />;
      case 3:
        return <LearningProfileObjectiveQuestions />;
      default:
        return <h1>Learning Profile</h1>;
    }
  }

  render() {
    return this.content;
  }
}

export default connect(
  createStructuredSelector({
    step: getLpStep,
  })
)(LearningProfileQuestions);
