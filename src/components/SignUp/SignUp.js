
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import FormInput from "../Forms/FormInput/FormInput";
import Button from './../Forms/Button/Button'
import './SignUp.scss'
import { auth, handleUserProfile } from "../../firebase/utils";
import AuthWrapper from './../AuthWrapper/AuthWrapper'


const SignUp = props => {

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([])

  const reset = () => {
    setDisplayName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setErrors([])
  }

  const handleFormSubmit = async (evt) => {
    evt.preventDefault()

    if (password !== confirmPassword) {
      const err = ['Passwords Don\'t Match']
      setErrors(err)
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await handleUserProfile(user, { displayName })

      reset()
      props.history.push('/')

    } catch (err) {

    }
  }

  const configAuthWrapper = {
    headline: "Registration"
  }

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">

        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              )
            })}
          </ul>
        )}

        <div className="formWrap">

          <form onSubmit={handleFormSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              handleChange={e => setDisplayName(e.target.value)}
              placeholder='Full Name'
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              handleChange={e => setEmail(e.target.value)}
              placeholder='Email'
            />
            <FormInput
              type='password'
              name='password'
              value={password}
              handleChange={e => setPassword(e.target.value)}
              placeholder='Password'
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              handleChange={e => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
            />
            <Button type='submit'>
              Register
            </Button>
          </form>
        </div>
      </div>
    </AuthWrapper>
  )
}


export default withRouter(SignUp)
