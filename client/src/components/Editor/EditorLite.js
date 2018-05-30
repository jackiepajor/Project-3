import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Quill from 'quill'

class EditorLite extends Component {
  componentDidMount() {
    this.editor = new Quill(this.editorNode, {
      theme: 'snow',
      placeholder: 'Start Creating your course here...',
    });

    let self = this;
    this.editor.on('text-change', function(delta, oldDelta, source) {
      let text = self.editor.root.innerHTML;
      self.props.handleLessonChange(text);
      if (source == 'api') {
        console.log("An API call triggered this change.");
      } else if (source == 'user') {
        console.log("A user action triggered this change.");
      }
    });
  }

  shouldComponentUpdate() {
     return false // never rerender
  }

  render() {
    return <div ref={el => this.editorNode = el}/>
  }
}

export default EditorLite;