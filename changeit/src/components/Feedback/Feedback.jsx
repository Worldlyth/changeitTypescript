import React from "react"
import './feedback.css'
import avatarCodyFisher from './cody-fisher.png'
import avatarEleanorPena from './eleanor-pena.png'
import avatarTheresaWebb from './theresa-webb.png'
import avatarEstherHoward from './esther-howard.png'

export const Feedback = () => {
  return (
    <div className="feedback" name="feedback" id="feedback">
      <div className="feedback__item bg_yellow">
        <div className="item__about">
          <img src={avatarCodyFisher} alt="" className="feedback__avatar" />
          <div className="about__info">
            <div className="info__name">Cody Fisher</div>
            <div className="info-country">South Dakota</div>
          </div>
        </div>
        <div className="item-text">
          Fantastic service and great value for money!
        </div>
      </div>

      <div className="feedback__item bg_pink">
        <div className="item__about">
          <img src={avatarEleanorPena} alt="" className="feedback__avatar" />
          <div className="about__info">
            <div className="info__name">Eleanor Pena</div>
            <div className="info-country">Guinea</div>
          </div>
        </div>
        <div className="item-text">
          Thank you so much for taking the time to share your experience with
          others. So pleased you found the service helpful. Wishing you all the
          best in your next chapter!
        </div>
      </div>

      <div className="feedback__item bg_white">
        <div className="item__about">
          <img src={avatarTheresaWebb} alt="" className="feedback__avatar" />
          <div className="about__info">
            <div className="info__name">Theresa Webb</div>
            <div className="info-country">Greece</div>
          </div>
        </div>
        <div className="item-text">
          Would definitely recommend to anyone looking for an efficient service.
        </div>
      </div>

      <div className="feedback__item bg_yellow">
        <div className="item__about">
          <img src={avatarEstherHoward} alt="" className="feedback__avatar" />
          <div className="about__info">
            <div className="info__name">Esther Howard</div>
            <div className="info-country">Iceland</div>
          </div>
        </div>
        <div className="item-text">Well explained and a fast delivery :)</div>
      </div>
    </div>
  )
}
