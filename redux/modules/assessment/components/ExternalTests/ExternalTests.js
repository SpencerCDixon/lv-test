import React, { Component, PropTypes } from 'react';
import { H1, EnterTest } from '~/components';
import { Flex, Box } from 'reflexbox';

const propTypes = {
};

class ExternalTests extends Component {
  render() {
    return (
      <Flex flexColumn style={{width: '100%'}}>
        <H1 center my={3}>Entering External Test Results</H1>

        <Flex flexColumn mt={2}>
          <EnterTest 
            title="CVI"
            subtitle="Core Values Index. Conflict Resolution"
            to="http://ciyourcvi.com"
            my={2}
          />
          <EnterTest 
            title="Time Paradox"
            subtitle="Your orientation to past, present, and future."
            to="http://www.thetimeparadox.com/zimbardo-time-perspective-inventory"
            my={2}
          />
          <EnterTest 
            title="16 Personalities"
            subtitle="Your strengths & weaknesses"
            to="https://www.16personalities.com/free-personality-test"
            my={2}
          />
        </Flex>
      </Flex>
    );
  }
}

ExternalTests.propTypes = propTypes;
export default ExternalTests;
