const express =  require('express')
const moviesRouter = express.Router()
const favMovies = require('./favorites')
const { v4: uuidv4} = require('uuid')



// First query Title

moviesRouter.get('/', (req, res) =>{
    res.send(favMovies)
})

moviesRouter.get('/:movieId', (req,res,next)=>{
    const movieId = req.params.movieId
    const movieLocated = favMovies.find(movie => movie._id === movieId)
    if(!movieLocated){
        const error = new Error(`Movie ID ${movieId} was not found. Please check your spelling and try again`)
        return next(error)
    }
    res.send(movieLocated)
    
})

moviesRouter.get('/search/genre', (req,res,next) =>{
    const genre = req.query.genre
    const genreQuery = favMovies.filter(movie => movie.genre === genre)
    if(!genreQuery){
      const error = new Error(`The genre you've selected ${genre} does not exist`)
      return next(error)
    }
    res.send(genreQuery)
})

moviesRouter.get('/search/title', (req,res,next) =>{
    const title = req.query.title
    const titleQuery = favMovies.filter(movie => movie.title === title)
    if(!titleQuery){
        const error = new Error(`The title you've searched ${title} was not found. This is case sensitive. Please check your spelling`)
        return next(error)
    }
    res.send(titleQuery)
})

moviesRouter.get('/search/era', (req,res,next) =>{
    const era = req.query.era
    const eraQuery = favMovies.filter(movie => movie.era === era)
    if(!eraQuery){
        const error = new Error(`The era you've searched ${era} was not found. Be sure to search using decade and not specific years(ie.1980, 2010)`)
        return next(error)
    }
    res.send(eraQuery)
})


module.exports = moviesRouter