import React, { PropTypes } from 'react';
import { animations, colors, placeholder, lighten } from '../styles';
import { css } from 'glamor';

const activeState = { 
  borderColor: colors.primary, 
  outline: 'none',
};

export default ({ input, meta, ...rest }) => {
  const hasError = meta.touched && meta.error
  const fieldCss = css({
    width: '100%',
    padding: '13px 13px',
    borderRadius: '3px',
    border: '2px solid',
    borderColor: hasError ? colors.error : lighten(colors.lightGray, 0.3),
    color: colors.lightGray,
    boxSizing: 'border-box',
    ':focus': hasError ? {outline: 'none'} : activeState,
    ':active': hasError ? {} : activeState,
    ':hover': hasError ? {} : { borderColor: colors.lightGray },
    ...placeholder({ color: hasError ? colors.error : colors.lightGray }),
  });

  const errorCss = css({
    color: colors.error,
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
