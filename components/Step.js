import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { fonts, colors } from '~/styles';
import { css } from 'glamor';

export default ({ title, num, active = false }) => {
  const common = {
    fontFamily: fonts.secondary,
    color: active ? colors.primary : colors.lightGray,
  };

  const boxStyle = css({
    width: 120,
    height: 75,
    border: `1px solid ${active ? colors.primary : colors.lightGray}`,
    borderRadius: '3px',
    ...common,
  });
  const numStyle = css({
    marginTop: 9,
    marginBottom: 11,
    textAlign: 'center',
    fontSize: 24,
  });
  const titleStyle = css({
    marginBottom: 14,
    textAlign: 'center',
    fontSize: 13,
  });

  return (
    <Flex flexColumn className={boxStyle}>
      <Box className={numStyle}>
        {num}
      </Box>
      <Box align="center" className={titleStyle}>
        {title}
      </Box>
    </Flex>
  );
};

