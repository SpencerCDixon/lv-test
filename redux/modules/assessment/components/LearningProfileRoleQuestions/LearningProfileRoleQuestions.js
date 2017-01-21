import React, { Component, PropTypes } from 'react';
import LearningProfileRoleForm from '~/forms/LearningProfileRoleForm';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { updateLp } from '../../duck';
import { getIsLpLoading } from '../../selectors';
import { Flex } from 'reflexbox';

const propTypes = {
  requestUpdate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

class LearningProfileRoleQuestions extends Component {
  handleSubmit = (values) => {
    this.props.requestUpdate(values);
  }

  render() {
    return (
      <LearningProfileRoleForm 
        onSubmit={this.handleSubmit} 
        isLoading={this.props.isLoading}
      />
    );
  }
}

LearningProfileRoleQuestions.propTypes = propTypes;
export default connect(
  createStructuredSelector({
    isLoading: getIsLpLoading,
  }), { requestUpdate: updateLp.request, }
)(LearningProfileRoleQuestions);
