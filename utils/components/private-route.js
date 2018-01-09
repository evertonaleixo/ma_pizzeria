import React from 'react'
import { Component } from 'react'
import { Route, Redirect } from 'react-router-native'
import { fakeAuth } from './fake-auth'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
    <Redirect to={{
      pathname: '/',
      state: { from: props.location }
    }}/>
    )
  )}/>
)