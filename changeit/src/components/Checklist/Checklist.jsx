import React from "react"
import './checklist.css'
import { Form } from "./Form/Form"
import { Poster } from "./Poster/Poster"

export const Checklist = () => {
  return (
    <div className="checklist" name="checklist" id="checklist">
      <Poster/>
     <Form/>
    </div>
  )
}
