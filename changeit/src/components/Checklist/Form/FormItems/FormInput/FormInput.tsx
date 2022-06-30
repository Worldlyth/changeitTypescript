import React from "react"
import "./formInput.css"
import { useState } from "react"

interface formField {
  value: string,
  style: string,
  error: string
}

interface fieldProps {
  id: string, 
  label: string,
  type: string,
  placeholder: string
}

export const FormInput:React.FC<fieldProps> = ({ id, label, type, placeholder }) => {
  const [field, setField] = useState<formField>({
    value: "",
    style: "item__field",
    error: "",
  })

  function validate(e: React.ChangeEvent<HTMLInputElement>) {
    const fieldValue = e.target.value

    if (id === "firstName" || id === "lastName") {
      validateNames(fieldValue)
    } else if (id === "email") {
      validateEmail(fieldValue)
    } else if (id === "lifeEventDate") {
      validateDate(fieldValue)
    }
  }

  function validateNames(value: string) {
    const regCapitalized = /^[A-Z\s]*$/
    const regName = /^[a-zA-Z\s]*$/

    if (!value) {
      setError("filled")
    } else if (value.length < 3) {
      setError(" more than 3 letters")
    } else if (!regName.test(value)) {
      setError(" contained only letters")
    } else if (!regCapitalized.test(value.charAt(0))) {
      setError("capitalized")
    } else {
      setCorrect()
    }
  }

  function validateEmail(value: string) {
    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (!regEmail.test(value)) {
      setError(" matched to Email format")
    } else {
      setCorrect()
    }
  }

  function validateDate(value: string) {
    const fieldDate:number = Date.parse(value)
    const regDate:RegExp = /^\d{2}\.\d{2}\.\d{4}$/
    const nowDate:any = new Date()
    const timeStamp:number = Date.parse(nowDate)

    if (!regDate.test(value)) {
      setError(" matched to DD.MM.YYYY format")
    } else if (fieldDate > timeStamp) {
      setError(" Date that not letter than the current one")
    } else {
      setCorrect()
    }
  }

  const setError = (message: string) => {
    setField(() => ({
      ...field,
      style: "field-error",
      error: `*${label} must be ${message}`,
    }))
  }

  const setCorrect = () => {
    setField(() => ({
      ...field,
      style: "field-correct",
    }))
  }

  const fieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(() => ({ ...field, value: e.target.value }))
  }

  const reset = () => {
    setField(() => ({
      ...field,
      style: "item__field",
      error: "",
    }))
  }

  return (
    <div className="form__item">
      <label htmlFor={id} className="item__label">
        {label}
      </label>
      <input
        className={field.style}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={fieldHandler}
        value={field.value}
        onBlur={validate}
        onFocus={reset}
      />
      <div className="error-text">{field.error}</div>
    </div>
  )
}
