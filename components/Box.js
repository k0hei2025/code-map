

import {React,useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import {v4 as uuidv4} from 'uuid'
 

import {React,useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid'

import EditorComponent from './Editor'
import { addComponentActions } from '../store/addComponentSlice';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
function Box() {


const dispatch=useDispatch()

  const allComponents = useSelector((state) => state.component.components)


  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

      {allComponents.map((val) => {

        return (
          <fieldset 

            key={val.sideBarObject.id}

            // key={val.sideBarObject.id}
         
            className="code-edit-container"
            style={{ color: `${val.sideBarObject.color}`, border: `3px solid ${val.sideBarObject.color}` }}
          >
            <legend>
              {val.sideBarObject.containerName}
              <RemoveCircleOutlineIcon onClick={()=>{
                dispatch(addComponentActions.removeComponent({val}))
                // console.log(new Date().getTime())
              }} />
              {/* </button> */}
              {/* } */}
            </legend>
            <EditorComponent borderColor={val.sideBarObject.color} language='javascript' />

          </fieldset>
        

        );
      })}

    </div>
  )

}



export default Box

/**
 *   state { 
 *  
 * }
 * [
* { id }
 * <EditorComponent language='javascript' /> 
 * ]
 */