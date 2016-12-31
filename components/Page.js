import React, { PropTypes } from 'react';
import css from 'next/css';

export default ({ children }) => (
  <div className={styles}>
    {children}
  </div>
)

const styles = css({
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  position: 'absolute',
});
