import React, { PropTypes } from 'react';
import { css } from 'glamor';

export default ({ children }) => (
  <div className={styles} />
)

const top = css.keyframes({
  'from': {
    opacity: '0',
  },
  'to': {
    opacity: '.30',
  },
});

const styles = css({
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  background: 'url(/static/bg-landing.jpg) center no-repeat',
  position: 'absolute',
  backgroundSize: 'cover',
  animation: `${top} 1.2s ease-out forwards`,
});
