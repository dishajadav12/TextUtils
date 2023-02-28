// import logo from './logo.svg';
import React,{useState} from 'react'

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [btn, setBtn] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type: type,
     })
     setTimeout(()=>{
      setAlert(null);
     },1500);
  }
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(33,37,41)';
      document.body.style.color='white';
      showAlert("Dark mode is enabled","success");
      setBtn("Disable Dark Mode");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode is enabled","success")
      setBtn("Enable Dark Mode")
    }
  }
  return (
<>
<BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btn={btn}/>
    <Alert alert={alert}/>
      <Routes>
        <Route exact path="/about" element={<About />}>
      </Route>
      <Route exact path="/" index element={ <TextForm heading="Enter the text to analyze:" mode={mode} showAlert={showAlert}>
             <TextForm/></TextForm> } />
      </Routes>
    </BrowserRouter>

         

  </>
    );
}

export default App;
