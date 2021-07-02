import axios from 'axios';
import * as AppConstant from '../AppConstant/AppConstant.js';

const baseURL = AppConstant.API_URL;

export const getRandomJokes = () => {
  return axios
    .get(`${baseURL}/search`, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.error(error);
      //alert('Network Error!!')
    });
};
