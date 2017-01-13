import React, { PropTypes } from 'react';
import { animations, colors, lighten } from '../styles';
import { css } from 'glamor';

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
    borderColor: hasError ? colors.error : lighten(colors.lightGray, 0.3),
    background: hasBackground ? 'rgba(255,255,255,0.1)' : '',
    color: 'white',
    textAlign: 'center',
    boxSizing: 'border-box',
    ':focus': hasError ? errorState : activeState,
    ':active': hasError ? errorState : activeState,
  });

  const errorCss = css({
    color: isCta ? colors.white : colors.error,
    fontSize: '.8em',
    fontStyle: 'italic',
    position: 'absolute',
    top: 15,
    right: 'initial',
    marginLeft: 10,
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
