const baseURL = 'https://api.nal.usda.gov/fdc';
const apiKey = 'C6cV4ea5SYHatxL7N2ETU2awLx10MY3vbKOKE7wS';
const searchURL = '/v1/foods/search';
const foodURL = '/v1/food/';

function apiKeyArg() {
  return 'api_key=' + apiKey;
}

export const searchFoods = function(query) {
  let body = {
    query: query,
  };
  let url = baseURL + searchURL + '?' + apiKeyArg();
  fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then((data) => {console.log(data)});
}

export const getFoodData = function(fdcId) {
  let url = baseURL + foodURL + fdcId + '?' + apiKeyArg();
  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
}