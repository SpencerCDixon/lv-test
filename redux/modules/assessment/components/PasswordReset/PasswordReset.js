import React, { Component, PropTypes } from 'react';
import { P, H1 } from '~/components';
import { Flex } from 'reflexbox';

const sx = {
  maxWidth: 750,
};

export class PasswordReset extends Component {
  render() {
    return (
      <Flex flexColumn mx={1} style={sx}>
        <H1>Saving Your Learning Profile</H1>
        <P>
          In order to save your results you must set up a password which will be
          associated to your email.  If you'd prefer to continue without access
          to your results feel free to click 'Skip'.
        </P>
      </Flex>
    );
  }
}

export default PasswordReset;
