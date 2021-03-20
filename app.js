window.addEventListener("load", () => {
  let lon;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pl&lat=${lat}&lon=${lon}&appid=d3041a7de2e90999ba3202972012c22d`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          //   const current = data.main.temp;
          const { temp } = data.main;
          const summary = data.weather[0].description;
          const icon = data.weather[0].icon;
          //Set DOM Elements from the API
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.name;
          document.getElementById(
            "icon"
          ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        });
    });
  } else {
    h1.textContent = "hey dis is not working because reasons";
  }
});
