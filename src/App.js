import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import './App.css';

export default () => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggle} isOpen={isOpen}/>
        <Content toggle={toggle} isOpen={isOpen}/>
      </div>
    </Router>
  );
}

