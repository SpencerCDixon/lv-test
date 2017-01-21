import React, { Component, PropTypes } from 'react';
import LearningProfileDurationForm from '~/forms/LearningProfileDurationForm';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { updateLp } from '../../duck';
import { getIsLpLoading } from '../../selectors';
import { Flex } from 'reflexbox';

const propTypes = {
  requestUpdate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

class LearningProfileDurationQuestions extends Component {
  handleSubmit = (values) => {
    this.props.requestUpdate(values);
  }

  render() {
    return (
      <LearningProfileDurationForm 
        onSubmit={this.handleSubmit} 
        isLoading={this.props.isLoading}
      />
    );
  }
}

LearningProfileDurationQuestions.propTypes = propTypes;
export default connect(
  createStructuredSelector({
    isLoading: getIsLpLoading,
  }), { requestUpdate: updateLp.request, }
)(LearningProfileDurationQuestions);
