import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Main from "./components/Main";
import Home from "./components/Home";
import Footer from "./components/Footer"
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alertMsg, setAlertMsg] = useState(null);

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setAlertMsg("Dark Mode Enabled");
      setTimeout(() => {
        setAlertMsg(null);
      }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlertMsg("Light Mode Enabled");
      setTimeout(() => {
        setAlertMsg(null);
      }, 1000);
    }
  };

  return (
    <div className="App vh-100 position-relative">
      <Navbar title={"Text Utilities"} mode={mode} toggle={toggle} />
      <Alert alertMsg={alertMsg} />
      <Routes>
        <Route path="/" element={<Home mode={mode}/>} />
        <Route
          path="/main"
          element={<Main mode={mode} setAlertMsg={setAlertMsg} />}
        ></Route>
      </Routes>
      <Footer mode={mode}/>
    </div>
  );
}

export default App;
