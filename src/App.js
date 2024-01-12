import React, { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

/// this is copy of react app


function App() {
  const [mode, setMode] = useState("light");
  const [toggle, setToggle] = useState("Enable Darkmode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setToggle("Enable Lightmode");
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setToggle("Enable Darkmode");
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <Navbar
        mainTitle="TextUtils"
        title="Home"
        // title2="About"

        mode={mode}
        toggleMode={toggleMode}
        toggle={toggle}
      />
      {/*/// without default props.  we are settimg props here */}
      {/* <Navbar />     /// we are set props in its file itself as a default props */}
      <Alert alert={alert} />
      <div className="container my-4">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route */}
        {/* exact path="/" */}
        {/* element= */}
        {/* { */}
          <Textform
            heading="This is your workbook"
            mode={mode}
            showAlert={showAlert}
          />
        {/* } */}
        {/* /> */}
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
