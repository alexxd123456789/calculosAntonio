import React, { useContext, useRef } from 'react'
import { CalcContext } from '../context/CalcContext';

export const AddCalc = () => {

    const titleRef = useRef();
    
    
    const {addCalc} = useContext(CalcContext);


    const onSubmit = (evt) => {
      evt.preventDefault();

      if(titleRef.current.value.trim().length > 3){
        addCalc({
          id: Date.now(),
          title: titleRef.current.value.trim()
        });
        titleRef.current.value = '';
      }


    }
    
    
    
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="crearCalc" id="crearCalc" ref={titleRef} />
        <button type='submit'>Añadir</button>
    </form>
  )
}
