import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggle=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <div className={`App`}>
      <Navbar title={"Text Utilities"} mode={mode} toggle={toggle}/>
      <Main mode={mode}/>
    </div>
  );
}

export default App;
