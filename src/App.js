import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navber from './components/Navbar/Navber';
import Login from './components/LoginPage/Login';
import LandingPage from './components/LandingPage/LandingPage';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Pricing from './components/PrincingPage/Pricing';
import AboutUs from './components/AboutUsPage/AboutUs';
import ContactUs from './components/ContactUsPage/ContactUs';
import Services from './components/Services/Services';


function App() {

  const [mode, setmode] = useState('white');
  const [mode2, setmode2] = useState('white');
  const [darkmodeGradient, setdarkmodeGradient] = useState('gradient-to-r from-fuchsia-600 to-purple-600');
  const [darkmodeText, setdarkmodeText] = useState('black');
  const [darkText, setdarkText] = useState('Dark');

  const toggleMode = () => {
    if (mode === "gradient-to-r from-slate-900 to-slate-700" & mode2 == "black" & darkmodeText == "white" & darkmodeGradient === "gradient-to-r from-slate-900 to-slate-700" & darkText === "Light") {
      setmode("white");
      setmode2("white");
      setdarkmodeText("black");
      setdarkmodeGradient("gradient-to-r from-fuchsia-600 to-purple-600");
      setdarkText("Dark");
      // document.body.style.backgroundColor = "white"
      // document.body.style.color = "black"
    }
    else {
      setmode("gradient-to-r from-slate-900 to-slate-700");
      setmode2("black");
      setdarkmodeText("white");
      setdarkmodeGradient("gradient-to-r from-slate-900 to-slate-700")
      setdarkText("Light");
      // document.body.style.backgroundColor = "#2f3241"
      // document.body.style.color = "white"

    }
  };


  return (
    <>

      <Router>

        <button id="darkmodeBTN" className={`relative inline-flex items-center justify-center p-3 overflow-hidden text-sm font-medium  rounded-lg group  bg-${darkmodeText} bottom-5 right-5`} onClick={toggleMode}>
          <span className={`relative px-5 py-2.5 transition-all ease-in duration-1000 rounded-md group-hover:bg-opacity-0 bg-${darkmodeText} text-${mode2}`}>
            {darkText}

          </span>
        </button>



        <Navber mode={mode} mode2={mode2} darkText={darkText} darkmodeText={darkmodeText} toggleMode={toggleMode} />

        <Routes>

          <Route exact path="/landing" element={<LandingPage mode={mode} mode2={mode2} darkmodeText={darkmodeText} darkmodeGradient={darkmodeGradient} />} />

          <Route exact path="/dashboard" element={<Dashboard mode={mode} mode2={mode2} darkmodeText={darkmodeText} darkmodeGradient={darkmodeGradient} />} />

          <Route exact path="/pricing" element={<Pricing />} />

          <Route exact path="/services" element={<Services />} />

          <Route exact path="/aboutus" element={<AboutUs />} />

          <Route exact path="/contactus" element={<ContactUs />} />

          <Route exact path="/login" element={<Login mode={mode} mode2={mode2} darkmodeText={darkmodeText} darkmodeGradient={darkmodeGradient} />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
