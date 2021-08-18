import React,{useState} from 'react'
import { mapDataAction } from '../../store/mapData'
import {useDispatch} from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';


function AddFile(props) {
    const dispatch = useDispatch();

    const blurHandler=()=>{
        dispatch(mapDataAction.updateData({
            id:props.id,
            title:inputValue
        }))
    }
    const deleteFileHandler=()=>{
        dispatch(mapDataAction.deleteData({
            id:props.id
        }))
    }
    const [showInput,setShowInput]=useState(false)
    const [inputValue,setInputValue]=useState('')
    return (
        <div className='enclosing-addFile-div' onBlur={()=>{setShowInput(false)}}>
            {/* {!showInput && <p onClick={()=>{setShowInput(true)}} key={props.id}>
            {inputValue}
            </p>}
           {showInput && <input className='addFile-div' type='text' value={inputValue} onChange={(event)=>{
               setInputValue(event.target.value)
           }} 
          onBlur={blurHandler}

           />} */}
             <h1>{props.fileName}</h1>

            { !showInput &&
             <DeleteIcon style={{color:'red',backgroundColor:'black',fontSize:'30px'}} onClick={deleteFileHandler}  />
             }

        </div>
    )
}

export default AddFile
