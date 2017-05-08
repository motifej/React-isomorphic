import { Route } from 'react-router'
import React from 'react'
import App from '../containers/App';
import SignUp from '../containers/SignUp';
import Dashboard from '../components/showUserData';


export default (
  <Route path='/' component={App} >
    <Route path='signup' component={SignUp} />
    <Route path='dashboard' component={Dashboard} />
  </Route>
)
