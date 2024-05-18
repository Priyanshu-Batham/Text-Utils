import React from "react";

const Footer = ({mode}) => {
  return (
    <div className={`w-100 footer position-absolute bottom-0 start-0 d-flex flex-column justify-content-center align-items-center bg-${mode} text-${mode==='light'?'dark':'light'}`} style={{height: "10vh"}}>
        <h6>Like My Work?</h6>
        <h6>Follow me on <a className={`text-${mode==='light'?'dark':'light'}`} href="https://github.com/priyanshu-batham">Github</a></h6>
    </div>
  );
};

export default Footer;
