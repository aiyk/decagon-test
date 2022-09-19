import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import { AppHeader, SideNav } from "./components"
import { Dasboard } from "./pages"

import { Schedule1, Schedule2, CaretLeft, CaretRight, emoji, user1, user2, user3, user4, CaretRightWhite } from './assets'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div className='app'>
              <SideNav />
              <div className='thebody'>
                <AppHeader />
                <div className='app__body'>
                  <div className='app__body__contentArea'>
                    <Routes>
                      <Route path="/" element="Dasboard"></Route>
                      <Route path="/dashboard" element="Dasboard"></Route>
                    </Routes>
                  </div>
                  <div className='app__body__rightTab'>
                    <div className='app__body__rightTab__header'>
                      <div className='app__body__rightTab__header__title'>Today's Schedule</div>
                      <div className='app__body__rightTab__header__actions'>
                        <img src={Schedule1} alt="link"/>
                        <img src={Schedule2} alt="link"/>
                      </div>
                    </div>

                    <div className='app__body__rightTab__header__title formTitle'>New Task</div>

                    <div className='formInput formInput--fullwidth'>
                      <label>Task Title</label>
                      <input type="text" placeholder='Create new' />
                    </div>

                    <div className='emojis'>
                      <img src={CaretLeft} alt="link"/>
                      <img src={emoji} alt="link"/>
                      <img src={CaretRight} alt="link"/>
                    </div>

                    <div className='liner'></div>

                    <div className='formInput formInput--fullwidth mb-15'>
                      <label>Add contributors</label>
                      <div className='addContributors'>
                        <div className='addContributors__contributor addContributors__contributor--purple'>
                          <div className='addContributors__contributor__pfp'>
                            <img src={user1} alt="link"/>
                          </div>
                          <span>Angela</span>
                          <span className='addContributors__contributor__pfp__cancel'>X</span>
                        </div>
                        <div className='addContributors__contributor addContributors__contributor--blue'>
                          <div className='addContributors__contributor__pfp'>
                            <img src={user4} alt="link"/>
                          </div>
                          <span>Chris</span>
                          <span className='addContributors__contributor__pfp__cancel'>X</span>
                        </div>

                        <div className='addContributors__add'>+</div>
                        <div className='addContributors__scroll'>
                          <img src={CaretRightWhite} alt="link"/>
                        </div>
                      </div>
                    </div>

                    <div className='liner mb-15'></div>

                    <div className='formInput formInput--fullwidth'>
                      <label>Time to complete</label>
                      <input type="date" placeholder='Start date' />
                    </div>

                    <div className='formInput formInput--fullwidth'>
                      <input type="date" placeholder='End date' />
                    </div>

                    <div className='liner mb-15'></div>

                    <div className='formInput formInput--fullwidth'>
                      <label>Hours budgeted</label>
                      <input type="text" placeholder='Enter hours' />
                    </div>

                    <div className='flexed mb-15'>
                      <div></div>                      
                      <button className='btn'>Save</button>
                    </div>

                    <div className='liner mb-15'></div>

                    <div className='app__body__rightTab__header__title formTitle'>Messages</div>

                    <div className='message'>
                      <div className='message__userPfp message__userPfp--orange'>
                        <div className='message__userPfp__inner'>
                          <img src={user1} alt="link"/>
                        </div>
                      </div>
                      <div className='message__userData'>
                        <div className='message__userData__name'>Chris Webber</div>
                        <div className='message__userData__msg'>Hi Michael! How are You?</div>
                      </div>
                    </div>

                    <div className='message'>
                      <div className='message__userPfp message__userPfp--red'>
                        <div className='message__userPfp__inner'>
                          <img src={user2} alt="link"/>
                        </div>
                      </div>
                      <div className='message__userData'>
                        <div className='message__userData__name'>Kelvin Durant</div>
                        <div className='message__userData__msg'>Do you need that design?</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App