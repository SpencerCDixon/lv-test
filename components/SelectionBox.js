import React, { PropTypes } from 'react';
import { P } from '~/components';
import { Flex, Box } from 'reflexbox';
import { colors } from '~/styles';
import { css } from 'glamor';

export default ({ children, ...rest }) => (
  <Box className={styles} p={2} {...rest}>
    <P>{children}</P>
  </Box>
);

const styles = css({
  ':hover': {
    background: 'rgba(0,0,0,0.05)',
    cursor: 'pointer',
  }
});
