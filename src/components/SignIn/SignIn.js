import React, { useState } from 'react'
import { signInWithGoogle, auth } from './../../firebase/utils'
import FormInput from './../Forms/FormInput/FormInput'
import Button from '../Forms/Button/Button'
import './SignIn.scss'
import AuthWrapper from '../AuthWrapper/AuthWrapper'
import { Link, withRouter } from 'react-router-dom'

const SignIn = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await auth.signInWithEmailAndPassword(email, password)
      resetForm()
      props.history.push('/')

    } catch (err) {

    }
  }


  const configAuthWrapper = {
    headline: "LogIn"
  }

  return (

    <AuthWrapper {...configAuthWrapper}>

      <div className='formWrap'>
        <form onSubmit={handleSubmit}>

          <FormInput
            type='email'
            name='email'
            value={email}
            placeholder='Email'
            handleChange={e => setEmail(e.target.value)}
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            handleChange={e => setPassword(e.target.value)}
          />

          <Button type='submit'>
            LogIn
          </Button>

          <div className='socialSignin'>
            <div className='row'>
              <Button onClick={signInWithGoogle}>
                Sign In with Google
              </Button>
            </div>
          </div>

          <div className='links'>
            <Link to='/recovery'>
              Reset Password
            </Link>
          </div>
        </form>
      </div>

    </AuthWrapper>

  )
}


export default withRouter(SignIn)
