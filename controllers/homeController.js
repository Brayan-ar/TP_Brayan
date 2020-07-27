


const homeController = {
     home: (req, res) => { 
    res.write('Bienvenidos a esta pagina')
       res.write('\n')
       res.write('\n')
       res.write('sucursales en: ')
       res.write('\n')
       res.write('\n')
       res.write('3 de Febrero')
       res.write('\n')
       res.write('\n')
       res.write('Pilar')
       res.write('\n')
       res.write('\n')
       res.write('Lanus')
       res.write('\n')
       res.write('\n')
       res.write('Quilmes')
       res.write('\n')
       res.write('\n')
       res.write('San Miguel') 
      res.end()
     }
}

module.exports = homeController