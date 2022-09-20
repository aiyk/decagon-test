import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = [
    {
        id: 0,
        title: 'User journey of the project',
        collaborators: [],
        startDate: '11th March, 2022',
        endDate: '11th March, 2022',
        hoursBudgeted: 12,
        status: 'Completed'
    },
    {
        id: 1,
        title: 'Wireframing the project',
        collaborators: [],
        startDate: '14th March, 2022',
        endDate: '16th March, 2022',
        hoursBudgeted: 22,
        status: 'New'
    }
]

const initialCollaborators = [
    {
        id: 1,
        Name: 'Wade Johnson',
        img: null
    },
    {
        id: 2,
        Name: 'Daniel Woods',
        img: null
    }
]

export const ContextProvider = ({ children }) => {
    const [ todos, setTodo ] = useState(initialState) 
    const [ collaborators, setCollaborators ] = useState(initialCollaborators) 

    return (<StateContext.Provider value={{
        todos, setTodo,
        collaborators, setCollaborators
    }}>{children}</StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext);