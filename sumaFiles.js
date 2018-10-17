const fs = require('fs')

fs.readFile('./numero1', (err, data) => {
  if (err) console.log(err)
  const numero1 = parseInt(data)
  fs.readFile('./numero1', (err, data) => {
    if (err) console.log(err)
    const numero2 = parseInt(data)
    console.log(`la suma es  ${numero1 + ${numero2}}`)
  })
})


const customReadFile=(fileName)=>{
  return fs.readFile('fileName',(err,data)=>{
    if(err) console.log(err)
    return const numero1=parseInt(data)
  }
}