import React from 'react'
import EditorComponent from './Editor'
function Box() {
    return (
        <div>
        <fieldset  className="code-edit-container">
            <legend>Function</legend>
            <EditorComponent language='javascript' />
        </fieldset>
        </div>
    )
}

export default Box

/**
 *   state { 
 *  
 * }
 */