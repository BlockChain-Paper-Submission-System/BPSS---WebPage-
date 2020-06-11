import axios from 'axios'
export const va = axios
const AppDomain = axios.create({
    baseURL: 'http://localhost.com:8080/' //your api domain
  });

  export const apiAdd = data => AppDomain.post('/add', data);
  export const apiFind = data => AppDomain.post('/find', data);