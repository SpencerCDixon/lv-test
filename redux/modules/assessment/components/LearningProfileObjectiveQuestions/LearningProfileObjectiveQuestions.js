import React, { Component, PropTypes } from 'react';
import LearningProfileObjectiveForm from '~/forms/LearningProfileObjectiveForm';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { updateLp } from '../../duck';
import { getIsLpLoading } from '../../selectors';
import { Flex } from 'reflexbox';

const propTypes = {
  requestUpdate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

class LearningProfileObjectiveQuestions extends Component {
  handleSubmit = (values) => {
    this.props.requestUpdate(values);
  }

  render() {
    return (
      <LearningProfileObjectiveForm 
        onSubmit={this.handleSubmit} 
        isLoading={this.props.isLoading}
      />
    );
  }
}

LearningProfileObjectiveQuestions.propTypes = propTypes;
export default connect(
  createStructuredSelector({
    isLoading: getIsLpLoading,
  }), { requestUpdate: updateLp.request, }
)(LearningProfileObjectiveQuestions);
