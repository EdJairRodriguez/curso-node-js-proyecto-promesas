const axios = require('axios')

const exchangeRate = (from, to) => {
  // consulta a la API de Fixer
  axios
    .get(
      'http://data.fixer.io/api/latest?access_key=03b3abfc3fe505ecd38bbeebe6211dfe&base=EUR&symbols=USD'
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

exchangeRate()
