import 'isomorphic-fetch';
export const CALL_API = Symbol('Call LV API');

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
  endpoint = endpoint[0] === '/' ? endpoint : `/${endpoint}`;
  const url = `${baseUrl}${endpoint}`;

  const headers = new Headers({
    'Accept': 'application/vnd.learningventures.io; version=1',
    'Content-Type': 'application/json',
      ...options.headers
  });
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

export default store => next => action => {
  const callAPI = action[CALL_API];

  // Bail out since this action shouldn't be handled by the middleware
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { types, endpoint, ...rest } = callAPI;
  // Protect middleware from misuse
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const [requestType, successType, failureType] = types;

  // Start the API Request
  next({ type: requestType, ...rest });

  return callApi(endpoint, rest).then(payload => {
    next({
      payload,
      type: successType,
        ...rest,
    });
  }).catch(error => {
    next({
      payload: error.message,
      type: failureType,
        ...rest,
    });
  });
}
