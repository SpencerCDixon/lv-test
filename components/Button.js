import React, { PropTypes } from 'react';
import { colors, lighten } from '../styles';
import css from 'next/css';

export default ({ children, ...rest }) => (
  <button className={styles} {...rest}>
    {children}
  </button>
)

const styles = css({
  width: '100%',
  padding: '10px',
  borderRadius: '3px',
  background: colors.primary,
  color: 'white',
  textAlign: 'center',
  appearance: 'none',
  border: 'none',
  cursor: 'pointer',
  ':disabled': {
    cursor: 'not-allowed',
    background: lighten(colors.primary, 0.2),
  }
});
