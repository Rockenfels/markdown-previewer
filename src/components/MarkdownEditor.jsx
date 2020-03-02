import React from 'react'
import { connect } from 'react-redux'
import styles from './MarkdownEditor.module.scss'
import { sendMark } from './markdownActions.js'
import { bindActionCreators } from 'redux'

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.sendMark(e.target.value);
  }

  render(){
    return(
      <div className={styles.boxWindow}>
        <label alt="Markdown Editor Window" className={styles.descriptor}>
          Editor:
        </label>
        <textarea spellcheck='true' onChange={this.handleChange} id="editor" className={styles.editorBox} >
        {this.props.payload}
        </textarea>
      </div>
    )
  }
}

const mapState = (state) => {
  const { payload } = state;
  return { payload: payload };
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    sendMark
  },
  dispatch,
)

export default connect(mapState, mapDispatchToProps)(Editor);
