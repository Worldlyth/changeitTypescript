import React from "react"
import { useState } from "react"
import { FormInput } from "./FormItems/FormInput/FormInput"
import { FormSelect } from "./FormItems/FormSelect/FormSelect"
export const Form = () => {

const [alert, setAlert] = useState ('')

  function checkValidity(e) {
    const form = document.getElementById("checklistForm")
    const inputs = form.getElementsByTagName('input')
    for (let input of inputs) {
     if (!input.classList.contains('field-correct')) {
      setAlert("*Please make sure the fields are filled and correct" )
      e.preventDefault()
     }
    }
  }

  return (
    <form className="checklist__form bg_white" onSubmit={checkValidity} id="checklistForm">
      <FormInput
        type="text"
        placeholder="Enter your First Name"
        id="firstName"
        label="First Name"
      />



      <FormInput
        type="text"
        placeholder="Enter your Last Name"
        id="lastName"
        label="Last Name"
      />

      <FormInput
        type="text"
        placeholder="Enter your Email"
        id="email"
        label="Email"
      />

      <FormSelect
        label="Life Event"
        id="lifeEvent"
      />

      <FormInput
        type="text"
        placeholder="DD.MM.YYYY"
        id="lifeEventDate"
        label="Life Event Date"
      />

      <div className="form__notice">
        <span className="span-grey">
          By submitting your details you agree with our &nbsp;
          <span className="span-line">
            <a href="#privacy">Privacy Policy.</a>
          </span>
        </span>
      </div>
      <div className="alert">{alert}</div>
      <button type="submit" value="Download" className="form__button" >Download</button>
    </form>
  )
}
