import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Homepages from './components/Homepages'
import Productpage from './components/Productpage'
import Aboutpages from './components/Aboutpages'

const router=createBrowserRouter([
  {path:'/',element: <Homepages/> },
  {path:'/products',element: <Productpage/> },
  {path:'/products',element: <Productpage/> },
  {path:'/about',element: <Aboutpages/> },
  {path:'/products',element: <Productpage/> },
  {path:'/products',element: <Productpage/> },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}


export default App
