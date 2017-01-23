import React from 'react';
import { css } from 'glamor';
import { mq } from '~/styles';

export const Container = ({children, ...rest}) => (
  <div className={cls} {...rest}>
    {children}
  </div>
)

const cls = css({
  [mq.small]: { padding: '0 2%' },
  [mq.medium]: { padding: '0 9%%', },
  [mq.large]: { padding: '0 12%' },
});

export default Container;
