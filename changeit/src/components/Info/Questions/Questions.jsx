import React from "react"
import './questions.css'

export const Questions = () => {
  return (
    <div className="questions" name="questions" id="questions">
      <div className="questions__item bg_pink">
        <div className="questions__title">Why should I choose Change.it?</div>
        <div className="questions__text">
          We strive to provide the very best in automation, coupled with a
          personal, human touch. Profiles are usually populated within 60
          seconds of checkout.
        </div>
      </div>

      <div className="questions__item bg_yellow">
        <div className="questions__title">
          Will my name change instantly after using this service?
        </div>
        <div className="questions__text">
          No. We can only advise you on how to change your name and equip you
          with the tools to go about it.
        </div>
      </div>

      <div className="questions__item bg_white">
        <div className="questions__title">
          What kind of companies do I need to notify?
        </div>
        <div className="questions__text">
          As well as helping you through the process of how to change your name,
          NameSwitch makes it easier to identify which organisations and
          companies you’ll need to notify about your impending name change.
        </div>
      </div>

      <div className="questions__item bg_blue">
        <div className="questions__text">Ask a Question</div>
      </div>
    </div>
  )
}
