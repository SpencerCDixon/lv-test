import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLpStep } from '../../selectors';
import LearningProfileDirections from '../LearningProfileDirections';

class LearningProfileQuestions extends Component {
  get content() {
    switch (this.props.step) {
      case 1:
        return <LearningProfileDirections />;
      default:
        return <h1>Learning Profile</h1>;
    }
  }

  render() {
    debugger;
    return this.content;
  }
}

export default connect(
  createStructuredSelector({
    step: getLpStep,
  })
)(LearningProfileQuestions);
