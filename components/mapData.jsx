import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import classes from './mapData.module.css'

export default function mapData() {


   const dataSet = useSelector((mapI) => { mapI.mapData.dataContainer })


   return (
      <div className={classes.list} >
         {dataSet}
      </div>
   )
}
