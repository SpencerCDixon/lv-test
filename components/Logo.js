import React, { PropTypes } from 'react';
import css from 'next/css';

export default ({ black = false }) => (
  <img src={`/static/logo-${black ? 'black' : 'white'}.svg`} width="150" />
)
