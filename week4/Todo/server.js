const express = require('express')
const app = express()


app.use(express.json())

app.use('/todos', require('./router'))

app.listen(9000, ()=>{
    console.log('App is running on Port 9000')
})

