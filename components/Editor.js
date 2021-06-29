import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
 
const code = `function add(a, b) {
  return a + b;
}
`;
 
class App extends React.Component {
  state = { code };
 
  render() {
    return (
      <Editor
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
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

export default App