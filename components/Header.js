import React, { PropTypes } from 'react';
import { fonts } from '~/styles';
import { css } from 'glamor';

export const Header = ({ children, level=2, center = false, ...rest }) => (
  React.createElement(
    `h${level}`,
    {className: css(base, center === true ? centered : {}), ...rest},
    children,
  )
)

const base = css({
  fontFamily: fonts.primary,
  fontWeight: 300,
});

const centered = css({
  textAlign: 'center',
});

export const H1 = props => Header({...props, level: 1});
export const H2 = Header;
export const H3 = props => Header({...props, level: 3});
export const H4 = props => Header({...props, level: 4});
export const H5 = props => Header({...props, level: 5});
export const H6 = props => Header({...props, level: 6});

export default Header;
