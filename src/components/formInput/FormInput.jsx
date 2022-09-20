import React from 'react'
import './FormInput.css'

const FormInput = (props) => {
  return (
    <div className='formInput formInput--fullwidth'>
        {props.label ? <label>{props.label}</label> : null}
        <input 
            type={props.type} 
            name={props.name} 
            placeholder={props.placeholder} 
        />
    </div>
  )
}

export default FormInput