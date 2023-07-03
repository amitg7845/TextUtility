import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


//use JSX fragement to  use multiple element seperatly.
// In props I can pass anything eg. object,link,variable etc.
// If there are multiple props so grouped into a object and then access it.
// const navObj = {
//   title : 'TextUtils',
//   about : 'About Us',
//   home : 'Home'
// }
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msgs: message,
      types: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode('light')
      document.body.style.backgroundColor = 'rgb(201 78 170 / 20%)';
      showAlert('Light mode has been enabled', 'SUCCESS')
      setInterval(() => {
        document.title = 'TextUtils - Light Mode';
      }, 1000);
      setInterval(() => {
        document.title = 'TextUtils - Light Mode New';
      }, 1500);
    } else {
      setMode('dark')
      document.body.style.backgroundColor = 'white';
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils - Dark Mode';
    }
  }
  return (
    <>
      {/* <Navbar {...navObj} /> */}
      {/* <BrowserRouter> */}
        <Navbar home='Home' about='About Us' mode={mode} toggleModefun={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* use exact property for exact redirect on page */}
          {/* <Route path='/' element={<TextForm heading='Enter Your Text Here' mode={mode} showAlert={showAlert} />} /> */}
          <TextForm heading='Enter Your Text Here' mode={mode} showAlert={showAlert} />
          {/* <div className="container my-3"> */}
          <About />
          {/* </div> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
