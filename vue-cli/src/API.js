const proxy = 'https://cors-anywhere.herokuapp.com/';
// seattle, wa
const API_KEY = '45f632b681e9d4f04f3880b02360e6f7';
const location = '47.6038,-122.3301/us12/en';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;

function getForecast() {
  // console.log(API_URL);
  return fetch(API_URL)
  .then(response => response.json());
}

export default{
  getForecast
  };


