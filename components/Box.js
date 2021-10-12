import { React, useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import EditorComponent from './Editor'
import { addComponentActions } from '../store/addComponentSlice';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
function Box(props) {


  const dispatch = useDispatch()

  const allComponents = useSelector((state) => state.component.components)

  const idContainers = useSelector((state) => state.mapData.idContainer)

  const [fileCode, setFileCode] = useState([]);

  // useEffect(async () => {

  //   console.log("props.", idContainers)

  //   const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${idContainers[0].projectId}/${idContainers[0].fileId}/fileCode.json`);

  //   const resData = await data.json();
  //   console.log('fetch data of fileCode', resData);

  //   const arr = [];

  //   for (let i in resData) {
  //     arr.push({
  //       colorId: resData[i].colorId,
  //       code: resData[i].code,
  //       color: resData[i].color,
  //       containerName: resData[i].containerName,

  //     })

  //   }
  //   setFileCode(arr)

  //   console.log(`allComponents`, allComponents)


  // }, [])


  console.log(`allComponents`, allComponents)


  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>


      {allComponents.map((val) => {


        // console.log(val)
        return (
          <fieldset
            key={val.sideBarObject.id}
            // key={val.colorId}
            className="code-edit-container"
            style={{ color: `${val.sideBarObject.color}`, border: `3px solid ${val.sideBarObject.color}` }}
          >
            <legend>
              {val.sideBarObject.containerName}
              <RemoveCircleOutlineIcon style={{ color: 'red', marginLeft: '5px', transform: 'translateY(5px)' }} onClick={() => {
                dispatch(addComponentActions.removeComponent({ val }))
                // console.log(new Date().getTime())
              }} />
              {/* </button> */}
              {/* } */}
            </legend>
            {/* */}
            <EditorComponent borderColor={val.sideBarObject.color} language='javascript' boxId={val.sideBarObject.id} colorId={val.colorId} color={val.color} containerName={val.containerName} code={val.code} />

          </fieldset>



        );
      })}

    </div>
  )

}

// const mapStateToProps = (state) =>
// ({
//   // codestring: state.editor.codeString
//   allCodes: state.editor.allCodes,
//   ids: state.mapData.ids,
//   idContainer: state.mapData.idContainer,
//   allComponents: state.component.component
// });

// const mapDispatchToProps = { addCodeString };

export default Box

