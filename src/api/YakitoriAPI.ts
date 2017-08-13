export default class YakitoriAPI {
  static get BASE_URL() {
    if (process.env['NODE_ENV'] === 'production') {
      return 'http://hanamori.noradium.com';
    }
    return 'http://localhost:3001';
  }

  static post(data: {foods: {name: string, condition: string}[]}) {
    return fetch(`${this.BASE_URL}/api/yakitori`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response: Response) => response.json());
  }
}
