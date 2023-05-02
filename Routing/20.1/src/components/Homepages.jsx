import React from 'react'
import {Link} from 'react-router-dom'

const Homepages = () => {
  return (
    <div>
      <h1>Home Page!</h1>
      <Link to='/products'>The list of Products</Link><br></br>
      <Link to='/about'>The list of about</Link>
    </div>
  )
}

export default Homepages
