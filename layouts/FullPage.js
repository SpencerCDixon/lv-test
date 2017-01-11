import React, { PropTypes } from 'react';
import css from 'next/css';

export const FullPage = ({ children, ...rest }) => (
  <div className={styles} {...rest}>
    {children}
  </div>
)

const styles = css({
  height: '100vh',
  width: '100%',
  top: 0,
  left: 0,
  position: 'absolute',
});

export default FullPage;
