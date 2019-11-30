import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c427cf01c758852945455b4509699de4c036ae6111dac44822eb004c27387527'
  }
});
