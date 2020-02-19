/* eslint-disable react/prop-types */
import MyContext from './MyContext'
import React, { useReducer } from 'react'
import reducer from './reducer'
import InitialState from './InitialState'

const ProviderContext = props => {

    const [state, dispatch] = useReducer(reducer, InitialState)
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MyContext.Provider>
    )
}
    
export default ProviderContext