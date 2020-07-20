import React, {useState} from 'react'
import UpdateAdd from './Update_Add'



const Players = (props) =>{
    const {firstName, lastName, teams,active, jersey, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    let status =''
    if(!active){
       status = 'Retired'
    }else {
       status = 'Active'
    }
    
    console.log(teams)
    return(
      <div className='listwrapper'>
                <div className='listbox'>
            { !editToggle ?
            <>
           <h2 className='box'>{firstName} {lastName} </h2>
           <ul className='box'>
             <li>Status: {status}</li>
             <li>Jersey Number: {jersey}</li>
           </ul>
           <h3 className='box'>Played for:</h3>
           <ul>
           {[teams].map((team, index) => (
        <li className='box' key={index}>
          {team}
        </li>
      ))} 
           </ul>
           <button
           className='delete-button'
           onClick={()=> props.deletePlayer(_id)}
           ><strong>Delete</strong></button>
           <button 
           className='edit'
           onClick={()=> setEditToggle(prevToggle => !prevToggle) }>
           Edit</button>

           </>
         :  
        <>
           <UpdateAdd
           firstName={firstName}
           lastName={lastName}
           teamst={teams}
           jersey={jersey}
           active={active}
           _id={_id}
           btnText='Edit'
            submit={props.putPlayer}
            />
            <button
            onClick={()=> setEditToggle(prevToggle => !prevToggle) }
            >Close</button>
            </>
            }
        </div>
      </div>
    
    
    )
}


export default Players