import React from "react";
import { useState } from "react";

const Main = (props) => {
  const [text, setText] = useState("");

  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.setAlertMsg("Text Converted to Uppercase")
    setTimeout(()=>{
      props.setAlertMsg(null);
    }, 1000);
  };

  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.setAlertMsg("Text Converted to Lowercase")
    setTimeout(()=>{
      props.setAlertMsg(null);
    }, 1000);
  };

  const clear = ()=>{
    setText('');
    props.setAlertMsg("Text Cleared")
    setTimeout(()=>{
      props.setAlertMsg(null);
    }, 1000);
  }

  const copy = ()=>{
    window.navigator.clipboard.writeText(text);
    props.setAlertMsg("Text Copied to Clipboard")
    setTimeout(()=>{
      props.setAlertMsg(null);
    }, 1000);
  }
  return (
    <>
      <div className={`container mt-5`}>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Enter Text Here"
            value={text}
            style={{backgroundColor: `${props.mode==='light'?'white':'grey'}`, color: `${props.mode==='light'?'black':'white'}`}}
            onChange={(e) => {
              setText(e.target.value);
            }}
          >
          </textarea>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={toUpper}
          >
            To UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={toLower}
          >
            To LowerCase
          </button>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={copy}
          >
            Copy
          </button>
          <button
            type="button"
            className="btn btn-danger m-2"
            onClick={clear}
          >
            Clear
          </button>
        </div>

        <h3 className={`text-${props.mode==='dark'?'white':'dark'}`}>Text Summary</h3>
        <h5 className={`text-${props.mode==='dark'?'white':'dark'}`}>No. of Characters: {text.length}</h5>
        <h5 className={`text-${props.mode==='dark'?'white':'dark'}`}>No. of Words: {text?text.split(' ').length:0}</h5>
      </div>
    </>
  );
};

export default Main;
