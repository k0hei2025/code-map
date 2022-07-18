import React from 'react'
import { Fragment } from 'react'
import Profile from '../../components/profile.jsx'

// page of all the projects created by user
export default function myProfile() {

    return (

        <Fragment >
            <div style={{
                paddingTop: "7rem",
                paddingLeft: "2rem",
                paddingRight: "2rem"

            }}>
                <Profile />
            </div>
        </Fragment>
    )
}
