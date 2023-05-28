import axios from "axios";
const REACT_APP_API_KEY = "202caa955emsh186e1850573fdd5p1ee37fjsn9dba9ff98c60";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  // url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};