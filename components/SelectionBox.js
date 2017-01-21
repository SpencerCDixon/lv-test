import React, { PropTypes } from 'react';
import { P } from '~/components';
import { Flex, Box } from 'reflexbox';
import { colors } from '~/styles';
import { css } from 'glamor';

export default ({ children, active = false, onClick, ...rest }) => {
  const styles = css({
    background: active ? 'rgba(0,0,0,0.05)' : 'none',
    ':hover': {
      background: 'rgba(0,0,0,0.05)',
      cursor: 'pointer',
    }
  });

  return (
    <Box onClick={onClick} className={styles} p={2} {...rest}>
      <P>{children}</P>
    </Box>
  );
};

