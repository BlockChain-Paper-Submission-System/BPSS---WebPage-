import axios from 'axios'
export const va = axios
const AppDomain = axios.create({
    baseURL: 'http://localhost:8081/' //your api domain
  });
  const FlaskDomain = axios.create({
    baseURL: 'http://140.124.73.74:58088/' //your api domain
  });
  export const apiAdd = data => AppDomain.post('/add', data); 
  export const apiFind = data => AppDomain.post('/find', data);
  export const apiUpload = data => FlaskDomain.post('/', data);
