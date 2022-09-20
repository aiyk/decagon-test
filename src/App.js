import React from 'react'
import { BrowserRouter } from "react-router-dom"
import "./App.css"

import { AppHeader, SideNav, FormInput } from "./components"
import { Dashboard } from "./pages"
import { useStateContext } from './contexts/ContextProvider'
import {useState, useRef} from 'react';

import { Schedule1, Schedule2, CaretLeft, CaretRight, emoji, user1, user2, user4, CaretRightWhite } from './assets'

const App = () => {

  const { todos, setTodo, collaborators, setCollaborators } = useStateContext();

  const [contributors, setContributors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target)
    let todo = Object.fromEntries(data.entries())
    todo.id = todos.length
    todo.status = 'New'
    setTodo([...todos, todo])
    console.log(todos)
  }

  return (
    <div>
        <BrowserRouter>
            <div className='app'>
              <SideNav />
              <div className='thebody'>
                <AppHeader />
                <div className='app__body'>
                  <div className='app__body__contentArea'>
                    <Dashboard />
                  </div>
                  <form onSubmit={handleSubmit} className='app__body__rightTab'>
                    <div className='app__body__rightTab__header'>
                      <div className='app__body__rightTab__header__title'>Today's Schedule</div>
                      <div className='app__body__rightTab__header__actions'>
                        <img src={Schedule1} alt="link"/>
                        <img src={Schedule2} alt="link"/>
                      </div>
                    </div>

                    <div className='app__body__rightTab__header__title formTitle'>New Task</div>

                    <FormInput 
                      label="Task Title"  
                      type="text"
                      name="title"
                      placeholder='Create new'
                    />

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

                    <FormInput 
                      label="Time to complete"  
                      type="date"
                      name="startDate"
                      placeholder='Start Date' 
                    />
                    <FormInput 
                      type="date"
                      name="endDate"
                      placeholder='End Date' 
                    />

                    <div className='liner mb-15'></div>

                    <FormInput 
                      type="number"
                      name="hoursBudgeted"
                      placeholder='Enter hours' 
                    />

                    <div className='flexed mb-15'>
                      <div></div>                      
                      <button type='submit' className='btn'>Save</button>
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
                  </form>
                </div>
              </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App