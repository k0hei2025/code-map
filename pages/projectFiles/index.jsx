import { Button, Container  } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import classes from '../projectFiles/project.module.css'
import {useDispatch , useSelector} from 'react-redux'
 import {mapDataAction} from '../../store/mapData'
import React from 'react'
import Map from '../../components/mapData'
import classes1 from '../../components/mapData.module.css'

const useStyles = makeStyles({
               root : {
                 textAlign:'center',
                 padding:"50rem",
                 backgroundColor:"red"
               }
})
 


export default function index() {


     const dataSet = useSelector((i)=>i.mapData.dataContainer)
   

const dispatch = useDispatch();
const addDataHandler=()=>{ 
dispatch(mapDataAction.addData(
  {
    id : new Date().getTime(),
    fileName  : 'tri.jsx'
  }
  
))
 console.log("aa", dataSet)  
}


  //  const classes  = useStyles();
               return (
                              <div className={classes.contain} maxWidth='xl'>
 
                                                                       

                                     <h1> Project Title</h1>
                                     <div className={classes1.list}>
                                    {dataSet.map((i)=>{
                                     return ( <p id={i.id}>{i.fileName}</p>)
                                    })}
                                   </div>                                   
                                     <Button variant='contained' onClick={addDataHandler
                                     } color='primary'> Add File </Button>

                              </div>
               )
}
