import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Github, {getData} from './components/github/Github'
import User from './components/user/User'


//constructing the router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About/>} />  
      <Route path="Contact" element={<Contact />} />
      <Route 
      path="GitHub" 
      element={<Github />} 
      loader={getData}
      />
      <Route path="User/:userid" element={<User/>}/>
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
