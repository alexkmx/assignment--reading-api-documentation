/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')

request.get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
  .then(function(data) {
    // console.log(data.body.results);

    let montLat = data.body.results[0].geometry.location.lat
    let montLon = data.body.results[0].geometry.location.lng

    answerElement_apimashup_1.innerHTML = 'lat: '+montLat+' '+ 'long: '+montLon
  })




//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')
request.get('https://api.sunrise-sunset.org/json?lat=45.5016889&lng=-73.567256')
  .then(function(data) {

    let monSunset = data.body.results.sunset

    answerElement_apimashup_2.innerHTML = monSunset
  })






//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')

request.get('https://api.darksky.net/forecast/62e9916d854bb0e84b8b404c81a33446/45.5016889,-73.567256')
  .then(function(data) {
// console.log(data.body.daily.summary);
    let monSunset = data.body.daily.summary
    //
    answerElement_apimashup_3.innerHTML = monSunset
  })




//
