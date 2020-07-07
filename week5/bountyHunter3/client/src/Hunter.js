import React, {useState} from 'react'
import UpdateAdd from './Update_Add'


const Hunters = (props) =>{
    const {firstName, lastName, bountyAmount,living, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className='hunter'>
            { !editToggle ?
            <>
           <h2>{firstName} {lastName} </h2>
           <ul>
             <li>Bounty: {bountyAmount}</li>
             <li>Affiliation: {type}</li>
             <li>Bounty ID: {_id}</li>
           </ul>
           <button
           className='delete-button'
           onClick={()=> props.deleteHunter(_id)}
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
           bountyAmount={bountyAmount}
           type={type}
           living={living}
           _id={_id}
           btnText='Edit'
            submit={props.putHunter}
            />
            <button
            onClick={()=> setEditToggle(prevToggle => !prevToggle) }
            >Close</button>
            </>
            }
        </div>
    
    )
}


export default Hunters