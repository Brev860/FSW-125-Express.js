const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/favMovies', require('./router'))

app.use((err, req, res, next) =>{
    return res.send({errMsg: err.message})
})

app.listen(3000, ()=>{
    console.log('App is running on port 3000')
})