import axios from 'axios';

import { baseURI } from './config';

export default function getCryptoGlobalPrices(limit: string | number, currency: string = 'USD', skip: number = 0) {
  return axios.get(`${baseURI}/coins?skip=${skip}&limit=${limit}&currency=${currency}`);
}
