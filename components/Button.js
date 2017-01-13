import React, { PropTypes } from 'react';
import { colors, lighten } from '../styles';
import { css } from 'glamor';

export default ({ children, primary, secondary, ...rest }) => {
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
    padding: '10px',
    borderRadius: '3px',
    color: 'white',
    textAlign: 'center',
    appearance: 'none',
    border: 'none',
    cursor: 'pointer',
    background,
    ':disabled': {
      cursor: 'not-allowed',
      background: lighten(colors.primary, 0.2),
    }
  });

  return (
    <button {...styles} {...rest}>
      {children}
    </button>
  );
}

