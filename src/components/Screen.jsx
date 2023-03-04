import React, { useContext } from 'react'
import { OpContext } from '../context/OpContext';
import { resultado } from './helpers/resultado';
import './styles/screen.css'

export const Screen = () => {
    const {operacion} = useContext(OpContext);
    const result = resultado(operacion); 
    
    
  return (
    <div className='screen'>
        <p>{operacion}</p>
        <p>{result}</p>
    </div>
  )
}
