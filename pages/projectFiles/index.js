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
import { getSubFolders } from '../../store/utils/asyncFunctions'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: "50rem",
    backgroundColor: "red"
  }
})


// contains all the subFolders of a particular project i.e. the add subFolder input is here only

export default function index() {

  let count = 0;
  const route = useRouter();
  const [data, setData] = useState([]);
  const [subFolder, setSubFolder] = useState([]);
  const [showTitle, setShowTitle] = useState(false)
  const [projectFileId, setProjectFileId] = useState(null);
  const dataSet = useSelector((state) => state.mapData.dataContainer)
  const userId = useSelector(state => state.auth.userId)
  const title = useSelector(state => state.mapData.title)
  const projectId = useSelector((state) => state.fileStore.subProjectId)
  const subFolderName = useRef();
  const dispatch = useDispatch();


  useEffect(async () => {

    // const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}/${projectId}.json`);
    // const resData = await data.json();
    // const partialFiles = [];
    // for (let i in resData) {
    //   partialFiles.push({
    //     id: i,
    //     files: resData[i].projectFiles,
    //   })
    // }
   const  subFolders= await getSubFolders(userId,projectId);
    setSubFolder(subFolders);

  }, [])

  useEffect(() => {
    const fileData = async () => {


      const dataObjectToArray = [];

      const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}.json`);



      const resData = await data.json()

      // console.log("========////////", resData)

      for (let i in resData) {
        dataObjectToArray.push({
          id: i,
          fileNameR: resData[i].subFolderName,

        })
        // console.log("dataObjectToArray", dataObjectToArray)
      }



      setData(dataObjectToArray);




      return resData;
    }

    // console.log(route.query);


    fileData();
  }, [])




  const saveHandler = (event) => {

    event.preventDefault();
    // let subFolderNamee = subFolder.current.value;

    // console.log('save Button', dataSet);

  }



  const addDataHandler = async (event) => {

    event.preventDefault();
    let subFolderNamee = subFolderName.current.value;
    // console.log(data);
    console.log(typeof subFolder);
    data.map(async (i,idx) => {
      // console.log(idx)
      if (i.id === projectId) {
        // console.log(data);
        // console.log('check project id ', projectId, i.id)



        const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}/${i.id}.json`, {


          method: 'POST',
          body: JSON.stringify({
            projectFiles: subFolder,
          }),
          headers: {
            'Content-Type': 'application/json'
          }

        })
        const resData = await data.json();
        // console.log(resData);
        setProjectFileId(resData.name);
      }
    })

    // dispatch(mapDataAction.addData(
    //   {
    //     id: projetFileId,
    //     fileName: subFolderName
    //   }

    // ))

  }

  return (
    <div>
      <Navigation />

      <div className={classes.contain} maxWidth='xl'>

        <input type='text' className={classes.nameInput} placeholder='File Name' ref={subFolderName} /><br />
        <Button className='addButton' variant='contained' onClick={addDataHandler
        } color='primary'> Add File </Button>
        <Button variant='contained' className='addButton' color='primary' onClick={saveHandler}>Save</Button>

        <div className={classes.enclose}>
          {(subFolder.length>0) && subFolder.map((val) => {
            // console.log(val)
            if (val.files) {
              return (
                <AddFile className={classes1.listItem} projectFileDataId={dataSet} projectFile={subFolderName} id={val.id} fileName={val.fileNameR} />
              )
            }

          })}
        </div>

      </div>
    </div>
  )
}
