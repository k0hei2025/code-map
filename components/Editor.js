import React, { useState, useEffect } from "react";
import Prism from "prismjs";
// import './Editor.css'

const EditorComponent = props => {
  const [content, setContent] = useState(props.content);

  const handleKeyDown = event => {
    let value = content,
      selStartPos = event.currentTarget.selectionStart;

    console.log(event.currentTarget);

    // handle 4-space indent on
    if (event.key === "Tab") {
      value =
        value.substring(0, selStartPos) +
        "    " +
        value.substring(selStartPos, value.length);
      event.currentTarget.selectionStart = selStartPos + 3;
      event.currentTarget.selectionEnd = selStartPos + 4;
      event.preventDefault();

      setContent(value);
    }
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [props.language, content]);

  return (
    <div 
    // className="code-edit-container"
    >
      <textarea
        className="code-input"
        value={content}
        onChange={event => setContent(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <pre className="code-output">
        <code 
        className={`language-${props.language}`}
        >{content}</code>
      </pre>
    </div>
  );
};

export default EditorComponent;
