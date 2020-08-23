import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-dark'>
        <span className='navbar-brand mb-0 h1'>
          <Link to={'/'} className='text-light'>
            Hot Dog
          </Link>
        </span>
        <Link to={'/products/new'} className='btn btn-danger'>
          Add Product
        </Link>
      </nav>

      // <nav classNameName='navbar navbar-dark bg-info justify-content-between d-flex'>
      //   <h1>
      //     <Link to={'/'} classNameName='text-light'>
      //       Hot Dog
      //     </Link>
      //   </h1>
      //   <Link to={'/products/new'} classNameName='btn btn-danger'>
      //     Add Product
      //   </Link>
      // </nav>
    )
  }
}

export default Header
