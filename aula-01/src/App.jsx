import { useState } from 'react'
import './App.css'
import Paragrafo from './components/Paragrafo'
import Titulo from './components/Titulo'

function App() {
  return (
   <>
      <Titulo texto="Golden Experience..." />
      <Titulo texto="....Requiem...." />
      <Paragrafo/>
   </>
  )
}


export default App


