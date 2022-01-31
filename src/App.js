import React, { useState } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar.js";
import TextForm from "./TextForm.js";
import About from "./About.js";
import Alert from "./Alert.js";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  
  const displayAlert = (msg, type='danger') => {
    setAlert({
      alertMsg:msg,
      alertType:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#033742";
      displayAlert('Dark Mode is Enabled','success')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} displayAlert={displayAlert} />
      <TextForm mode={mode} displayAlert={displayAlert} />
      {/* <About /> */}
    </>
  );
};

export default App;
