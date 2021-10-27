import React from "react";

const Alert = (props) => {
    // capitalize type 
   const capitalize=(word) => {
       let lower=word.toLowerCase()
       return lower.charAt(0).toUpperCase()+lower.slice(1)
   }    
  return (
    <>
    <div style={{height:'50px'}}>
      {props.alert && (<div className={`alert alert-${props.alert.alertType}  alert-dismissible fade show`}  role="alert">
        <strong>{capitalize(props.alert.alertType)==='Danger'?'Alert':capitalize(props.alert.alertType)}!</strong>{"     "}
        {props.alert.alertMsg}
      </div>)}
    </div>
    </>
  );
};

export default Alert;
