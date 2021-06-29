import React from 'react'
import { useSelector } from 'react-redux'
import EditorComponent from './Editor'
function Box() {
  // create state map at this page 

  // store data at redux
     
  const allComponents=useSelector((state)=>{state.components})
  // console.log(allComponents)

    return (
        <div>

      {/* {allComponents.map((datum)=>{ */}
        <fieldset  className="code-edit-container">
            <legend>
            name
            {/* {datum.name} */}
            </legend>
           <EditorComponent />            
       
        </fieldset>
      {/* })} */}
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