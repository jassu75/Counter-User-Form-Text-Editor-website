import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichTextEditor.css'; // Import the custom CSS

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  const handleEditorChange = (content) => {
    setEditorContent(content);
    localStorage.setItem('editorContent', content);
  };

  return (
    <div style={{ height: '60vh', width: '80vw', margin: 'auto' }}>
      <ReactQuill 
        value={editorContent} 
        onChange={handleEditorChange} 
        style={{ height: '100%', width: '100%' }} 
      />
    </div>
  );
};

export default RichTextEditor;
