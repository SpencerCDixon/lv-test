import React, { PropTypes } from 'react';
import { H1, P, Button } from '~/components';
import { Flex, Box } from 'reflexbox';

export default ({ 
  to = 'google.com', 
  onResults = () => alert('clicked'),  
  title = 'Title Here', 
  subtitle = 'Subtitle Here'
}) => (
  <Flex style={{width: '100%'}}>
    <Flex flexColumn>
      <H1>{title}</H1>
      <P subtle mt={2}>{subtitle}</P>
    </Flex>

    <Box flexAuto />

    <Flex align="center" mx={3}>
      <Button primary href={to}>Take Test</Button>
    </Flex>

    <Flex align="center">
      <Button primary onClick={onResults}>Enter Results</Button>
    </Flex>
  </Flex>
);
