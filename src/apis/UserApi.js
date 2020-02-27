import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.100.9:5000/user',
});
