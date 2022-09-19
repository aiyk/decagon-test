import React from 'react'
import "./SideNav.css"

import { Menu, Nav0, Nav1, Nav2, Nav3, Nav4, Nav5 } from '../../assets'

function SideNav() {
  return (
    <div className='sidenav'>
      <div className='appIcon'>
        <img src={Menu} alt="icon"/>
        <span className='appIcon__label'>TO-DO</span>
      </div>

      <div className='sidenav__links'>
        <div className='sidenav__link'>
          <img src={Nav0} alt="link"/>
        </div>
        <div className='sidenav__link'>
          <img src={Nav1} alt="link"/>
        </div>
        <div className='sidenav__link'>
          <img src={Nav2} alt="link"/>
        </div>
        <div className='sidenav__link'>
          <img src={Nav3} alt="link"/>
        </div>
        <div className='sidenav__link'>
          <img src={Nav4} alt="link"/>
        </div>
        <div className='sidenav__link'>
          <img src={Nav5} alt="link"/>
        </div>
      </div>
    </div>
  )
}

export default SideNav