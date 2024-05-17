import React from "react";

const Alert = (props) => {
  return (
    props.alertMsg && <div className="alert alert-info" role="alert">
      {props.alertMsg}
    </div>
  );
};

export default Alert;
