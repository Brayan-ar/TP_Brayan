 const fs = require('fs')
 const express = require('express')
 const app = express()

 app.listen(3000, ()=> {console.log('servidor levantado en el puerto 3000')});

 const homeRoutes = require('./routes/home')
 const autosRoutes = require('./routes/autos')
 const marcasRoutes = require('./routes/marcas')
 const sucursalesRoutes = require('./routes/sucursales')


 app.use('/', homeRoutes)
 app.use('/autos', autosRoutes)
 app.use('/marcas' , marcasRoutes)
 app.use('/sucursales' , sucursalesRoutes)