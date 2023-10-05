async function getWeather() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json[0].name));
}
getWeather();
