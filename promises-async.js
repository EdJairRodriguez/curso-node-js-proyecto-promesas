const { opositores, notas } = require('./datos.js')
// crea promesa para obtener los datos del opositor 1
/*
const getOpositor = id => {
  return new Promise((resolve, reject) => {
    const opositor = opositores.find(opositor => opositor.id === id)
    if (opositor) {
      resolve(opositor)
    } else {
      reject(new Error(`No se ha encontrado al opositor con id: ${id}.`))
    }
  })
}
*/
const getOpositor = async id => {
  const opositor = await opositores.find(opositor => opositor.id === id)
  if (opositor) {
    return opositor
  } else {
    throw new Error(`No se ha encontrado al opositor con id: ${id}.`)
  }
}
/*
getOpositor(1)
  .then(opositor => console.log(`Opositor: ${opositor.nombre}`))
  .catch(err => console.log(err))

getOpositor(5)
  .then(opositor => console.log(`Opositor: ${opositor.name}`))
  .catch(err => console.log(err))
// crea promesa para obtener las notas del opositor 1
*/

const getNotas = async id => {
  const notasOpositor = await notas.filter(nota => nota.id === id)
  if (notasOpositor.length) return notasOpositor
  else {
    throw new Error(
      `No se han encontrado las notas del opositor con id: ${id}.`
    )
  }
}

getNotas(1)
  .then(notas =>
    notas.forEach(nota => {
      console.log(`${nota.nota} - ${nota.prueba}`)
    })
  )
  .catch(err => console.log(err))

// crea promesa para obtener el nombre y las notas del opositor1

const getResultado = id => {
  Promise.all([getOpositor(id), getNotas(id)])
    .then(datos => {
      const { nombre } = datos[0]
      const nota = datos[1]
        .map(nota => nota.nota)
        .reduce((sum, x) => (sum + x) / datos[1].length)
      console.log(nombre)
      console.log(nota)
    })
    .catch(err => console.log(err))
}

// getResultado(1)

// Pepe tiene una media de 5 en la oposición de Informática
