
import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './comp/HomePage'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SingleProduct from './comp/SingleProduct'
import Navbar from './comp/Navbar'
import Cart from './comp/Cart'

function App() {
  

  const [value,setValue] = useState([])


  useEffect(()=>{
      fetch('https://fakestoreapi.com/products/').then((data)=>{
      return data.json()
  }).then((result)=>{
      console.log(result)
      setValue(result)
  })
  },[])

  return (
    <>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <HomePage productData ={value}/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
