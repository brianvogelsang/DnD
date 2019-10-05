function getWeather() {
  var showOut = document.getElementById("show");
  if (!navigator.geolocation) {
    showOut.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var url =
      "https://fcc-weather-api.glitch.me/api/current?lat=" +
      latitude +
      "&lon=" +
      longitude;
    showOut.innerHTML =
      "<p>Latitude is " +
      Math.floor(latitude) +
      "° <br>Longitude is " +
      Math.floor(longitude) +
      "°</p>";
    ///API call below this line ////
    $.getJSON(url, function(data) {
      document.getElementById("weatherInsert").innerHTML =
        "The weather is: [" +
        data.weather[0].main +
        "], " +
        data.weather[0].description;
      document.getElementById("temp").innerHTML =
        "Temperature is: °" + data.main.temp + " Celsius";
      document.getElementById("tempF").innerHTML =
        "Temperature is: °" + Math.floor(data.main.temp * (9/5) + 32) + " Fahrenheit";
      document.getElementById("yourLoc").innerHTML = data.name + "  ";
      var img = new Image();
      img.src = data.weather[0].icon;
      yourLoc.appendChild(img);
    });
    ////API call Above this line ////
  }
  function error() {
    showOut.innerHTML = "Unable to retrieve your location";
  }
  showOut.innerHTML = "<p>Locating…</p>";
  navigator.geolocation.getCurrentPosition(success, error);
}

function changeLocation(){
   var showOut = document.getElementById("show");
   var lat = prompt("Enter Latitude");
   var lon = prompt ("Enter Longitude");
    var url =
      "https://fcc-weather-api.glitch.me/api/current?lat=" +
      lat +
      "&lon=" +
      lon;
    showOut.innerHTML =
      "<p>Latitude is " +
      lat +
      "° <br>Longitude is " +
      lon +
      "°</p>";
    ///API call below this line ////
    $.getJSON(url, function(data) {
      document.getElementById("weatherInsert").innerHTML =
        "The weather is: " +
        data.weather[0].main +
        ", " +
        data.weather[0].description;
      document.getElementById("temp").innerHTML =
        "Temperature is: °" + data.main.temp + " Celsius";
      document.getElementById("tempF").innerHTML =
        "Temperature is: °" + Math.floor(data.main.temp * (9/5) + 32) + " Fahrenheit";
      document.getElementById("yourLoc").innerHTML = data.name + "  ";
      var img = new Image();
      img.src = data.weather[0].icon;
      yourLoc.appendChild(img);
    });
};