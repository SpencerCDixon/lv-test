import React, { PropTypes } from 'react';
import css from 'next/css';

export default ({ children }) => (
  <div className={styles}>
    {children}
  </div>
)

const styles = css({
});
