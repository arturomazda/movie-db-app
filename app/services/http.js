export default class HttpService {
  get(url, params) {
    return fetch(
      url + this._parseParams(params),
      {
        method: 'get',
        headers: new Headers(),
        mode: 'cors'
      })
      .then(response => response.json() );
  }

  _parseParams(params = {}) {
    const paramsKeys = Object.keys(params);
    let newParams = '';

    if(Object.keys(params).length === 0) {
      return '';
    }

    Object.keys(params).forEach((param) => {
      newParams = `${newParams}&${param}=${params[param]}`;
    });

    return `?${newParams.slice(1)}`;
  }
}
