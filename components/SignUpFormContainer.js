import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { createUser } from '../redux/modules/user/duck.js';

class FormContainer extends React.Component {
  render() {
    return <SignUpForm onSubmit={this.props.createUser} />
  }
}

export default connect(state => state, {
  createUser,
})(FormContainer);

