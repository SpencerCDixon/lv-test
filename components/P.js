import React, { PropTypes } from 'react';
import { fonts } from '~/styles';
import { css } from 'glamor';

export const P = ({ children }) => (
  <p className={psx}>
    {children}
  </p>
)

const psx = css({
  fontFamily: fonts.secondary,
});

export default P;
