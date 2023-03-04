import React, { useReducer } from 'react'
import {CalcContext} from './CalcContext'
import { calcReducer } from './calcReducer'
import { types } from './types'

const initialState = [{
  id: Date.now(),
  title: 'Principal'
}]

const init = () => {
  const hola = JSON.parse(localStorage.getItem('calculadoras') || '[]');

  return hola;
}

export const CalcProvider = ({children}) => {

  const [calculadoras, dispatch] = useReducer(calcReducer, initialState, init)

  const addCalc = (calculadora) => {
    dispatch({
      type: types.addCalc,
      payload: calculadora
    })

    localStorage.setItem('calculadoras', JSON.stringify([...calculadoras, calculadora]));
  }

  const delCalc = (calculadora) => {
    dispatch({
      type: types.delCalc,
      payload: calculadora.id
    })

    localStorage.setItem('calculadoras', JSON.stringify(calculadoras.filter(calc => calc.id != calculadora.id)));

  }

  return (
    <CalcContext.Provider value={{calculadoras, addCalc, delCalc}}>
      {children}
    </CalcContext.Provider>
  )
}
