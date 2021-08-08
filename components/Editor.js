import React,{useState} from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
// import { Dispatch } from 'react-redux';
import { connect } from 'react-redux';
import 'prismjs/components/prism-clike';
// import { store } from '../store/store';
// import reducer from '../store/editorDataSlice';
import 'prismjs/components/prism-javascript';
//  import { editorDataActions } from '../store/editorDataSlice';
import {addCodeString} from '../store/editorDataSlice'
const code = `function add(a, b) {
  return a + b;
}
`;
 
class App extends React.Component {
  state = { code };
  render(props) {

    return (
      <Editor
        value={this.state.code}
        onValueChange={
          code => 
          {
            this.setState({ code })
            //  this.props.dispatch(addCodeString(code))
            }
          }
          onBlur={
            ()=>{
              this.props.dispatch(addCodeString(
                // this.state.code
                {
                  id: this.props.boxId,
                  code:this.state.code
                }
                ))
            }
          }

        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"roboto", "roboto", monospace',
          fontSize: 12,
         width:"300px",
         overflowX:"auto"
        }}
      />
    );
  }
}

const mapStateToProps = (state) => 
({
  // codestring: state.editor.codeString
  codeData: state.editor.codeData    
});

// const mapDispatchToProps = { addCodeString };

// export default App
export default connect(mapStateToProps)(App);