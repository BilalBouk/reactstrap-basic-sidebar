import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export default props => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)
  
  return (
    <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
      <Button color="info" onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft}/>
      </Button>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
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
