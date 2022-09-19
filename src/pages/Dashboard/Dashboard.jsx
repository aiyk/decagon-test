import React from 'react'
import "./Dashboard.css"
import { Completed, lineGraph1, lineGraph2, lineGraph3 } from '../../assets'

function Dashboard() {
  return (
    <div className='db'>
      <div className='db__stats'>
        <div className='db__stats__stat'>
          <div className='db__stats__stat__header'>
            <div className='db__stats__stat__header__icon'>
              <img src={Completed} alt="link"/>
            </div>
            <label className='db__stats__stat__header__label'>Task Completed</label>
            <label className='db__stats__stat__header__count'>08</label>
          </div>

          <div className='db__stats__stat__body'>
            <div className='db__stats__stat__body__graph'>
              <img src={lineGraph1} alt="graph"/>
            </div>
            <div className='db__stats__stat__body__graphData'>
              <div className='db__stats__stat__body__graphData__item'><span>10+ </span> more</div>
              <div className='db__stats__stat__body__graphData__item'>from last week</div>
            </div>
          </div>
        </div>
        
        <div className='db__stats__stat'>
          <div className='db__stats__stat__header'>
            <div className='db__stats__stat__header__icon'>
              <img src={Completed} alt="link"/>
            </div>
            <label className='db__stats__stat__header__label'>New Task</label>
            <label className='db__stats__stat__header__count'>10</label>
          </div>

          <div className='db__stats__stat__body'>
            <div className='db__stats__stat__body__graph'>
              <img src={lineGraph2} alt="graph"/>
            </div>
            <div className='db__stats__stat__body__graphData'>
              <div className='db__stats__stat__body__graphData__item'><span>10+ </span> more</div>
              <div className='db__stats__stat__body__graphData__item'>from last week</div>
            </div>
          </div>
        </div>

        <div className='db__stats__stat'>
          <div className='db__stats__stat__header'>
            <div className='db__stats__stat__header__icon'>
              <img src={Completed} alt="link"/>
            </div>
            <label className='db__stats__stat__header__label'>Project Done</label>
            <label className='db__stats__stat__header__count'>10</label>
          </div>

          <div className='db__stats__stat__body'>
            <div className='db__stats__stat__body__graph'>
              <img src={lineGraph3} alt="graph"/>
            </div>
            <div className='db__stats__stat__body__graphData'>
              <div className='db__stats__stat__body__graphData__item'><span>08+ </span> more</div>
              <div className='db__stats__stat__body__graphData__item'>from last week</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard