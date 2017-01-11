import React, { PropTypes } from 'react';
import { css } from 'glamor';

export default ({ children }) => (
  <div className={styles}>
    {children}
  </div>
)

const styles = css({
});
