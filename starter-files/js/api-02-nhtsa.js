
// ##### National Highway Transit Safety Administration
// https://vpic.nhtsa.dot.gov/api/

// 1. How many types of Chevrolet models are registered with the NHTSA?
const answerElement_nhtsa_1 = document.getElementById('nhtsa-1')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json')
  .then(function(data) {

    let modelChev = data.body.Results.length

    answerElement_nhtsa_1.innerHTML = modelChev
  })
// 2. What are the vehicle types that Nissan has?

const answerElement_nhtsa_2 = document.getElementById('nhtsa-2')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
  .then(function(data) {

    let vecTypeNissan = data.body.Results.length

    answerElement_nhtsa_2.innerHTML = vecTypeNissan
  })

// 3. What are the types of models that exist for Toyota trucks in 2017?
const answerElement_nhtsa_3 = document.getElementById('nhtsa-3')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
  .then(function(data) {

    let truTypeToyo17 = data.body.Results.length

    answerElement_nhtsa_3.innerHTML = truTypeToyo17

  })
