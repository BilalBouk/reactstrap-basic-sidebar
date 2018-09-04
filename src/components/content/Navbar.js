import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends React.Component {

  constructor(props) {
    super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }

 toggle() {
   this.setState({
     isOpen: !this.state.isOpen  // navbar collapse
   });
 }

  render(){
    return (
      <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
        <Button color="info" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft}/>
        </Button>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
         <Nav className="ml-auto" navbar>
           <NavItem>
             <NavLink href="#">page</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#">page</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#">page</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#">page</NavLink>
           </NavItem>
        </Nav>
       </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
