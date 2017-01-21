import React, { PropTypes } from 'react';
import { withReflex } from 'reflexbox';
import { colors, fonts } from '~/styles';
import { css } from 'glamor';

const P = ({ children, subtle = false, center = false, ...rest }) => {
  const psx = css({
    fontFamily: fonts.secondary,
    margin: 0,
    color: subtle ? colors.lightGray : colors.black,
    textAlign: center ? 'center' : '',
  });

  return (
    <p className={psx} {...rest}>
      {children}
    </p>
  );
};

export default withReflex()(P);
