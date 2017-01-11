import React, { PropTypes } from 'react';
import { fonts } from '../styles';
import { css } from 'glamor';

export default ({ children, bold = false, style }) => {
  const fontWeight = bold ? 700 : 400;
  const styles = css({
    textAlign: 'center',
    fontFamily: fonts.landing,
    color: 'white',
    fontWeight,
    margin: 0,
    ...style
  });

  return (
    <h1 className={styles}>
      {children}
    </h1>
  )
}
