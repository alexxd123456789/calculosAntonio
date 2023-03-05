import React, { useContext } from 'react'
import { OpContext } from '../context/OpContext'
import { SpecialButtons } from './SpecialButtons'
import './styles/buttons.css'
import { FiDelete } from 'react-icons/fi'
import { resultado } from './helpers/resultado'

export const Buttons = () => {

    const {operacion, append, reset, erase, setOp} = useContext(OpContext);


    const handleClick = ({target}) => {
        let filtrar = target.name;
        
        
        if(!filtrar){
            filtrar = 'delete';
        }
        
        
        switch(filtrar){
            case 'AC':
                reset();
                break;

            case '=':
                setOp(resultado(operacion))
                break;

            case 'delete':
                erase();
                break;
            
            default:
                append(target.name);
                break;
        }
    }

    const numeros = [7,8,9,4,5,6,1,2,3];
    
  return (
    <div className='buttons'>
        <button onClick={handleClick} name="AC" style={{ gridColumn: '1/3'}}>AC</button>
        <button onClick={handleClick} name="delete"><FiDelete/></button>
        <SpecialButtons handleClick={handleClick}/>
        {
            numeros.map((numero, index) => {
                return (
                    <button key={index} name={numero} onClick={handleClick}>{numero}</button>
                );
            })
        }
        <button onClick={handleClick} name="0" style={{ gridColumn: '1/3'}}>0</button>
        <button onClick={handleClick} name=".">.</button>

    </div>
  )
}
