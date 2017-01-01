import React, { PropTypes } from 'react';
import Head from 'next/head';

export default ({ children, title, head }) => (
  <div>
    <Head>
      <title>Learning Ventures | {title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="//fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" rel="stylesheet" />
      {head}
    </Head>

    {children}
  </div>
)
