import React from 'react';
import Router from 'next/router';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { createUser } from '../redux/modules/user/duck.js';

class FormContainer extends React.Component {
  handleSubmit = (values) => {
    Router.push('/learning_profile');
    this.props.createUser(values)
  }

  render() {
    return <SignUpForm onSubmit={this.handleSubmit} />
  }
}

export default connect(state => state, {
  createUser,
})(FormContainer);

