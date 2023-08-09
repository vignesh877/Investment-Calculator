import React, { useState } from 'react'


const initalValues = {
  'current-savings':1000,
  'yearly-savings' : 5000,
  'expectd-return' : 5,
  'duration' : 10
}

const Form = (props) => {

  const [userValue , setUserValue ] = useState(initalValues)

  const submitHandler = (e) => {
      e.preventDefault();
      props.onCalculate(userValue)
  }

  const reset = () =>{
      setUserValue(initalValues)
  }

  const inpuChange = (input , value) =>{
    setUserValue((prev)=>{
        return {
          ...prev,
          [input] : +value
        }
    })
  } 

  return (
  <form className='form' onSubmit={submitHandler}>

        <div className='input-group'>
            <p>
              <label htmlFor='current-savings'>Current Savings</label>
              <input type='number' id='current-savings' onChange={(e)=>inpuChange( "current-savings" , e.target.value)} value={userValue['current-savings']}/>
            </p>
            <p>
                <label htmlFor='yearly-savings'>Yearly Savings</label>
                <input type='number' id='yearly-savings' onChange={(e)=>inpuChange( 'yearly-savings' , e.target.value)} value={userValue['yearly-savings']} />
            </p>
          </div> 

          <div className='input-group'> 
            <p>
                <label htmlFor='expectd-return'>Expected Interest</label>
                <input type='number' id="expectd-return" onChange={(e)=>inpuChange( "expectd-return", e.target.value)} value={userValue['expectd-return']} />
            </p>
           <p>
                <label htmlFor='duration'>Investment Duration</label>
                <input type='number' id="duration" onChange={(e)=>inpuChange( "duration" , e.target.value)} value={userValue['duration']} />
           </p>  
    </div>

    <p className='actions'>
       <button type='reset' onClick={reset} className='buttonAlt'>Reset</button>
       <button type='submit' className='button'>Calculate</button>
    </p>

  </form>
  )
}

export default Form