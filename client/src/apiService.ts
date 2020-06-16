const API_URL = 'https://processdrift.ai.wu.ac.at';
// const API_URL = 'http://127.0.0.1:5000';
export const uploadFile = (body: FormData) => fetch(`${API_URL}/uploadFile`, {
  method: 'POST',
  body,
}).then(response => response.json()).catch(console.error);
