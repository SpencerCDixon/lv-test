import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../duck';
import { Flex, Box } from 'reflexbox';
import { Button, ClockSvg, DecisionSvg, BookSvg, Separator, SelectionBox, H1, P } from '~/components';

class LearningProfileDirections extends Component {
  render() {
    return (
      <Flex flexColumn>
        <H1 center my={3}>Learning Profile Directions</H1>

        <Flex justify="space-around" mt={2}>
          <Box flex flexColumn align="center" justify="center" mx={3} style={{width: '33%'}}>
            <Box>
              <BookSvg />
            </Box>
            <P center subtle mt={3}>
              Read the two paragraphs side by side.
            </P>
          </Box>

          <Box flex flexColumn align="center" justify="center" mx={3} style={{width: '33%'}}>
            <DecisionSvg />
            <P center subtle mt={3}>
              Decide which one describes you best.
            </P>
          </Box>

          <Box flex flexColumn align="center" justify="center" mx={3} style={{width: '33%'}}>
            <ClockSvg />
            <P center subtle mt={3}>
              Don’t invest more than 3 minutes deciding for each pair.
            </P>
          </Box>
        </Flex>

        <Flex my={4} justify="center">
          <Box>
            <Button onClick={() => this.props.increment('lp')} primary>
              Get Started
            </Button>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default connect(undefined, {increment})(LearningProfileDirections);
