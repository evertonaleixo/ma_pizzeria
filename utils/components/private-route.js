import React from 'react'
import { Component } from 'react'
import { Route, Redirect } from 'react-router-native'
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

