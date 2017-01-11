import React, { PropTypes } from 'react';
import Step from './Step';
import { Flex, Box } from 'reflexbox';

const Steps = ({ steps = [], currentStep }) => (
  <Flex justify="space-around" wrap style={{width: '100%'}}>
    {steps.map((title, i) => (
      <Box my={2}>
        <Step 
          title={title} 
          active={i + 1 <= currentStep} 
          num={i + 1} 
        />
      </Box>
    ))}
  </Flex>
)
Steps.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Steps;
