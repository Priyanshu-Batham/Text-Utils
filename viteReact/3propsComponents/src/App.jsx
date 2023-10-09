import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/product'

function App() {
  let p1 = {
    price : 22,
    name : "Shoes"
  }

  let p2 = {
    price : 45,
    name : "Basket"
  }

  return (
    <>
      <Product data = {p1}/>
      <Product data = {p2}/> 
    </>
  )
}

export default App
