import React from "react"
import './benefits.css'
import imgPlanet from './benefits-planet.png'
import imgDeck from './benefits-deck.png'
import imgMoney from './benefits-money.png'

export const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits__item">
        <img
          src={imgPlanet}
          className="benefits__image"
        />
        <div className="benefits__title">The whole world!</div>
        <div className="benefits__description">
          We work all over the world, so it doesn't matter where you are.
        </div>
      </div>

      <div className="benefits__item">
        <img src={imgDeck} className="benefits__image" />
        <div className="benefits__title">Privacy and data security!</div>
        <div className="benefits__description">
          Your data is encrypted and stored on a secure portal which only you
          can access.
        </div>
      </div>

      <div className="benefits__item">
        <img
          src={imgMoney}
          alt=""
          className="benefits__image"
        />
        <div className="benefits__title">Fast and cheap!</div>
        <div className="benefits__description">
          Name change journey with us for as little as £45.95.
        </div>
      </div>
    </div>
  )
}
