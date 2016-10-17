export default class HttpService {
  get(url, params) {
    return fetch(
      url + this._parseParams(params),
      {
        method: 'get',
        headers: new Headers(),
        mode: 'cors'
      })
      .then((response) => {
        if(response.status === 200) {
          return response.json().then((json) => json);
        } else {
          return Promise.reject({ text: response.statusText });
        }
      })
      .catch(() => {
        return Promise.reject({
          text: 'Search failed, please try again'
        });
      });
  }

  _parseParams(params = {}) {
    if(Object.keys(params).length !== 0) {
      let newParams = Object.keys(params).reduce((memo, param) => {
        return memo + `&${param}=${params[param]}`;
      }, '');

      return `?${newParams.slice(1)}`;
    }

    return '';
  }
}
