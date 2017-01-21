import React, { PropTypes } from 'react';
import { fonts, colors, lighten, darken } from '../styles';
import { css } from 'glamor';

export default ({ children, primary, secondary, disabled = false, loading = false, ...rest }) => {
  let background;
  if (primary) {
    background = colors.primary;
  } else if (secondary) {
    background = colors.secondary;
  } else {
    background = colors.lightGray;
  }

  const styles = css({
    width: '100%',
    padding: loading ? '10px 10px 10px 5px' : '10px',
    borderRadius: '3px',
    color: 'white',
    appearance: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: fonts.secondary,
    textTransform: 'uppercase',
    background,
    ':disabled': {
      cursor: 'not-allowed',
      background: lighten(colors.primary, 0.2),
    },
    ':hover': { background: loading || disabled ? '' : darken(background, 0.2), },
  });

  // TODO: extract loader out into it's own component
  return (
    <button {...styles} {...rest} disabled={loading || disabled}>
      {loading &&
        <span style={{marginRight: 4}}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="14px" viewBox="0 0 24 30">
            <rect x="0" y="0" width="4" height="10" fill="#fff">
              <animateTransform attributeType="xml"
                attributeName="transform" type="translate"
                values="0 0; 0 20; 0 0"
                begin="0" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="10" y="0" width="4" height="10" fill="#fff">
              <animateTransform attributeType="xml"
                attributeName="transform" type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.2s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="20" y="0" width="4" height="10" fill="#fff">
              <animateTransform attributeType="xml"
                attributeName="transform" type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.4s" dur="0.6s" repeatCount="indefinite" />
            </rect>
          </svg>
        </span>
      }
      {children}
    </button>
  );
}

