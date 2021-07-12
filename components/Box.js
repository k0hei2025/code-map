

function Box() {


const dispatch=useDispatch()

  const allComponents = useSelector((state) => state.component.components)


  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

      {allComponents.map((val) => {

        return (
          <fieldset 
            // key={val.sideBarObject.id}
            key ={uuidv4()}
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