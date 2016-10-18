import { stringify as paramsStringify } from 'query-string';

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
