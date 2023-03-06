import { useReducer } from 'react'
import { OpContext } from './OpContext'
import { opReducer } from './opReducer'
import { types } from './types';


export const OpProvider = ({children}) => {

  const init = () => {    
    return localStorage.getItem(children.props.id) || '';
  }

  console.log(children)
  
    const [operacion, dispatch] = useReducer(opReducer, '',init);

    const append = (value) => {
      if(operacion.length < 15){
        dispatch({
          type: types.append,
          payload: value
        })
        localStorage.setItem(children.props.id, operacion+value);
      }
    }

    const reset = () => {
      dispatch({
        type: types.reset
      })

      localStorage.removeItem(children.props.id);
    }

    const erase = () => {
      dispatch({
        type: types.erase
      })

      localStorage.setItem(children.props.id, operacion.slice(0,-1));
    }

    const setOp = (value) => {
      dispatch({
        type: types.set,
        payload: value
      })

      localStorage.setItem(children.props.id, value);
    }
    
  return (
    <OpContext.Provider value={{operacion, append, reset, erase, setOp}}>
        {children}
    </OpContext.Provider>
  )
}
