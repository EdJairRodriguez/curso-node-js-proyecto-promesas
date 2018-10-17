const axios = require('axios')

const exchangeRate = async (from, to) => {
  const response = await axios.get(
    `http://data.fixer.io/api/latest?access_key=03b3abfc3fe505ecd38bbeebe6211dfe&base=EUR&symbols=${from},${to}`
  )
  const { rates } = response.data
  // console.log(rates)
  return rates[to] / rates[from]
}

exchangeRate('USD', 'EUR')
  .then(cambioDivisa => console.log(cambioDivisa))
  .catch(err => console.log(err))
const test = async () => {
  return 7
}
test().then(resultado => console.log(resultado))

const getCountries = async currencyCode => {
  const responsee = await axios
    .get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    .then((response) => {
      return responsee.data.map((country) => country.name)
    }
    )
}

getCountries('CAD').then((countries) => {
  console.log(countries)
})

const convertCurrency = (from, to, amount) => {
  exchangeRate(from, to).then(cambioDivisa => amount * cambioDivisa)
}

const getResultado = async (from, to, amount) => {
  const resultado = await Promise.all([convertCurrency(from, to, amount), getCountries(to)])
  /* const cantidad = await convertCurrency(from, to, amount)
  const paises = await getCountries(to)
  console.log(`tienes un total de ${total} ${to} y los puedes gastar en: ${paises.join(', ')}`)
  paises.forEach(pais => {
    console.log(pais)
  }) */
  console.log(resultado)
}

getResultado('EUR', 'USD', 100)

convertCurrency('EUR', 'USD', 100)
  .then(total => console.log(`he obtenido ${total}dolares`))
  .catch(err => console.log(err))
