import React from 'react'
import { OpProvider } from '../context/OpProvider'
import { Buttons } from './Buttons'
import { Screen } from './Screen'

export const Calculator = () => {
  return (
    <OpProvider>
        <Screen/>
        <Buttons/>
    </OpProvider>
  )
}
