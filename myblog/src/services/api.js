import axios from 'axios';


var api = axios.create({
  baseURL: 'https://ui-course-server.now.sh/SPopov',
  timeout: 1000,
});


export default api;
