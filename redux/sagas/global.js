import Router from 'next/router';

// Utility Sagas
export function* pushRoute(route) {
  return Router.push(route);
}
