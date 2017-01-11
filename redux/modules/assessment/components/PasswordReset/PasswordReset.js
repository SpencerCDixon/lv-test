import React, { Component, PropTypes } from 'react';
import { Header } from '~/components';

const propTypes = {
};

export class PasswordReset extends Component {
  render() {
    return (
      <div>
        <Header>Saving Your Learning Profile</Header>
      </div>
    );
  }
}

PasswordReset.propTypes = propTypes;
export default PasswordReset;
