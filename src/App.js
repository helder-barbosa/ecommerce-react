import React from 'react'
import { Route, Switch } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout'
import HomePageLayout from './layouts/HomePageLayout';

// Pages
import HomePage from './pages/HomePage/HomePage';
import Registration from './pages/Registration/Registration';

import './default.scss'

function App() {
  return (
    <div className="App">

      <Switch>

        <Route exact path="/" >
          <HomePageLayout>
            <HomePage />
          </HomePageLayout>
        </Route>

        <Route path="/registration" >
          <MainLayout>
            <Registration />
          </MainLayout>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
