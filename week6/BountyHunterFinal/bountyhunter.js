const { v4: uuidv4 } = require('uuid');

//Data

const bountyHunters = [
    {firstName: 'Boba', lastName:'Fett', living: false, bountyAmount:'20000 imperial credits', type:'Sith', _id: uuidv4()},
    {firstName: 'Cad', lastName:'Bane', living: false, bountyAmount:'40000 imperial credit', type:'Jedi', _id: uuidv4()},
    {firstName: 'Aurra', lastName:'Sing', living: true, bountyAmount:'100000 imperial credits', type:'Sith', _id: uuidv4()},
    {firstName: 'Jango', lastName:'Fett', living: true, bountyAmount:'70000 imperial credits', type:'Sith', _id: uuidv4()},
    {firstName: 'Asajj', lastName:'Ventress', living: true, bountyAmount:'10000 imperial credits', type:'Jedi', _id: uuidv4()},

]

module.exports = bountyHunters