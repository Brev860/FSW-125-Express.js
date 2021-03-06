import React, {useState} from 'react'

const UpdateAdd = (props) =>{
    const initInputs = {firstName:props.firstName ||'', lastName: props.lastName || '',living:props.living ||'',bountyAmount: props.bountyAmount ||'', type:props.type ||''}
    const [inputs, setInputs] = useState(initInputs)
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e)=>{
        
        setInputs(initInputs)
        props.submit(inputs, props._id)
        console.log()
    }

    return(

        <div className='submit'>
            <form onSubmit={handleSubmit}>
                 <input type='text' name='firstName' value={inputs.firstName} onChange={handleChange} placeholder='First Name'/>
                 <input type='text' name='lastName' value={inputs.lastName} onChange={handleChange} placeholder='Last Name'/>
                 <input type='text' name='living' value={inputs.living} onChange={handleChange} placeholder='Alive?'/>
                 <input type='text' name='bountyAmount' value={inputs.bountyAmount} onChange={handleChange} placeholder='Bounty$'/>
                 <input type='text' name='type' value={inputs.type} onChange={handleChange} placeholder='Affiliation'/>
                 <button><strong>{props.btnText}</strong></button>
            </form>
        </div>
    )
}
export default UpdateAdd