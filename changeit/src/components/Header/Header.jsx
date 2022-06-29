import React from 'react'
import './header.css'

export const Header = () => {
  return (  
         <div className="header">
    <div className="header-top">
      <div className="header-logo">
        Change<span>.it</span>
      </div>
      <div className="nav-menu__show">
        <img src="./Img/menu-icon.svg" alt="" className="nav-menu__icon" />
        <ul className="header-nav-menu">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#questions">How it works</a></li>
          <li><a href="#feedback">Reviews</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#checklist">Checklist</a></li>
        </ul>
      </div>
    </div>
    <div className="header-post">
      <div className="header-label">CHANGE YOUR NAME QUICKLY!</div>

      <input type="button" className="header-button" value="Get started now" />
    </div>
    <div className="header-bottom">
      <div className="header-description">
        Starting a new chapter in your life should be
        <p>a time of excitement and fresh beginnings.</p>
      </div>
    </div>
  </div>
  )
}
