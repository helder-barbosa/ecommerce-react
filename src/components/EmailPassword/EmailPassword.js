import React, { useState } from 'react'
import './EmailPassword.scss'
import AuthWrapper from '../AuthWrapper/AuthWrapper'
import FormInput from '../Forms/FormInput/FormInput'
import Button from '../Forms/Button/Button'
import { auth } from './../../firebase/utils'
import { withRouter } from 'react-router-dom'



const EmailPassword = props => {

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const config = {
        url: 'http://localhost:3000/login'
      }

      await auth.sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push('/login')
        })
        .catch(() => {
          const err = ['Email not found. Please try again.']
          setErrors(err)
        })
    } catch (err) {

    }
  }

  const configAuthWrapper = {
    headline: 'Email Password'
  }

  return (
    <AuthWrapper {...configAuthWrapper}>

      <div className='formWrap'>

        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return (
                <li key={index}>
                  {e}
                </li>
              )
            })}
          </ul>
        )}

        <form onSubmit={handleSubmit}>

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <Button type='submit'>
            Email Password
          </Button>

        </form>

      </div>

    </AuthWrapper>
  )
}


export default withRouter(EmailPassword)
