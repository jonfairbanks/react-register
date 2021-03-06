import React, { Component } from 'react';
import Editor from 'react-editor-md';

export class mdEditor extends Component {
  render() {
    return (
      <Editor config={
        {
          markdown: this.props.markdown,
          theme: this.props.toolbarTheme,
          editorTheme: this.props.editorTheme,
          previewTheme: this.props.previewTheme,
          imageUpload: false,
          width: '100%',
          height: '700px',
          lang: 'en',
          onload: (editor, func) => {
            /*eslint-disable */
            let md = editor.getMarkdown();
            let html = editor.getHTML();
            /*eslint-enable */
          }
        }
      }/>
    );
  }
}

export default mdEditor;
