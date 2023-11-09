const API_KEY = "44272b7470f4924cca3be28c20a51925";

const wrapper = document.getElementById("wrapper");

const loader = document.getElementById("loader");

wrapper.style.display = "none";

async function getWeather() {
  wrapper.style.display = "none";
  loader.style.display = "block";

  const city = prompt("Введите город");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
  );

  const result = await response.json();
  console.log("result: ", result);
  wrapper.style.display = "block";
  loader.style.display = "none";

  const cityh2 = document.getElementById("city");
  cityh2.innerHTML = `Город: ${result.name}`;
  const temph4 = document.getElementById("temp");
  temph4.innerHTML = `Температура: ${result.main.temp}`;

  const feelh5 = document.getElementById("feel");
  feelh5.innerHTML = `Ощущается как: ${result.main.feels_like}`;

  // ощущается как  макс и мин темп из везера достать дескрипшен облачная
}

async function getCurrentPosition(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric&lang=ru`
  );

  const result = await response.json();

  const cityh2 = document.getElementById("city");
  cityh2.innerHTML = `Город: ${result.name}`;

  const temph4 = document.getElementById("temp");
  temph4.innerHTML = `Температура: ${result.main.temp}`;

  const feelh5 = document.getElementById("feel");
  feelh5.innerHTML = `Ощущается как: ${result.main.feels_like}`;
}

// navigator.geolocation.getCurrentPosition(getCurrentPosition, Error);

async function successCallback(location) {
  const { latitude, longitude } = location.coords;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`
  );

  const result = await response.json();
  wrapper.style.display = "block";
  loader.style.display = "none";

  const cityh2 = document.getElementById("city");
  cityh2.innerHTML = `Город: ${result.name}`;

  const temph4 = document.getElementById("temp");
  temph4.innerHTML = `Температура: ${result.main.temp}`;

  const feelh5 = document.getElementById("feel");
  feelh5.innerHTML = `Ощущается как: ${result.main.feels_like}`;
}

async function errorCallback(error) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Токтогул&appid=${API_KEY}&units=metric&lang=ru`
  );

  const city55 = "Токтогул";
  const result = await response.json();
  wrapper.style.display = "block";
  loader.style.display = "none";

  const cityh2 = document.getElementById("city");
  cityh2.innerHTML = `Город: ${result.name}`;

  const temph4 = document.getElementById("temp");
  temph4.innerHTML = `Температура: ${result.main.temp}`;

  const feelh5 = document.getElementById("feel");
  feelh5.innerHTML = `Ощущается как: ${result.main.feels_like}`;
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//   if (error.code === 1) {
//     alert("Пользователь запретил использовать геолокацию.");
//   }
// }
