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
  fontWeight: 300,
});

export const H1 = props => Header({...props, level: 1});
export const H2 = Header;
export const H3 = props => Header({...props, level: 3});
export const H4 = props => Header({...props, level: 4});
export const H5 = props => Header({...props, level: 5});
export const H6 = props => Header({...props, level: 6});

export default Header;
