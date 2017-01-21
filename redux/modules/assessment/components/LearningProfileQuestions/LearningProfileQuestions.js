import React, { Component, PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { ClockSvg, DecisionSvg, BookSvg, Separator, SelectionBox, H1, P } from '~/components';

class LearningProfileQuestions extends Component {
  render() {
    return (
      <Flex flexColumn style={{width: '100%'}}>
        <H1 center my={3}>Learning Profile Directions</H1>
        <Flex justify="space-around">
          <ClockSvg />
          <BookSvg />
          <DecisionSvg />
        </Flex>
      </Flex>
    );
  }
}

export default LearningProfileQuestions;
