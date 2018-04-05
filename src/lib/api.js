class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
      return this.demoExplorer(route, null,'GET');
  }

  static put(route, params) {
    return this.demoExplorer(route, params, 'PUT')
  }

  static post(route, params) {
    return this.demoExplorer(route, params, 'POST')
  }

  static delete(route, params) {
    return this.demoExplorer(route, params, 'DELETE')
  }

  static demoExplorer(route, params,verb) {
    const host = 'https://api.myjson.com'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
      options.headers = Api.headers()
      return fetch(url, options).then( resp => {
      let json = resp.json();
    if (resp.ok) {
        return json;
      }
      return json.then(err => {throw err});

    }).then( json => json);
  }
}
export default Api
