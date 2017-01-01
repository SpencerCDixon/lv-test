import React, { PropTypes } from 'react';
import css from 'next/css';

const pulse = css.keyframes({
  '0%':   { boxShadow: '4px 4px 20px #52BAD5' },
  '50%':  { boxShadow: '4px 4px 40px #52BAD5' },
  '100%': { boxShadow: '4px 4px 20px #52BAD5' }
});

const activeState = {
  borderColor: '#52BAD5',
  animation: `${pulse} 2s infinite`,
};

export default ({ field, ...rest }) => {
  const hasError = field.meta.touched && field.meta.error
  const input = css({
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
  const error = css({
    color: 'red',
  });

  return (
    <div>
      <input className={input} {...field.input} {...rest} />
      {field.meta.touched && field.meta.error && <span className={error}>{field.meta.error}</span>}
    </div>
  )
};
