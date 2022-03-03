const url = "http://worldtimeapi.org/api/timezone/";

const dropdown = document.getElementById("dropdown");

dropdown.addEventListener("change", () => {
  console.log(dropdown.value);
  worldtimeapiFetch(url + dropdown.value);
});

const worldtimeapiFetch = function (url) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        setSelectedTimeZone(response)
      }
    )
}

function setSelectedTimeZone(response) {
  //HTML id's
  const time = document.getElementById('time');
  const utc = document.getElementById('UTC');
  const timezoneContinent = document.getElementById('timezone-continent');
  const timezoneCity = document.getElementById('timezone-city');

  //info from url
  const datetime = response.datetime;
  const timezone = response.timezone;
  const utcOffset = response.utc_offset;

  time.innerText = getTimeFromDatetime(datetime);
  utc.innerText = utcOffset;
  timezoneContinent.innerText = getContinent(timezone);
  timezoneCity.innerText = getCity(timezone);
}

function getTimeFromDatetime(datetime) {
  const startFromT = 11;
  const endOfTime = 19;
  return datetime.substring(startFromT,endOfTime);
}

function getContinent(timezone) {
  const startString = 0;
  const toSlash = timezone.indexOf('/');

  return timezone.substring(startString, toSlash);
}

function getCity(timezone) {
  const startFromSlashString = timezone.indexOf('/')+1;
  const endString = timezone.length;

  const city = timezone.substring(startFromSlashString, endString);
  const replaced = city.replace("_", " ");

  return replaced;
}

worldtimeapiFetch(url + "Europe/Copenhagen");

/*{
"abbreviation": "CET",
"client_ip": "87.59.14.119",
"datetime": "2022-02-17T21:01:50.952225+01:00", <----
"day_of_week": 4,
"day_of_year": 48,
"dst": false,
"dst_from": null,
"dst_offset": 0,
"dst_until": null,
"raw_offset": 3600,
"timezone": "Europe/Copenhagen", <----
"unixtime": 1645128110,
"utc_datetime": "2022-02-17T20:01:50.952225+00:00",
"utc_offset": "+01:00", <----
"week_number": 7
  }*/

/*TODO: lav passende attributter ud fra de markerede JSON værdier som kan manipulerer med klokken  */
/* Altså vælg tidszone fra drop down, og set uret.*/

//Brug af date giver ikke ## men nummer, så klokken 23:05:22 bliver 23:5:22
function getTimeAsString(datetime) {
  const date = new Date(datetime);
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
