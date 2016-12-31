import React, { PropTypes } from 'react';
import css from 'next/css';

export default ({ children, ...rest }) => (
  <input className={styles} {...rest} />
)

const pulse = css.keyframes({
  '0%':   { boxShadow: '4px 4px 20px #52BAD5' },
  '50%':  { boxShadow: '4px 4px 40px #52BAD5' },
  '100%': { boxShadow: '4px 4px 20px #52BAD5' }
});

const activeState = {
  borderColor: '#52BAD5',
  animation: `${pulse} 2s infinite`,
};

const styles = css({
  width: '100%',
  padding: '10px',
  borderRadius: '3px',
  border: '2px solid #979797',
  background: 'rgba(255,255,255,0.1)',
  color: 'white',
  textAlign: 'center',
  boxSizing: 'border-box',
  ':focus': activeState,
  ':active': activeState,
});
