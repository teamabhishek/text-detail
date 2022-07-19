    import TextForms from './TextForms';
    import {
      BrowserRouter,
      Routes,
      Route,
    
    } from "react-router-dom";
    import React from 'react'
    //import './App.css';
    import Navbar from './Navbar';
    import About from './About';
    import Home from './Home';
    function App() {
      return (
      <>
      <BrowserRouter>
       
       
              <Routes>
                <Route path="/" element={ <Navbar title="Textutils" aboutText="About"/>}>
                  <Route index element={<Home/>} />
                  <Route  path="/Textforms" element= {<div className='container '><TextForms titl="Enter text to analyze"/></div>}/>
  
                   <Route path="/About" element={<About/>} />
                </Route>
              </Routes>
          
        
        </BrowserRouter>
      </>
      );
    }

    export default App;
