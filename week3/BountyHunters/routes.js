const express = require('express')
const bountyRouter = express.Router()
const bountyHunters = require('./bountyhunter')
const { v4: uuidv4 } = require('uuid');

//routes

bountyRouter.get('/', (req,res) =>{
    res.send(bountyHunters)
})

bountyRouter.post('/', (req,res ) =>{
    const newHunter = req.body
    newHunter._id = uuidv4()
    bountyHunters.push(newHunter)
    res.send(`${newHunter}  was added succesfully`)
})

module.exports = bountyRouter




