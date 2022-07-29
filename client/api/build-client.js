import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server

    return axios.create({
      baseURL: 'http://www.ticketing-app-pro.site',
      headers: req.headers
    });
  } else {
    // we must on the browser
    return axios.create({
      baseURL: '/'
    });
  }
};