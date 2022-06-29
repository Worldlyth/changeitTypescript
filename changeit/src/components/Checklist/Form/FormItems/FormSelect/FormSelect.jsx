import React from 'react'
import './formSelect.css'
import { useState } from 'react';

export const FormSelect = ({id, label}) => {

  const [option, setOption] = useState ({
    value: '',
    style: 'field__select item__field',
    error: ''
  })

function validateSelect (e) {
  const option = e.target.value
  if (!option) {
    setError(" selected")
  } else {
    setCorrect()
  }
}

  const setError = (message) => {
    setOption(() => ({
      ...option,
      style: " field__select field-error",
      error: `*${label} must be ${message}`,
    }))
  }

  const setCorrect = () => {
    setOption(() => ({
      ...option,
      style: "field__select field-correct",
    }))
  }

  const handleSelect = (e) => {
    setOption(()=>({
      ...option,
      value: e.target.value
    }))
  }

  const reset = () => {
    setOption(()=>({
      ...option,
      style: 'field__select item__field',
      error: ''
    }))
  }
  
  return (
    <div className="form__item">
    <label htmlFor={id} className="item__label">
      {label}
    </label>
      <select className={option.style} id={id} onBlur={validateSelect} onFocus={reset}>
        <option value={''}>-</option>
        <option value={"marriage"} onClick={handleSelect}>Marriage</option>
        <option value={"adoption"} onClick={handleSelect}>Adoption</option>
      </select>
      <div className="error-text">{option.error}</div>
  </div>
  )
}
