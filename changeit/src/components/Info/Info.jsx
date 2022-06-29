import React from 'react'
import { About } from './About/About'
import { Benefits } from './Benefits/Benefits'
import { Questions } from './Questions/Questions'
import { Slogan } from './Slogan/Slogan'
import { Striving } from './Striving/Striving'


export const Info = () => {
  return (
    <div>
    <About/>
    <Benefits/>
     <Slogan/>
     <Questions/>
     <Striving/>
    </div>
  )
}
