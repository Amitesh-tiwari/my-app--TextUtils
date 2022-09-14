import "./App.css";
import Navbar from "./components1/Navbar";
import TextForm from "./components1/TextForm";
import About from "./components1/About";
import React, { useState } from "react";
import Alert1 from "./components1/Alert1";
//import React from "react";
//import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import {Switch} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light mode";
    }
  };
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert1 alert={alert} />
      <Navbar title="TextUtils" aboutText="AboutTextUtils" />

      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/">
          <TextForm
          heading="Enter your text to analyze"
          mode={mode}
          showAlert={showAlert}
          />
          </Route>
        </Switch>
        <button />
        
      </div>
    </Router>
    </>
  );
}

export default App;
