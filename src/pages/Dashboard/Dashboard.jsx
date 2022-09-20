import React from 'react'
import "./Dashboard.css"
import { Completed, lineGraph1, lineGraph2, lineGraph3, Options } from '../../assets'

import { useStateContext } from '../../contexts/ContextProvider'

function Dashboard() {

  const { todos } = useStateContext();

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

      <div className='full-card'></div>

      <div className='full-card'>
        <div className='full-card__header'>
          <div className='full-card__title'>Task</div>
          <select>
            <option>Last day</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last quarter</option>
            <option>Last year</option>
          </select>
        </div>

        <table>
          <thead>
            <tr className='tr--hasBorder'>
              <th>Name Of Task</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Hours</th>
              <th>Progress</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {todos.map(todo => {
              return(
                <tr key={todo.id} className='tr--hasBorder'>
                  <td>{todo.title}</td>
                  <td>{todo.startDate}</td>
                  <td>{todo.endDate}</td>
                  <td>{todo.hoursBudgeted}</td>
                  <td>
                    <div className='progress'>
                      <label>60% completed</label>
                      <div className='prgressBar'>
                        <div className='prgressBar__innerBar'></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img src={Options} alt="link"/>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard