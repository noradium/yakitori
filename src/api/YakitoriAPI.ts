export default class YakitoriAPI {
  static post(data: {foods: {name: string, condition: string}[]}) {
    return fetch('http://localhost:3001/api/yakitori', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response: Response) => response.json());
  }
}
