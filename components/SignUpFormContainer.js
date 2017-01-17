import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { signUpUser } from '../redux/modules/user/duck.js';

class FormContainer extends React.Component {
  render() {
    return <SignUpForm onSubmit={this.props.signUpUser} />
  }
}

export default connect(state => state, {
  signUpUser,
})(FormContainer);

