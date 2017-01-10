import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { requestCreateUser } from '../redux/modules/user/duck.js';

class FormContainer extends React.Component {
  render() {
    return <SignUpForm onSubmit={this.props.requestCreateUser} />
  }
}

export default connect(state => state, {
  requestCreateUser,
})(FormContainer);

