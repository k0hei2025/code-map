import { Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import classes from './project.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { mapDataAction } from '../../store/mapData'
import React, { useState, useRef, useEffect } from 'react'
import Map from '../../components/mapData'
import classes1 from '../../components/mapData.module.css'
import AddFile from '../../components/AddFile/AddFile'
import { useRouter } from 'next/router'
// import Navigation from '../../components/NavigationBar/Navigation'
const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: "50rem",
    backgroundColor: "red"
  }
})



export default function index() {


  const route = useRouter();
  const [data, setData] = useState([])


  useEffect(() => {
    const fileData = async () => {


      const dataObjectToArray = [];

      const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file.json`);




      const resData = await data.json()

      console.log("resData", resData)

      for (let i in resData) {
        dataObjectToArray.push({
          id: i,
          fileName: resData[i].fileName,
        })
        console.log("dataObjectToArray", dataObjectToArray)
      }



      setData(dataObjectToArray);




      return resData;
    }

    fileData();
  }, [])



  console.log(route.query);


  let count = 0;
  const dataSet = useSelector((state) => state.mapData.dataContainer)

  console.log(`dataSet redux `, dataSet)


  const title = useSelector(state => state.mapData.title)

  const projectId = useSelector((state) => state.fileStore.myProfile)

  const fileName = useRef();

  const dispatch = useDispatch();


  const saveHandler = (event) => {

    event.preventDefault();
    let filenames = fileName.current.value;


    console.log('save Button', dataSet);


    data.map(async (i) => {
      if (i.id === projectId) {
        console.log(data);
        console.log('check project id ', projectId, i.id)
        const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${i.id}.json`, {


          method: 'PATCH',
          body: JSON.stringify({
            projectFiles: dataSet,
          }),
          headers: {
            'Content-Type': 'application/json'
          }

        })



        const resData = await data.json();
        console.log('resData', resData)
      }
    })

  }



  const addDataHandler = async (event) => {

    event.preventDefault();
    let filenames = fileName.current.value;


    dispatch(mapDataAction.addData(
      {
        id: new Date().getTime(),
        fileName: filenames
      }

    ))












    console.log(filenames);

    // myProfile/projectFiles?id="rhewhrewuiewrew"/fileCode

  }

  const [showTitle, setShowTitle] = useState(false)
  //  const classes  = useStyles();
  return (
    <div>
      {/* <Navigation /> */}
      <div className={classes.contain} maxWidth='xl'>

        <input type='text' placeholder='fileName' ref={fileName} />


        {/* {!showTitle && <h1 onClick={()=>{setShowTitle(!showTitle)}}>{title}</h1>}
                                     {showTitle && <input type='text' value={title} onBlur={()=>{
                                       setShowTitle(!showTitle)}
                                       }
                                       onChange={(event)=>{
                                         dispatch(mapDataAction.changeTitle(event.target.value))
                                       }}
                                       />} */}
        <div className={classes1.list}>
          {dataSet.map((val) => {
            return (
              <AddFile className={classes1.listItem} id={val.id} fileName={val.fileName} />
            )
          })}
        </div>
        <Button variant='contained' onClick={addDataHandler
        } color='primary'> Add File </Button>
        <Button variant='contained' color='primary' onClick={saveHandler}>Save</Button>

      </div>
    </div>
  )
}
