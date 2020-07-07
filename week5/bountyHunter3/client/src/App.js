import React from 'react';
import UpdateAdd from './Update_Add'
import Hunters from './Hunter'
import axios from 'axios'
import {useState, useEffect} from 'react'

import './App.css';

const App = ()=>{
const [hunters, setHunters] = useState([])
useEffect( ()=> {
  axios.get('/bountyhunters')
  .then(res => setHunters(res.data))
  .catch(err => alert(err))
  .catch(err => console.log(err))
}
, [])

const addHunter = (newHunter) =>{
  axios.post('/bountyhunters', newHunter)
  .then(res => {
    setHunters(preHunter => [...preHunter, res.data])
  })
  .catch(err => console.log(err))

  }

const deleteHunter = (hunterId) =>{
    axios.delete(`/bountyhunters/${hunterId}`)
    .then(res => {
      setHunters(preHunter => preHunter.filter(hunter => hunter._id !== hunterId))
    })
    .catch(err => console.log(err))

}


const putHunter = (updates, hunterId) =>{
  axios.put(`/bountyhunters/${hunterId}`, updates)
  .then(res => {
    setHunters(preHunter => preHunter.map(hunter => hunter._id !== hunterId ? hunter : res.data) )
  })
  .catch(err => console.log(err))
}


  return (
    <div className="hunter-container">
      <UpdateAdd
      submit={addHunter}
      btnText='Add Hunter'
      />
     {hunters.map(hunter => <Hunters {...hunter} key={hunter.firstName, hunter.lastName, hunter.living, hunter.bountyAmount, hunter.type}
      deleteHunter={deleteHunter} 
      putHunter={putHunter}/>)}
     
    </div>
  );
}



 
  
export default App;
