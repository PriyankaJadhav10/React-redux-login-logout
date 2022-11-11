import React from 'react'
import {Link} from 'react-router-dom'

const header = ({userName,isLoggedIn, onLogout}) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      {/* <div className='col-md-5'>Header</div> */}
      <div className='container'>
        <Link className='navbar-brand'  to='/'>
            <span className='h4'>Personal notes MGR</span>
        </Link>
        {/* {
          isLoggedIn  && 
          <h4 className='ml-auto mr-4'>
            <span className='badge badge-pill badge-secondary text-capitalize'>
              Welcome {userName} !
            </span>
          </h4>
        }
        {
          isLoggedIn  && 
          <h4>
            <button type='button' onClick={onLogout} className='btn btn-outline-warning'>
              logout 
            </button>
          </h4>
        } */}
      </div>
    </nav>
  )
}

export default header