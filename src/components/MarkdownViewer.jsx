import React from 'react'
import { connect } from 'react-redux'
import styles from './MarkdownViewer.module.scss'
import DOMPurify from 'dompurify';
import marked from 'marked';

class Viewer extends React.Component {

  render()
  {
    marked.setOptions({
      breaks: true,
      gfm: true
    });
    const cleanText = DOMPurify.sanitize(marked(this.props.payload));
    return(
      <div className={styles.boxWindow}>
        <label alt="Markdown Viewer Window" className={styles.descriptor} >
          Viewer:
        </label>
        <div id='preview' dangerouslySetInnerHTML={{__html:cleanText}} className={styles.previewer} readonly />
      </div>
    )
  }
}

const mapState = (state) => {
  const { payload } = state;
  return { payload: payload };
}



export default connect(mapState, null)(Viewer);
