import { useReducer } from 'react'
import { OpContext } from './OpContext'
import { opReducer } from './opReducer'
import { types } from './types';

export const OpProvider = ({children}) => {

    const [operacion, dispatch] = useReducer(opReducer, '');

    const append = (value) => {
      dispatch({
        type: types.append,
        payload: value
      })
    }

    const reset = () => {
      dispatch({
        type: types.reset
      })
    }

    const erase = () => {
      dispatch({
        type: types.erase
      })
    }

    const setOp = (value) => {
      dispatch({
        type: types.set,
        payload: value
      })
    }
    
  return (
    <OpContext.Provider value={{operacion, append, reset, erase, setOp}}>
        {children}
    </OpContext.Provider>
  )
}
