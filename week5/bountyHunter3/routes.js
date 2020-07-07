const express = require('express')
const bountyRouter = express.Router()
const bountyHunters = require('./bountyhunter')
const { v4: uuidv4 } = require('uuid');

//routes
//Get All
bountyRouter.get('/', (req,res) =>{
    res.send(bountyHunters)
})

//Post
bountyRouter.post('/', (req,res ) =>{
    const newHunter = req.body
    newHunter._id = uuidv4()
    bountyHunters.push(newHunter)
    res.send(`${newHunter}  was added succesfully`)
})
//Delete
bountyRouter.delete('/:hunterId', (req, res) =>{
    const hunterId = req.params.hunterId
    const hunterIndex = bountyHunters.findIndex(hunters => bountyHunters._id === hunterId)
    bountyHunters.splice(hunterIndex, 1)
    res.send(`Successfully removed hunter ${hunterId}`)
})

//PUT 
bountyRouter.put('/:hunterId', (req, res) =>{
    const hunterId = req.params.hunterId
    const hunterIndex = bountyHunters.findIndex(hunters => bountyHunters._id === hunterId)
    const updateHunter = Object.assign(bountyHunters[hunterIndex], req.body)
    res.send(updateHunter)
})
module.exports = bountyRouter




