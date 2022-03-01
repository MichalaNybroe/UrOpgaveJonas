const url = "http://worldtimeapi.org/api/timezone/";

const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", () => {
  console.log(dropdown.value);
  worldtimeapiFetch(url + dropdown.value);
});

const worldtimeapiFetch = function (url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);}
    )
}


function setSelectedTimeZone() {
  //Worldtimeapifetch og dropdown.value = hvilket land og by som blev valgt

  //Logik for display af tid - vet noget localdatetime +utc_offset attribut (kan det udhentes fra datetime?)
  //Logik for display af timezone location nedenfor -se html
}


const selectChoice = document.getElementById('dropdown');

selectChoice.addEventListener('change', setSelectedTimeZone);
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
