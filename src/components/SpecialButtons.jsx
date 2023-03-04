import React from 'react'

export const SpecialButtons = ({handleClick}) => {
    const botones = ['/','*','+','-','='];
    
    
  return (
    <>
        {
            botones.map((boton, index) => {
                return (
                    <button className='special' key={index} name={boton} onClick={handleClick} style={{
                        gridRow: index+1
                    }}>{boton}</button>
                )
            })
        }
    </>
  )
}
