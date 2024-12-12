import React from 'react'
import Login from './login'
import Brose from './brose'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
function body() {
    const approuter = createBrowserRouter([{
        path:"/",
        element:<Login />
    },
    {
        path:"/brose",
        element:<Brose /> 
    }
])
  return (
  
   <RouterProvider  router={approuter}/>
  )
}

export default body