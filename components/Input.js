import React, { PropTypes } from 'react';
import { animations, colors } from '../styles';
import css from 'next/css';

const pulse = css.keyframes({
  '0%':   { boxShadow: '4px 4px 20px #52BAD5' },
  '50%':  { boxShadow: '4px 4px 40px #52BAD5' },
  '100%': { boxShadow: '4px 4px 20px #52BAD5' }
});

const activeState = {
  borderColor: colors.primary,
  animation: `${animations.primaryPulse} 2s infinite`,
};

const errorState = {
  animation: `${animations.errorPulse} 2s infinite`,
};

export default ({ input, meta, ...rest }) => {
  const hasError = meta.touched && meta.error
  const fieldCss = css({
    width: '100%',
    padding: '10px',
    borderRadius: '3px',
    border: '2px solid',
    borderColor: hasError ? colors.error : colors.lightGray,
    background: 'rgba(255,255,255,0.1)',
    color: 'white',
    textAlign: 'center',
    boxSizing: 'border-box',
    ':focus': hasError ? errorState : activeState,
    ':active': hasError ? errorState : activeState,
  });

  const errorCss = css({
    color: colors.error,
    fontSize: '.8em',
    fontStyle: 'italic',
    position: 'absolute',
    top: 15,
    right: 'initial',
    marginLeft: 5,
    animation: `${animations.fadeIn} .5s`,
    width: '100%',
  });

  return (
    <div style={{position: 'relative'}}>
      <input className={fieldCss} {...input} {...rest} />
      {meta.touched && meta.error && <span className={errorCss}>{meta.error}</span>}
    </div>
  )
};
