import React, { PropTypes } from 'react';
import { P } from '~/components';
import { Flex, Box } from 'reflexbox';
import { colors } from '~/styles';
import { css } from 'glamor';

export default ({ children, active = false, onClick, ...rest }) => {
  const styles = css({
    background: active ? 'rgba(0,0,0,0.1)' : 'none',
    ':hover': {
      background: 'rgba(0,0,0,0.1)',
      cursor: 'pointer',
    }
  });
  const p = css({
    lineHeight: 1.4,
  });

  return (
    <Box flex align="center" onClick={onClick} className={styles} p={2} {...rest}>
      <P className={p}>{children}</P>
    </Box>
  );
};

