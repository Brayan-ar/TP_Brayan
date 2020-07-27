const fs = require('fs')

let  sucursales = fs.readFileSync('./data/concesionarias.json',"utf-8")
sucursales = JSON.parse(sucursales)

const sucursalesController = {
    index: (req,res) => {
        res.set({'content-type':'text/plain; charset=utf-8' })
        res.write('Estas son todas las sucursales')
        res.write('\n')
        res.write('\n')

        sucursales.forEach(sucursal => {
            res.write('sucursales en:'+sucursal.sucursal+'. Direccion:'+sucursal.direccion +'. Telefono:'+sucursal.telefono)
            res.write('\n')
            res.write('\n')
        });
        res.end()
},
idsucursales: (req, res) => {
    res.set({'content-type':'text/plain; charset=utf-8' })
  let sucursal = req.params.sucursal
  let TodoLasSucursales = sucursales.filter(producto =>{
      return producto.sucursal == sucursal
  })
     if(TodoLasSucursales.length == 0){
         res.send('No existe esta sucursal')
     }


    TodoLasSucursales.forEach(sucursal =>{
        res.set({'content-type':'text/plain; charset=utf-8' })
        res.write('sucursales en:'+sucursal.sucursal+'. Direccion:'+sucursal.direccion +'. Telefono:'+sucursal.telefono)
        res.write('\n')
        res.write('\n')
    })

    TodoLasSucursales.forEach((concesionaria)=>{
        concesionaria.autos.forEach((auto)=>{
            res.write('Marca:'+auto.marca + '  Modelo:' +auto.modelo + '  Año:'+auto.anio +'  Color:'+ auto.color)
            res.write('\n')
            res.write('\n')
        })
    })

    res.end()
}
}


       module.exports = sucursalesController