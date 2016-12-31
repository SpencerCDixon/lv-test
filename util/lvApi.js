export default class LvApi {

  constructor(authToken) {
    this.authToken = authToken;
    this.authenticated = false;
  }

  get baseUrl() {
    return 'http://localhost:3001'
  }

  request(url, options = {}) {
    // Add in default headers needed to interact with API
    const headers = new Headers({
      'Accept': 'application/vnd.learningventures.io; version=1',
      'Content-Type': 'application/json',
      ...options.headers
    });

    return fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers,
    }).then(response => {
      return response.json()
    })
  }

  requestGet(url, options) {
    return this.request(url, {
      method: 'GET',
      ...options
    });
  }

  requestPost(url, data, options) {
    return this.request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    })
  }

  createUser({firstName, lastName, email, password}) {
    return this.requestPost('/users', {
      user: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      }
    });
  }
}
