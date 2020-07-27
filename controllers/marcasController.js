const fs = require('fs')
const leer = require('../leerJSON')
let marcas = fs.readFileSync('./data/concesionarias.json',"utf8")
marcas = JSON.parse(marcas)


const marcasController = {
    index: (req,res) => {
        res.set({'content-type':'text/plain; charset=utf-8' })
        res.write('Estas son todas las marcas que tenemos')
        res.write('\n')
        res.write('\n')
        let autos = []
        leer.forEach((auto)=>{
            auto.autos.forEach((marca)=>{
           autos.push(marca.marca)
            })
            
        })
    
        let auto2 = Array.from(new Set(autos))
        auto2.forEach(marca => {
            res.write(marca)
            res.write('\n')
        })
         res.end()
    },
        
        marcas : (req, res) => {
            res.set({'content-type':'text/plain; charset=utf-8' })
            let marca = req.params.marca
            let cantidad = []
            leer.forEach(auto => { 
                auto.autos.forEach(marcas => {
                    let archivo = []
                    if(marca.toLowerCase() == marcas.marca.toLowerCase()) {
                        cantidad.push(marcas.marca)
                        archivo.push(marcas.marca, marcas.modelo, marcas.anio, marcas.color)
                        res.write("Marca: " + archivo[0])
                        res.write('\n')
                        res.write('\n')
                        res.write("Modelo: " + archivo[1])
                        res.write('\n')
                        res.write('\n')
                        res.write("Año: " + archivo[2])
                        res.write('\n')
                        res.write('\n')
                        res.write("Color: " + archivo[3])
                        res.write('\n')
                        res.write('\n')
                    }
                })
            })
            res.write("Estos son los vehiculos que coinciden con esa marca ")
            res.end()
        }
        }



        module.exports = marcasController