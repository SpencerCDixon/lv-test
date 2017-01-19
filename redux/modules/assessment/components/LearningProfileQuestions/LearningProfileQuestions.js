import React, { Component, PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { H1, P } from '~/components';

const propTypes = {
};

class LearningProfileQuestions extends Component {
  render() {
    return (
      <Flex flexColumn>
        <H1>Learning Profile Directions</H1>
        <P>
          Below are a series of questions for you to answer.  There will be two paragraphs describing how people tend 
          to approach learning situations.  Read each paragraph and decide which one you relate to most.  Don't spend more than a minute on each question.
        </P>
        <Flex>
          <Box mx={2}>
            <P>
              You like to see the finsh line when you start an adventure. Progress is what you can touch with your hands, and the next step is usually improvised based on an observation or opportunity you just noticed. You usually get discouraged if you project seems like it's taking too long.
            </P>
          </Box>
          <Box mx={2}>
            <P>
              You believe the best things come to those who wait and the longer the adventure the better. You know the future is uncertain and that's why you plan for it. Your past adventures propell you to dream bigger, and you often imagine accomplishing your goals. You persevere in the face of long odds by adapting and modifying your the finish line to make success inevitable.
            </P>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

LearningProfileQuestions.propTypes = propTypes;
export default LearningProfileQuestions;
