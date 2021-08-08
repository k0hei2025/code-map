import React from 'react'
import { Fragment } from 'react'
import Auth from '../../components/Auth/AuthForm'
import Navigation from '../../components/NavigationBar/upperNavigationBar'

export default function index() {
               return (
                              <Fragment>
                            <Navigation/>
                              <Auth/>
                              </Fragment>
               )
}
