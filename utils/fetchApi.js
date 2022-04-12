import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'db8fb4ca9fmsha494b8d5c766f68p1b1e14jsnb5bbae19e9cd',
    },
  });

  return data;
};
