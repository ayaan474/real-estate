import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'd3eb9070f8mshbd3cc0cb87f07a0p17d642jsna8e2e517dc96',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
    
  return data;
}