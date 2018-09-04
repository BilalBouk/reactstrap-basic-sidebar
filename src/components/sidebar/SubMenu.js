import React from 'react';
import  { Collapse, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

class SubMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
     this.state = {
       collapsed: true
     };
   }

   toggleNavbar() {
     this.setState({
       collapsed: !this.state.collapsed,
     });
   }
   render() {
     const { icon, title, items } = this.props;
     return (
       <div>
         <NavItem onClick={this.toggleNavbar} className={classNames({'menu-open': !this.state.collapsed})}>
           <NavLink className="dropdown-toggle" href="#"><FontAwesomeIcon icon={icon} className="mr-2"/>{title}</NavLink>
         </NavItem>
         <Collapse isOpen={!this.state.collapsed} navbar className={classNames('items-menu',{'mb-1': !this.state.collapsed})}>
           {items.map(item => (
               <NavItem key={item} className="pl-4">
                 <NavLink>{item}</NavLink>
               </NavItem>
           ))}
         </Collapse>
       </div>
     );
   }
}

export default SubMenu;
