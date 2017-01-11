import React, { PropTypes } from 'react';
import { fonts } from '~/styles';
import { css } from 'glamor';

export const Header = ({ children, level=2, ...rest }) => (
  React.createElement(
    `h${level}`,
    {className: header, ...rest},
    children,
  )
)

const header = css({
  fontFamily: fonts.primary,
});

export default Header;
