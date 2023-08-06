import './Formstyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label >Email</label>
            <input type="email"></input>
            <label >Subject</label>
            <input type="text"></input>
            <label >Massage</label>
            <textarea rows="3"  placeholder="Type your massage here "/>
            <button className='btn'>submit</button>
        </form>

    </div>
  )
}

export default Form
