import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import { connect } from 'react-redux';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { addCodeString, wrapContainer } from '../store/editorDataSlice'



const code = "Enter Your Code";

class App extends React.Component {

  state = { code };

  componentDidMount() {
    console.log('props id of projectFiles', this.props.ids);

    this.setState({ code: this.props.allCodes });

  }


  render(props) {

    // console.log("props.allCode Object", this.props.allCodes);
    // console.log("props.id Container", this.props.idContainer[0].fileId)
    // console.log("props.id Container", this.props.idContainer[0].projectId)
    // console.log(this.props.allComponents, 'allComponents')
    // console.log(this.props.allCodes)
    // console.log(this.props.boxStorge[this.props.boxStorge.length - 1], 'sgfsggfsfd-+_+_P_+_+_+')

    return (
      <Editor
        value={this.state.code}
        onValueChange={
          code => {
            this.setState({ code })
            // this.props.dispatch(addCodeString(code))
          }
        }
        onBlur={
          async () => {

            this.props.dispatch(addCodeString(
              // this.state.code
              {
                id: this.props.boxId,
                code: this.state.code,

              }
            ))

            this.props.dispatch(wrapContainer(

              {
                boxContainer: this.props.allComponents,
                codeS: this.props.allCodes,
              }
            ))


            const data = fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${this.props.userId}/${this.props.idContainer[0].projectId}/${this.props.idContainer[0].fileId}.json`, {
              method: 'PATCH',
              body: JSON.stringify({
                // fileCode: {
                //   code: this.props.allCodes,
                //   containerBox: this.props.allComponents
                // },

                fileCode: {
                  code: this.props.boxStorge[this.props.boxStorge.length - 1]
                }
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })

            const resData = await data;
            console.log(resData)

            //   // }
          }

        }
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"roboto", "roboto", monospace',
          fontSize: 12,
          width: "300px",
          overflowX: "auto"
        }}
      />
    );
  }
}

const mapStateToProps = (state) =>
({
  // codestring: state.editor.codeString
  allCodes: state.editor.allCodes,
  ids: state.mapData.ids,
  idContainer: state.mapData.idContainer,
  allComponents: state.component.components,
  userId: state.auth.userId,
  boxStorge: state.editor.boxStorge,
});

// const mapDispatchToProps = { addCodeString };

// export default App

export default connect(mapStateToProps)(App);