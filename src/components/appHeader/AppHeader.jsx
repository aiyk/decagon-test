import React from 'react'
import "./AppHeader.css"
import { Search, Notification, pfp, CaretDown } from '../../assets'

function AppHeader() {
  return (
    <div className='appHeader'>
      <div></div>
      <div>
        <div className='searchWrap'>
          <input type="search" className='search' placeholder='search anything...' />
          <img className='search__icon' src={Search} alt="icon"/>
        </div>
      </div>
      <div className='appHeader__rightIcons'>
        <div className='appHeader__rightIcons__notification'>
          <div className='appHeader__rightIcons__notification__count'>5</div>
          <img className='search__icon' src={Notification} alt="icon"/>
        </div>
        <div className='appHeader__rightIcons__others'>
          <div className='appHeader__rightIcons__pfp'>
            <img src={pfp} alt="icon"/>
          </div>
          <img src={CaretDown} alt="icon"/>
        </div>
      </div>
    </div>
  )
}

export default AppHeader