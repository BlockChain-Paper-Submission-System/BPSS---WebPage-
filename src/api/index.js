import axios from 'axios'
export const va = axios
const AppDomain = axios.create({
    baseURL: 'http://localhost:8082/' //your api domain
  });
  const FlaskDomain = axios.create({
    baseURL: 'http://140.124.73.74:58088/' //your api domain
  });

  //author
  export const apiAdd = data => AppDomain.post('/add', data);
  export const apiUpload = data => FlaskDomain.post('/', data);
  //query 
  export const apiFind = data => AppDomain.post('/find', data);
  //reviewer
  export const apiReview = data => AppDomain.post('/addComment', data);
  //editor
  export const editorAssign = data => AppDomain.post('/editorAssign', data);
  export const finalProcess = data => AppDomain.post('/finalProcess', data);
