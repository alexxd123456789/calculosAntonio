import { useContext } from 'react';
import { CalcContext } from '../context/CalcContext';
import { OpProvider } from '../context/OpProvider';
import '../index.css';
import { AddCalc } from './AddCalc';
import { Calculator } from "./Calculator";
import {MdDelete} from 'react-icons/md'

export const CalcApp = () => {
  const {calculadoras, delCalc} = useContext(CalcContext);
  
  const onDelete = (calculadora) => {
    delCalc(calculadora);
  }


  
  return (
    <>
    <h1>Servicio de calculos Antonio S.A</h1>
    <AddCalc/>
    <div className="global">
      {
        calculadoras.map((calc, index) => {
          return (
            <div className="container" key={calc.id}>
              <h2>{index+1}. {calc.title} <span onClick={() => {onDelete(calc)}}><MdDelete/></span></h2>
              <OpProvider>
                <Calculator/>
              </OpProvider>
          </div>
          )
        })
      }
      
    </div>
    </>
  )
}
