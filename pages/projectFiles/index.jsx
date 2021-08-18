import { Button, Container  } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import classes from '../projectFiles/project.module.css'
import {useDispatch , useSelector} from 'react-redux'
 import {mapDataAction} from '../../store/mapData'

import React,{useState} from 'react'
import Map from '../../components/mapData'
import classes1 from '../../components/mapData.module.css'
import AddFile from '../../components/AddFile/AddFile'
// import Navigation from '../../components/NavigationBar/Navigation'

const useStyles = makeStyles({
               root : {
                 textAlign:'center',
                 padding:"50rem",
                 backgroundColor:"red"
               }
})
 


export default function index() {


    let count=0;
     const dataSet = useSelector((state)=>state.mapData.dataContainer)
   const title=useSelector(state=>state.mapData.title)



const dispatch = useDispatch();
const addDataHandler=()=>{ 
dispatch(mapDataAction.addData(
  {
    id : new Date().getTime(),

    fileName  : 'Untitled'
  }
  
))
}

const [showTitle,setShowTitle]=useState(false)
  //  const classes  = useStyles();
               return (
                 <div>
                   {/* <Navigation /> */}
                              <div className={classes.contain} maxWidth='xl'>
 
                                                                       

                                      {!showTitle && <h1 onClick={()=>{setShowTitle(!showTitle)}}>{title}</h1>}
                                     {showTitle && <input type='text' value={title} onBlur={()=>{
                                       setShowTitle(!showTitle)}
                                       }
                                       onChange={(event)=>{
                                         dispatch(mapDataAction.changeTitle(event.target.value))
                                       }}
                                       />}
                                     <div className={classes1.list}>
                                    {dataSet.map((val)=>{
                                     return(
                                       <AddFile className={classes1.listItem} id={val.id} fileName={val.fileName} />
                                     )

                                    })}
                                   </div>                                   
                                     <Button variant='contained' onClick={addDataHandler
                                     } color='primary'> Add File </Button>

                              </div>


                              </div>


                              

               )
}
