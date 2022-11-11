import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginUser } from './../redux/actions/authActionCreators'
import {toast} from 'react-toastify'

const LoginForm = ({dispatchLoginAction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit =(event)=>{
    event.preventDefault()
    dispatchLoginAction(email,password,
      // ()=>console.log('Loggedin successfully'),
      ()=>toast.success('Loggedin successfully'),
      // (message)=>console.log(`Error:${message}`))
      (messge)=>toast.error(`Error:${messge}`))
  }
  return (
    <React.Fragment>
      <h2>Have an acct</h2>
      <h3>login here</h3>
      <br />

      <form noValidate onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input noValidate id='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input noValidate id='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control' />
        </div>

        <button type='submit' className='btn btn-primary'>
          login
        </button>
        <button className='btn btn-outline-secondary'>
          Cancel
        </button>
      </form>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchLoginAction: (email, password, onSuccess, onError) =>
    dispatch(loginUser({ email, password }, onSuccess, onError))
})

export default connect(null, mapDispatchToProps)(LoginForm)
// export default loginForm
