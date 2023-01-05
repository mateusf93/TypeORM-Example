import express from 'express'
import {AppDataSource} from './datasource/datasource.js'
import productsRoutes from './routes/productsRoutes.js'
import categorysRoutes from './routes/categorysRoutes.js'

AppDataSource.initialize().then( ()=>{
    const app = express()
    app.use(express.json(),
            productsRoutes,
            categorysRoutes)
    return app.listen(3000, ()=>{
        console.log('conexão realizada com sucesso')
    })
})

