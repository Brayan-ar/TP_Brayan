const fs = require('fs')
const leer = require('../leerJSON')
let  Concesionarias = fs.readFileSync('./data/concesionarias.json',"utf-8")
Concesionarias = JSON.parse(Concesionarias)

const autosController = {
    index: (req,res) => {
      res.set({'content-type':'text/plain; charset=utf-8' })

      res.write('Listado de todos los autos')
      res.write('\n')
      res.write('\n')
      Concesionarias.forEach((concesionaria)=>{
        concesionaria.autos.forEach((auto)=>{
            res.write('Marca:'+auto.marca + '  Modelo:' +auto.modelo + '  Año:'+auto.anio +'  Color:'+ auto.color)
            res.write('\n')
            res.write('\n')
        })
    })
      
      res.end()
  },
  
   idautos: (req, res) => {
  res.set({'content-type':'text/plain; charset=utf-8' })
    let marcas = req.params.marcas
    leer.forEach(marca => {
        marca.autos.forEach(marcaAuto => {
            let total = []
            if(marcas.toLowerCase() == marcaAuto.marca.toLowerCase()) {
                total.push(marcaAuto.marca, marcaAuto.modelo, marcaAuto.anio, marcaAuto.color)
                res.write("Marca: " + total[0])
                res.write('\n')
                res.write('\n')
                res.write("Modelo: " + total[1])
                res.write('\n')
                res.write('\n')
                res.write("Año: " + total[2])
                res.write('\n')
                res.write('\n')
                res.write("Color: " + total[3])
                
            } 
        })
    })
    res.end()

}
}

module.exports = autosController