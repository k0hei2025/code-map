import React, { Fragment, useEffect } from 'react'
import Box from '../components/Box'
import styles from '../styles/Home.module.css'
import NavigationBar from '../components/NavigationBar/Navigation.jsx'
import Footer from '../UX/footer'
import { Router } from 'next/router'

function WorkSpace() {

  // const { pathname } = Router


  // useEffect(() => {
  //   const { pathname } = Router
  //   if (pathname === '/') {
  //     Router.push('/myProfile')
  //   }
  // }, [])

  // if (pathname === '/') {
  //   Router.push('/myProfile')
  // }


  return (

    <div className={styles.frame} >

      <h1> Home Page</h1>


    </div>
  )
}

export default WorkSpace
