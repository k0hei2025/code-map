import React, { useEffect, useState } from 'react'
import { mapDataAction } from '../../store/mapData'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import classes from './AddFile.module.css'
import { Grid } from '@material-ui/core'
import Link from 'next/link';


function AddFile(props) {

    const dispatch = useDispatch();

    const projectId = useSelector((state) => state.fileStore.myProfile)
    const dataContainer = useSelector((state) => state.mapData.dataContainer)
    const projectFilePerticularId = useSelector((state) => state.mapData.ids)
    const userId = useSelector(state => state.auth.userId)


    useEffect(() => {


        dispatch(mapDataAction.idOFProjectFiles({
            projectFileId: props.id
        }))

        // console.log('project files ========> call in AddFile.jsx props.id ', props.id, props.projectFile)

        // console.log('===========>', props.projectFile)
        // console.log('add file project FIles props onme ------ ', props.projectFiles)

        props.projectFileDataId.map(async (i) => {
            if (i.id === projectId) {

                props.projectFile.map(async (dataKey) => {

                    // console.log(dataKey)

                    if (dataKey.id === props.id) {

                        console.log('add file project FIles props onme ------ ', props.projectFiles, dataKey.id)

                        const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}/${i.id}/${props.projectFiles}.json`, {
                            method: "DELETE",

                        })

                        const resData = await data.json();
                        // console.log(resData)
                    }
                })

            }
        })

    }, [])





    const blurHandler = () => {
        dispatch(mapDataAction.updateData({
            id: props.id,
            title: inputValue
        }))
    }
    const deleteFileHandler = () => {

        props.projectFileDataId.map(async (i) => {
            if (i.id === projectId) {

                props.projectFile.map(async (dataKey) => {

                    // console.log(dataKey)

                    if (dataKey.id === props.id) {

                        // console.log('add file project FIles props onme ------ ', props.projectFiles, props.id)

                        const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}/${i.id}/${props.id}.json`, {
                            method: "DELETE",
                        })

                        const resData = await data.json();

                        // console.log(resData)

                    }
                })



            }
        })

        dispatch(mapDataAction.deleteData({

            id: props.id
        }))

    }


    const [showInput, setShowInput] = useState(false)
    const [inputValue, setInputValue] = useState('')

    return (
        <div className={classes.enclosingaddFilediv} onBlur={() => { setShowInput(false) }}>

            <h1 style={{ color: 'white' }}>{props.fileName}</h1>
            <Grid container spacing >
                <Grid md={4}></Grid>
                <Grid md={2}>
                    {!showInput &&
                        <DeleteIcon style={{ color: 'red', fontSize: '30px' }} onClick={deleteFileHandler} />
                    }
                </Grid>
                <Grid md={2} >
                    <Link href={`/maptr?fileId=${props.id}`}><DescriptionIcon className={classes.open} /></Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddFile
