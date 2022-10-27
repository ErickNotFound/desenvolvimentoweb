import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Header />
      <Bio texto="Saiba mais" />
      <Footer />
    </>
  )
}

export default App
