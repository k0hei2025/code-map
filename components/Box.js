import React from 'react'
import EditorComponent from './Editor'
function Box() {
  // create state map at this page 

  // store data at redux
     
  


    return (
        <div>
        <fieldset  className="code-edit-container">
            <legend>Function</legend>
           <EditorComponent />            
       
        </fieldset>
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