import React from 'react'
import { useSelector } from 'react-redux'
import EditorComponent from './Editor'
function Box() {
  // create state map at this page 

  // store data at redux
     
  const allComponents=useSelector((state)=>state.components)
  // console.log(allComponents)

    return (
        <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>

      {allComponents.map((val)=>{

        return(
          <fieldset
         key={val.sideBarObject.id} 
         className="code-edit-container"
         style={{color:`${val.sideBarObject.color}`,border:`3px solid ${val.sideBarObject.color}`}}
         >
            <legend>
            {val.sideBarObject.containerName}
            </legend>
           <EditorComponent borderColor={val.sideBarObject.color}/>            
       
        </fieldset>


        );
      })}
  {/* {
    allComponents.forEach((val)=>{

      <fieldset
         key={val.id} 
         className="code-edit-container">
            <legend>
            {val.name}
            </legend>
           <EditorComponent />            
       
        </fieldset>

    })
  } */}
      
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