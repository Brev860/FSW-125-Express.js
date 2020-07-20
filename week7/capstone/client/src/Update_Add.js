import React, {useState} from 'react'

const UpdateAdd = (props) =>{
    const initInputs = {firstName:props.firstName ||'', lastName: props.lastName || '',active:props.active ||'',teams: props.teams ||'', jersey:props.jersey ||''}
    const [inputs, setInputs] = useState(initInputs)
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newInput = {...inputs, teams:inputs.teams.split(',')}
        props.submit(newInput, props._id)
        setInputs(initInputs) 
    }

    return(

        <div className='submit'>
            <form onSubmit={handleSubmit}>
                 <input type='text' name='firstName' value={inputs.firstName} onChange={handleChange} placeholder='First Name'/>
                 <input type='text' name='lastName' value={inputs.lastName} onChange={handleChange} placeholder='Last Name'/>
                 <input type='text' name='active' value={inputs.active} onChange={handleChange} placeholder='Active ?'/>
                 <input type='textarea'  name='teams' value={inputs.teams} onChange={handleChange} placeholder='team'/>
                 <input type='text' name='jersey' value={inputs.jersey} onChange={handleChange} placeholder='Jersey #'/>
                 <button><strong>{props.btnText}</strong></button>
            </form>
        </div>
    )
}
export default UpdateAdd