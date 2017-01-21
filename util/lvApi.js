import 'isomorphic-fetch';
import { v1 } from 'uuid';
import { loadAuth } from './localStorage';

let baseUrl;
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://lv-staging.herokuapp.com';
} else {
  baseUrl = 'http://localhost:3001';
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function callApi(endpoint, options) {
  // normalize endpoint
  endpoint = endpoint[0] === '/' ? endpoint : `/${endpoint}`;
  // create final url endpoint given current environment
  const url = `${baseUrl}${endpoint}`;

  // add in required headers
  const headers = new Headers({
    'Accept': 'application/vnd.learningventures.io; version=1',
    'Content-Type': 'application/json',
      ...options.headers
  });
  // complete options for request and use isomorphic fetch
  const method = options.method || 'GET';
  const body = JSON.stringify(options.data || {});

  return fetch(url, {
    headers,
    method,
    body,
    mode: 'cors',
  })
  .then(checkStatus)
  .then(response => response.json());
}

////////////////////////////////
//          ENDPOINTS         //
////////////////////////////////

export const createUser = ({firstName, lastName, email, password}) => {
  return callApi('/users', {
    method: 'POST',
    data: {
      user: {
        email,
        first_name: firstName,
        last_name: lastName,
        password: password || v1(),
        password_reset_id: v1(),
      }
    },
  });
};

export const updatePassword = ({resetId, newPassword}) => (
  callApi('/users/reset_password', {
    method: 'PUT',
    data: {
      user: {
        password_reset_id: resetId,
        new_password: newPassword,
      },
    },
  })
);

export const updateLp = (values, options) => (
  callApi('/lv_assessment', {
    method: 'PUT',
    data: { lv_assessment: {...values, version: 'v1'} },
    ...options
  })
);
