import React from 'react'
import './FormInput.scss'

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className='formRow'>
      {label && (
        <label>
          {label}
        </label>
      )}

      <input className='formInput' onChange={handleChange} {...otherProps} />
    </div>
  )
}

export default FormInput
