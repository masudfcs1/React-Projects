import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';

function App() {
 const [showParagraph, setShowParagraph]=useState(false)
 console.log('App RUNNING');
 const toggleParagrapher = () => {
    setShowParagraph((prevparagraph)=> !prevparagraph)
 }

  return (
    
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Show the Paragraph</p> }
      <Button onClick={toggleParagrapher} variant="contained" color="success">
        Submit
      </Button>
    </div>
  );
}

export default App;
