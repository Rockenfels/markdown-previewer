import React from 'react';
import './App.scss';
import Editor from './components/MarkdownEditor.jsx';
import Viewer from './components/MarkdownViewer.jsx';

function App() {
  return (
    <div className='appBase'>
      <header id="headerBox" class="container-fluid">The MARKUP-O-MATIC</header>
        <Editor />
        <Viewer />
    </div>
  );
}

export default App;
