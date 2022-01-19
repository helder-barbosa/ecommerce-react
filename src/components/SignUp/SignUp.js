
import React, { Component } from "react";
import FormInput from "../Forms/FormInput/FormInput";
import Button from './../Forms/Button/Button'
import './SignUp.scss'
import { auth, handleUserProfile } from "../../firebase/utils";
import AuthWrapper from './../AuthWrapper/AuthWrapper'

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: []
}

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      const err = ['Passwords Don\'t Match']
      this.setState({
        errors: err
      })
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await handleUserProfile(user, { displayName })

      this.setState({
        ...initialState
      })

    } catch (err) {

    }
  }

  render() {

    const { displayName, email, password, confirmPassword, errors } = this.state

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

            <form onSubmit={this.handleFormSubmit}>
              <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                placeholder='Full Name'
              />
              <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                placeholder='Email'
              />
              <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                placeholder='Password'
              />
              <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
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
}

export default SignUp