import React, { Component, PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { ClockSvg, DecisionSvg, BookSvg, Separator, SelectionBox, H1, P } from '~/components';

const propTypes = {
};

class LearningProfileQuestions extends Component {
  render() {
    return (
      <Flex flexColumn>
        <H1 >Learning Profile Directions</H1>
        <ClockSvg />
        <BookSvg />
        <DecisionSvg />
      </Flex>
    );
  }
}

LearningProfileQuestions.propTypes = propTypes;
export default LearningProfileQuestions;
