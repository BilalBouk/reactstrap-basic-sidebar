import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';

export default () => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)

  return (
    <div className="App wrapper">
      <SideBar toggle={toggle} isOpen={isOpen}/>
      <Content toggle={toggle} isOpen={isOpen}/>
    </div>
  );
}

