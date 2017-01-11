import React, { PropTypes } from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import Logo from '~/components/Logo';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export const MainLayout = ({ children, title, head, blackLogo }) => (
  <div>
    <Head>
      <title>Learning Ventures | {title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="//fonts.googleapis.com/css?family=Andada|Ubuntu|Montserrat" rel="stylesheet" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" rel="stylesheet" />
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
      {head}
    </Head>

    <div style={{position: 'absolute', top: 20, left: 20}}>
      <Logo black={blackLogo} />
    </div>

    {children}
  </div>
)

export default MainLayout;
