import React, { PropTypes } from 'react';
import { withReflex } from 'reflexbox';
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
  margin: 0,
  fontFamily: fonts.primary,
  fontWeight: 300,
});

const centered = css({
  textAlign: 'center',
});

export const H1 = withReflex()(props => Header({...props, level: 1}));
export const H2 = withReflex()(Header);
export const H3 = withReflex()(props => Header({...props, level: 3}));
export const H4 = withReflex()(props => Header({...props, level: 4}));
export const H5 = withReflex()(props => Header({...props, level: 5}));
export const H6 = withReflex()(props => Header({...props, level: 6}));

export default Header;
