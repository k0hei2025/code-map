import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import EditorComponent from './Editor'
import { addComponentActions } from '../store/addComponentSlice';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

function Box(props) {

  const dispatch = useDispatch()
  const allComponents = useSelector((state) => state.component.components)
  const idContainers = useSelector((state) => state.mapData.idContainer)
  const userId = useSelector(state => state.auth.userId)
  const [fileCode, setFileCode] = useState([]);



  useEffect(async () => {

    // console.log("props.", idContainers)

    const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}/${idContainers[0].projectId}/${idContainers[0].fileId}/fileCode/code.json`);


    const resData = await data.json();

    const arr = [];
    // console.log('fetch data of fileCode', resData.containerBox[0].sideBarObject.id, resData.code[0].id);
    // console.log(resData, 'res__________________________---------____>')
    // for (let j = 0; j < resData.code.length; j++) {
    //   if (resData.code[j].id === resData.containerBox[j].sideBarObject.id) {
    //     arr.push({
    //       colorId: resData.containerBox[j].sideBarObject.id,
    //       code: resData.code[j].code,
    //       color: resData.containerBox[j].sideBarObject.color,
    //       containerName: resData.containerBox[j].sideBarObject.containerName,
    //     })
    //   }
    //   // console.log('asddddddd', resData.code[j].id, resData.containerBox[j].sideBarObject.id)
    // }
    // console.log(resData.code[0], ' 2333')
    // setFileCode(arr)
    // console.log(`allComponents--------------------___>`, arr)
  }, [])

  // console.log(`allComponents`, allComponents)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

      {allComponents.map((val) => {

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
              }} />

            </legend>
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

