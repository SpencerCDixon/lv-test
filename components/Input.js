import React, { PropTypes } from 'react';
import css from 'next/css';

export default ({ children, ...rest }) => (
  <input className={styles} {...rest} />
)

const styles = css({
  width: '100%',
  padding: '10px',
  borderRadius: '3px',
  border: '2px solid #979797',
  background: 'rgba(255,255,255,0.1)',
  color: 'white',
  textAlign: 'center',
  boxSizing: 'border-box',
});
