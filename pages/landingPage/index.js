import React from 'react'
import Footer from '../../UX/footer'
import Card from '../../UX/card'
import FrontPage from '../../UX/frontPage'
import Header from '../../UX/header'
import { Fragment } from 'react'

function LandingPage() {
    return (
        <Fragment>
        <Header /> 
        <FrontPage />
        <Card />
        <Footer />   
        </Fragment>
    )
}

export default LandingPage
