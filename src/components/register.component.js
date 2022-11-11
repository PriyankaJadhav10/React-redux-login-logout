import React, { useState } from 'react'
import {connect} from 'react-redux'
import {registerUser} from ' ./../redux/actions/authActionCreators.js'
// import {registerUser} from ' ./../redux/actions/authActionCreators'
import {toast} from 'react-toastify'

const RegisterForm = ({dispatchRegisterAction}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit =(event)=>{
    event.preventDefault()
    dispatchRegisterAction(firstName,lastName,email,password
      ,
      // ()=>console.log('Account created successfully'),
      ()=> toast.success('account created successfully'),
      // (message)=>console.log(`Error:${message}`)),
      (message)=> toast.error(`Error:${message}`))
  }
  return (
    <React.Fragment>
      <h2> new user ?</h2>
      <h3> create an account</h3>
      <br />

      <form noValidate onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input noValidate id='firstName'
            type='text'
            name='firstName'
            placeholder='first Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>First Name</label>
          <input noValidate id='lastName'
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>First Name</label>
          <input noValidate id='lastName'
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='email1'>Email</label>
          <input noValidate id='email1'
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='password1'>Password</label>
          <input noValidate id='password1'
            type='password'
            name='password1'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control' />
        </div>
        <button type='submit' className='btn btn-primary mr-2'>
          Register
        </button>
        <button type='submit' className='btn btn-outline-secondary'>
          Cancel
        </button>
      </form>
    </React.Fragment>
  )
}

const mapDispatchToProps =dispatch =>({
  dispatchRegisterAction:(firstName,lastName,email,password,onSuccess,onError)=>
 dispatch(registerUser({firstName,lastName,email,password},onSuccess,onError))
})
export default connect(null, mapDispatchToProps)(RegisterForm)
// export default registerForm
