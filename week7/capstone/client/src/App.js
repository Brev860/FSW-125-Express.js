import React from 'react';
import UpdateAdd from './Update_Add'
import Players from './Player'
import Header from './Header'
import axios from 'axios'
import {useState, useEffect} from 'react'

import './App.css';

const App = ()=>{
const [players, setPlayers] = useState([])
useEffect( ()=> {
  axios.get('/footballPlayers')
  .then(res => setPlayers(res.data))
  .catch(err => console.log(err))
}
, [])

const addPlayer = (newPlayer) =>{
  axios.post('/footballPlayers', newPlayer)
  .then(res => {
    setPlayers(prePlayer => [...prePlayer, res.data])
  })
  .catch(err => console.log(err))

  }

const deletePlayer = (playerId) =>{
    axios.delete(`/footballPlayers/${playerId}`)
    .then(res => {
      setPlayers(prePlayer => prePlayer.filter(player => player._id !== playerId))
    })
    .catch(err => console.log(err))

}


const putPlayer = (updates, playerId) =>{
  axios.put(`/footballPlayers/${playerId}`, updates)
  .then(res => {
    setPlayers(prePlayer => prePlayer.map(player => player._id !== playerId ? player : res.data) )
  })
  .catch(err => console.log(err))
}


  return (
    <div className="player-container">
      <Header/>
      <UpdateAdd
      submit={addPlayer}
      btnText='Add Player'
      />
     {players.map(player => <Players {...player} key={player.firstName, player.lastName, player.active}
      deletePlayer={deletePlayer} 
      putPlayer={putPlayer}/>)}
     
    </div>
  );
}



 
  
export default App;
