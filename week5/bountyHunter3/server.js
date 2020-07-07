const express = require('express')
const app = express()


app.use(express.json())

app.use('/bountyhunters', require('./routes'))

app.listen(9000, ()=>{
    console.log('App is running on Port 9000')
})

