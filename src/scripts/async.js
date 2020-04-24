const baseURL = "https://api.nal.usda.gov/fdc";
const searchURL = "/v1/foods/search";
const foodURL = "/v1/food/";

// I know this isn't secure but I don't want to host a server just to secure this key
const apiKey = "C6cV4ea5SYHatxL7N2ETU2awLx10MY3vbKOKE7wS";

function apiKeyArg() {
  return "api_key=" + apiKey;
}

export const getFoodsAsync = function (query) {
  let body = {
    query: query,
  };
  let url = baseURL + searchURL + "?" + apiKeyArg();

  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
};

export const getFoodAsync = function (fdcId) {
  let url = baseURL + foodURL + fdcId + "?" + apiKeyArg();
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
