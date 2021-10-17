import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import classes from './project.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { mapDataAction } from '../../store/mapData'
import React, { useState, useRef, useEffect } from 'react'
import classes1 from '../../components/mapData.module.css'
import AddFile from '../../components/AddFile/AddFile'
import { useRouter } from 'next/router'
import Navigation from '../../components/NavigationBar/upperNavigationBar'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: "50rem",
    backgroundColor: "red"
  }
})




export default function index() {

  let count = 0;
  const route = useRouter();
  const [data, setData] = useState([]);
  const [projectFile, setProjectFile] = useState([]);
  const [showTitle, setShowTitle] = useState(false)
  const [projetFileId, setProjectFileId] = useState(null);
  const dataSet = useSelector((state) => state.mapData.dataContainer)
  const userId = useSelector(state => state.auth.userId)
  const title = useSelector(state => state.mapData.title)
  const projectId = useSelector((state) => state.fileStore.myProfile)
  const fileName = useRef();
  const dispatch = useDispatch();


  useEffect(async () => {

    // console.log("useEffect projectId", projectId);

    const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}/${projectId}.json`);

    const resData = await data.json();

    // console.log('resData ProjectId useEffect ', projectId, resData)

    const partialFiles = [];
    for (let i in resData) {
      partialFiles.push({
        id: i,
        files: resData[i].projectFiles,
      })
    }

    // console.log("partial Files inside this projectId ", partialFiles)

    setProjectFile(partialFiles);

  }, [])


  // console.log('project File ==>', projectFile)


  useEffect(() => {
    const fileData = async () => {


      const dataObjectToArray = [];

      const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}.json`);



      const resData = await data.json()

      console.log("resData", resData)

      for (let i in resData) {
        dataObjectToArray.push({
          id: i,
          fileNameR: resData[i].fileName,

        })
        console.log("dataObjectToArray", dataObjectToArray)
      }



      setData(dataObjectToArray);




      return resData;
    }

    console.log(route.query);


    fileData();
  }, [])




  const saveHandler = (event) => {

    event.preventDefault();
    let filenames = fileName.current.value;

    // console.log('save Button', dataSet);

  }



  const addDataHandler = async (event) => {

    event.preventDefault();
    let filenames = fileName.current.value;

    data.map(async (i) => {
      if (i.id === projectId) {
        console.log(data);
        console.log('check project id ', projectId, i.id)



        const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}/${i.id}.json`, {


          method: 'POST',
          body: JSON.stringify({
            projectFiles: fileName.current.value,
          }),
          headers: {
            'Content-Type': 'application/json'
          }

        })

        const resData = await data.json();
        // console.log('resData', resData)
        // console.log(' resdata  add file', resData.name)
        setProjectFileId(resData.name);
        // console.log('projectFileId', projetFileId)

      }
    })





    dispatch(mapDataAction.addData(
      {
        id: projetFileId,
        fileName: filenames
      }

    ))

    // console.log(filenames);
  }

  return (
    <div>
      <Navigation />

      <div className={classes.contain} maxWidth='xl'>

        <input type='text' className={classes.nameInput} placeholder='File Name' ref={fileName} /><br />
        <Button className='addButton' variant='contained' onClick={addDataHandler
        } color='primary'> Add File </Button>
        <Button variant='contained' className='addButton' color='primary' onClick={saveHandler}>Save</Button>

        <div className={classes.enclose}>
          {projectFile.map((val) => {
            if (val.files) {
              return (
                <AddFile className={classes1.listItem} projectFileDataId={dataSet} projectFile={projectFile} id={val.id} fileName={val.files} />
              )
            }

          })}
        </div>

      </div>
    </div>
  )
}
