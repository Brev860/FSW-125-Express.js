const { v4: uuidv4 } = require('uuid')

const favMovies = [
    {
      title:'The Warriors',
      era:'1970',
      genre:'Action',
      _id: uuidv4()
    },
    {
        title:'The Mack',
        era:'1970',
        genre:'Drama',
         _id: uuidv4()
      },
      {
        title:'The Neverending Story',
        era:'1980',
        genre:'Adventure',
         _id: uuidv4()
      },
      {
        title:'Ace Ventura',
        era:'1990',
        genre:'Comedy',
         _id: uuidv4()
      },
      {
        title:'John Wick',
        era:'2010',
        genre:'Action', 
        _id: uuidv4()
      },
      {
        title:'Coming To America',
        era:'1980',
        genre:'Comedy',
         _id: uuidv4()
      },
      {
        title:'Incideous',
        era:'2010',
        genre:'Horror',
         _id: uuidv4()
      },
      {
        title:'Pay In Full',
        era:'2000',
        genre:'Drama',
         _id: uuidv4()
      },
      {
        title:'Hook',
        era:'1990',
        genre:'Adventure',
         _id: uuidv4()
      }
]


module.exports = favMovies