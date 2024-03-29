import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import './default.scss'
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';
import { connect } from 'react-redux';

// hoc
import WithAuth from './hoc/WithAuth';

// Layouts
import MainLayout from './layouts/MainLayout'
import HomePageLayout from './layouts/HomePageLayout';

// Pages
import HomePage from './pages/HomePage/HomePage';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Recovery from './pages/Recovery/Recovery';
import Dashboard from './pages/Dashboard/Dashboard'

const App = props => {
  const { setCurrentUser, currentUser } = props

  useEffect(() => {

    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }

      setCurrentUser(userAuth)
    })

    return () => {
      authListener()
    }
  }, [])

  return (
    <div className="App">

      <Switch>

        <Route exact path="/" >
          <HomePageLayout >
            <HomePage />
          </HomePageLayout>
        </Route>

        <Route path="/registration" >
          {currentUser ? <Redirect to='/' /> :
            <MainLayout >
              <Registration />
            </MainLayout>
          }
        </Route>

        <Route path="/login" >
          {currentUser ? <Redirect to='/' /> :
            <MainLayout >
              <Login />
            </MainLayout>
          }
        </Route>

        <Route path="/recovery" >

          <MainLayout >
            <Recovery />
          </MainLayout>

        </Route>

        <Route path="/dashboard" >
          <WithAuth>

            <MainLayout >
              <Dashboard />
            </MainLayout>
          </WithAuth>
        </Route>

      </Switch>

    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
