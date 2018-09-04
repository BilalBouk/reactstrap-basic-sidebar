import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
class Content extends React.Component {

  render() {
    return (
      <Container fluid className={classNames('content', {'is-open': this.props.isOpen})}>
        <NavBar toggle={this.props.toggle}/>
      </Container>
    );
  }
}

export default Content;
