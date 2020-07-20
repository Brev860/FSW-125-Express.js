const { v4: uuidv4 } = require('uuid');

//Data

const footballPlayers = [
    {firstName: 'Lawrence', lastName:'Taylor', active: false, teams:['NY Giants  ', 'NO Saints  '], jersey: 56, _id: uuidv4()},
    {firstName: 'Jerry', lastName:'Rice', active: false, teams:['SF 49ers', 'Oakland Raiders','Seatle Seahawks'], jersey: 80, _id: uuidv4()},
    {firstName: 'Payton', lastName:'Manning', active: false, teams:['Indianapolis Colts', 'Denver Broncos'], jersey: 18, _id: uuidv4()},
    {firstName: 'Warren', lastName:'Sapp', active: false, teams:['TB Buccaneers', 'Oakland Raiders'], jersey: 99, _id: uuidv4()},
    {firstName: 'Randy', lastName:'Moss', active: false, teams:['Minnesota Vikings', 'NE Patriots', 'SF 49ers', 'TB Buccaneers'], jersey: 80, _id: uuidv4()},
  
]

module.exports = footballPlayers