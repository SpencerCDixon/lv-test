const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function createRequestTypes(base, namespace = 'lv') {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${namespace}/${base}_${type}`
    return acc;
  }, {});
}

export function action(type, payload = {}) {
  return {type, ...payload};
}
