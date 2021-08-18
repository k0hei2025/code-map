<<<<<<< HEAD
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
=======
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
 
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
const code = `function add(a, b) {
  return a + b;
}
`;
 
class App extends React.Component {
  state = { code };
<<<<<<< HEAD
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

=======
 
  render() {
    return (
      <Editor
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
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
<<<<<<< HEAD

const mapStateToProps = (state) => 
({
  // codestring: state.editor.codeString
  codeData: state.editor.codeData    
});

// const mapDispatchToProps = { addCodeString };

// export default App
export default connect(mapStateToProps)(App);
=======





export default App
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
