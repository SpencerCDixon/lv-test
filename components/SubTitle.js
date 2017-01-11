import React, { PropTypes } from 'react';
import { fonts } from '../styles';
import { css } from 'glamor';

export default ({ children }) => (
  <h2 className={styles}>
    {children}
  </h2>
)

const styles = css({
  color: 'white',
  opacity: '0.5',
  fontFamily: fonts.primary,
  fontWeight: 700,
  letterSpacing: '2px',
  fontSize: '11px',
  textTransform: 'uppercase',
});
