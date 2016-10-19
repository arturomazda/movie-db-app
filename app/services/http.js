import { stringify as paramsStringify } from 'query-string';

/**
 * Http Services module.
 * @module http
 */

/**
 * Fetching resources from api using get method
 * @constructor
 * @param {string} url - Url to be called for resources.
 * @param {object} params - Query params that url will be called with
 * @return {promise}
 */
export function get(url, params) {
  return fetch(
    url + '?' + paramsStringify(params),
    {
      method: 'get',
      headers: new Headers(),
      mode: 'cors'
    })
    .then((response) => {
      if(response.status === 200) {
        return response.json().then((json) => json);
      } else {
        return Promise.reject(response);
      }
    })
    .catch((response) => {
      return Promise.reject({
        text: response.statusText || 'Search failed, please try again'
      });
    });
}
