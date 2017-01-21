import React, { PropTypes } from 'react';
import { withReflex } from 'reflexbox';
import { fonts } from '~/styles';
import { css } from 'glamor';

const P = ({ children, ...rest }) => (
  <p className={psx} {...rest}>
    {children}
  </p>
)

const psx = css({
  fontFamily: fonts.secondary,
  margin: 0,
});

export default withReflex()(P);
