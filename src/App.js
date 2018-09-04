import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className="App wrapper">
        <SideBar toggle={this.toggle} isOpen={this.state.isOpen}/>
        <Content toggle={this.toggle} isOpen={this.state.isOpen}/>
      </div>
    );
  }
}

export default App;
