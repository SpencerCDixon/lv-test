import React, { PropTypes } from 'react';
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
  background: '#52BAD5',
  color: 'white',
  textAlign: 'center',
  appearance: 'none',
  border: 'none',
});
