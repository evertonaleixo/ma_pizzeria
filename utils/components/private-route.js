import React from 'react'
import { Component } from 'react'
import { Route, Redirect } from 'react-router-native'
import { fakeAuth } from './fake-auth'
import store from '../../store/configureStore'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    store.getState().homeReducer.loggedIn ? (
      <Component {...props}/>
    ) : (
    <Redirect to={{
      pathname: '/',
      state: { from: props.location }
    }}/>
    )
  )}/>
);

