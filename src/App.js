import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import './default.scss'
import { auth, handleUserProfile } from './firebase/utils';
// Layouts
import MainLayout from './layouts/MainLayout'
import HomePageLayout from './layouts/HomePageLayout';

// Pages
import HomePage from './pages/HomePage/HomePage';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';

const initialState = {
  currentUser: null
}


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
  }

  authListener = null

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
    })
  }

  componentWillUnmount() {
    this.authListener()
  }

  render() {
    const { currentUser } = this.state

    return (
      <div className="App">

        <Switch>

          <Route exact path="/" >
            <HomePageLayout currentUser={currentUser}>
              <HomePage />
            </HomePageLayout>
          </Route>

          <Route path="/registration" >
            {currentUser ? <Redirect to='/' /> :
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            }
          </Route>

          <Route path="/login" >
            {currentUser ? <Redirect to='/' /> :
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            }
          </Route>

        </Switch>

      </div>
    )
  }
}

export default App;
