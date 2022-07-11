import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://bitcoinaverage-global-ethereum-index-v1.p.rapidapi.com/',
  responseType: 'json',
  headers: {
    'X-RapidAPI-Key': 'fe72ff4e1fmshc28cf735c99b480p115246jsnbe14af1ce05e',
    'X-RapidAPI-Host': 'bitcoinaverage-global-ethereum-index-v1.p.rapidapi.com',
  },
});

export const getPerSymbol = async (
  { pair1, pair2 }: { pair1: string, pair2: string },
) => axiosInstance.get(`/${pair1}${pair2}`);

export const getAll = async () => axiosInstance.get('/indices/local/ticker/all');
