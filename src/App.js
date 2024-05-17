import './App.css';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Main from './components/Main'
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alertMsg, setAlertMsg] = useState(null);

  const toggle=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setAlertMsg("Dark Mode Enabled")
      setTimeout(()=>{
        setAlertMsg(null);
      }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlertMsg("Light Mode Enabled")
      setTimeout(()=>{
        setAlertMsg(null);
      }, 1000);
    }
  }
  
  return (
    <div className={`App`}>
      <Navbar title={"Text Utilities"} mode={mode} toggle={toggle}/>
      <Alert alertMsg={alertMsg}/>
      <Main mode={mode} setAlertMsg={setAlertMsg}/>
    </div>
  );
}

export default App;
