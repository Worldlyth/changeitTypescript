import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <div className="footer bg_pink">
    <div className="footer__newsletter">
      <div className="newsletter__title">Newsletter</div>
      <input
        type="text"
        className="newsletter__form"
        placeholder="Enter Your Email"
      />
    </div>

    <div className="copyright">© 2022 Change.it Ltd. All Rights Reserved</div>

    <ul className="links">
      <li>Divorce</li>
      <li>Privacy</li>
      <li>Deed Poll Online</li>
      <li>Terms</li>
      <li>FAQ</li>
    </ul>
  </div>
  )
}
