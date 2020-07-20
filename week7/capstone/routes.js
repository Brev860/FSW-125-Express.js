const express = require('express')
const playersRouter = express.Router()
const footballPlayers = require('./players')
const { v4: uuidv4 } = require('uuid');

//routes
//Get All
playersRouter.get('/', (req,res) =>{
    res.send(footballPlayers)
})

//Post
playersRouter.post('/', (req,res ) =>{
    const newPlayer = req.body
    newPlayer._id = uuidv4()
    footballPlayers.push(newPlayer)
    res.send(`${newPlayer}  was added succesfully`)
})
//Delete
playersRouter.delete('/:playersId', (req, res) =>{
    const playersId = req.params.playersId
    const playerIndex = footballPlayers.findIndex(players => footballPlayers._id === playersId)
    footballPlayers.splice(playerIndex, 1)
    res.send(`Successfully removed hunter ${playersId}`)
})

//PUT 
playersRouter.put('/:playersId', (req, res) =>{
    const playersId = req.params.playersId
    const playerIndex = footballPlayers.findIndex(players => footballPlayers._id === playersId)
    const updatePlayer = Object.assign(footballPlayers[playerIndex], req.body)
    res.send(updatePlayer)
})
module.exports = playersRouter




