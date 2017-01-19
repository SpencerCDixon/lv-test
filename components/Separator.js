import React, { PropTypes } from 'react';
import { colors } from '~/styles';
import { css } from 'glamor';
import { Flex } from 'reflexbox';

export default ({ }) => (
  <Flex justify="center">
    <hr className={styles} />
  </Flex>
)

const styles = css({
  width: '30%',
  borderTop: `3px double #8c8b8b`,
  margin: '30px 0',
});
