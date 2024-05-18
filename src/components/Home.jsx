import React from "react";
import { Link } from "react-router-dom";

const Home = ({mode}) => {
  return (
    <>
      <div className={`container d-flex flex-column justify-content-center align-items-center bg-${mode==='light'?mode:'black'} text-${mode==='light'?'dark':'light'}`} style={{height: "85vh"}}>
        <h3 className="">Welcome to</h3>
        <h1 className="display-1">Text Utils</h1>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>A React Based web application to serve all the text formatting needs of users</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Priyanshu Batham
          </figcaption>
        </figure>
        <button type="button" className="btn btn-info"><Link to="/main" className="nav-link text-dark"><strong>App</strong></Link></button>
      </div>
    </>
  );
};

export default Home;
