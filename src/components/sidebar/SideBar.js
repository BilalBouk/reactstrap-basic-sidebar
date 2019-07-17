import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';

class SideBar extends React.Component {

  render() {
    return (
      <div className={classNames('sidebar', {'is-open': this.props.isOpen})}>
        <div className="sidebar-header">
          <span color="info" onClick={this.props.toggle} style={{color: '#fff'}}>&times;</span>
          <h3>Bootstrap Sidebar</h3>
        </div>
          <Nav vertical className="list-unstyled pb-3">
            <p>Dummy Heading</p>
            <SubMenu title="Home" icon={faHome} items={["Home 1", "Home 2", "Home 3"]}/>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faBriefcase} className="mr-2"/>About</NavLink>
            </NavItem>
            <SubMenu title="Pages" icon={faCopy} items={["Page 1", "Page 2", "Page 3"]}/>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faImage} className="mr-2"/>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faQuestion} className="mr-2"/>FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faPaperPlane} className="mr-2"/>Contact</NavLink>
            </NavItem>
          </Nav>
      </div>
    );
  }
}

export default SideBar;
