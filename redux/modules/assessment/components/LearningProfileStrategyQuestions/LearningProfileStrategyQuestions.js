import React, { Component, PropTypes } from 'react';
import LearningProfileStrategyForm from '~/forms/LearningProfileStrategyForm';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { updateLp } from '../../duck';
import { getIsLpLoading } from '../../selectors';
import { Flex } from 'reflexbox';

const propTypes = {
  requestUpdate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

class LearningProfileStrategyQuestions extends Component {
  handleSubmit = (values) => {
    this.props.requestUpdate(values);
  }

  render() {
    return (
      <LearningProfileStrategyForm 
        onSubmit={this.handleSubmit} 
        isLoading={this.props.isLoading}
      />
    );
  }
}

LearningProfileStrategyQuestions.propTypes = propTypes;
export default connect(
  createStructuredSelector({
    isLoading: getIsLpLoading,
  }), { requestUpdate: updateLp.request, }
)(LearningProfileStrategyQuestions);
