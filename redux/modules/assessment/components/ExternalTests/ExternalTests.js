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

        <Flex mt={4}>
          <EnterTest 
            title="CVI"
            subtitle="Core Values Index. Conflict Resolution"
            to="yourcvi.com"
          />
        </Flex>
      </Flex>
    );
  }
}

ExternalTests.propTypes = propTypes;
export default ExternalTests;
