//This component is for future use in later versions

import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './MarkdownEditor.module.scss'


class Reset extends React.Componenet{
  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  const handleChange = (e) => {
    this.setstate({input: e.target.value});
  }

  render(){
    return(
      <React.Fragment>
        <button id="reset" className="button" alt="Button to reset markdown editor">Reset Editor</button>
      </React.Fragment>
    )
  }
}
