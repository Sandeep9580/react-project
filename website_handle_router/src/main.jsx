import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './assets/componenets/Header/Header.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './assets/componenets/Home/Home.jsx'
import About from './assets/componenets/About/About.jsx'
import Contact from './assets/componenets/Contact/Contact.jsx'
import User from './assets/componenets/User/User.jsx'
import Github, { githubInfoLoader } from './assets/componenets/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//     {
//      path:"",
//      element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//     ]
//   }
  
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
      path="github"
      element={<Github/>}
      loader={githubInfoLoader}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />

    
  </React.StrictMode>,
)
