const express = require('express')
const todoRouter = express.Router()
const todos = require('./todos')
const { v4: uuidv4 } = require('uuid');

//routes
//Get All
todoRouter.get('/', (req,res) =>{
    res.send(todos)
})

//Get single
todoRouter.get('/:todoId', (req, res) =>{
    const todoId = req.params.todoId
    const locatedTodo = todos.find(todo => todos._id === todoId)
    res.send(locatedTodo)
})
//Post
todoRouter.post('/', (req,res ) =>{
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`${newTodo}  was added succesfully`)
})
//Delete
todoRouter.delete('/:todoId', (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todos._id === todoId)
    todos.splice(todoIndex, 1)
    res.send('Successfully removed Todo Item')
})

//PUT 
todoRouter.put('/:todoId', (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todos._id === todoId)
    const updateTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updateTodo)
})
module.exports = todoRouter




