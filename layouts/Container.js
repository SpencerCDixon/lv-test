import React from 'react';
import { css } from 'glamor';
import { mq } from '~/styles';

export const Container = ({children, ...rest}) => (
  <div className={cls} {...rest}>
    {children}
  </div>
)

const cls = css({
  margin: '0 auto',
  [mq.small]: { width: 750 },
  [mq.medium]: { width: 970 },
  [mq.large]: { width: 1170 },
});

export default Container;
