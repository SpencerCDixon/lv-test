import React, { PropTypes } from 'react';
import { fonts } from '../styles';
import css from 'next/css';

export default ({ children, bold = false }) => {
  const fontWeight = bold ? 700 : 400;
  const styles = css({
    textAlign: 'center',
    fontFamily: fonts.primary,
    color: 'white',
    fontWeight,
    margin: 0,
  });

  return (
    <h1 className={styles}>
      {children}
    </h1>
  )
}

const styles = css({
});
