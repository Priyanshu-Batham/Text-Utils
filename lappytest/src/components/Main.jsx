import React from "react";
import { useState } from "react";

const Main = () => {
  const [text, setText] = useState("");

  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Enter Text Here"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
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
        </div>

        <h3>Text Summary</h3>
        <h5>No. of Characters: {text.length}</h5>
        <h5>No. of Words: {text?text.split(' ').length:0}</h5>
      </div>
    </>
  );
};

export default Main;
