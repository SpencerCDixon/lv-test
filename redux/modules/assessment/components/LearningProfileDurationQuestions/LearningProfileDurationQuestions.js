import React, { Component, PropTypes } from 'react';
import LearningProfileDurationForm from '~/forms/LearningProfileDurationForm';
import { connect } from 'react-redux';
import { increment } from '../../duck';
import { Flex } from 'reflexbox';

const propTypes = {
  increment: PropTypes.func.isRequired,
};

class LearningProfileDurationQuestions extends Component {
  handleSubmit = () => {
    this.props.increment('lp');
  }

  render() {
    return <LearningProfileDurationForm onSubmit={this.handleSubmit} />;
  }
}

LearningProfileDurationQuestions.propTypes = propTypes;
export default connect(undefined, { 
  increment,
})(LearningProfileDurationQuestions);
