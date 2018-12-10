import React, { Component } from 'react';
import './App.css';
import Post from './components/post/Post';
import User from './components/user/User';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      post: [],
      users: []
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

/*  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => this.setState({
        post: json
      })
      )
  } */

  render() {
    return (
      <div className="app">
        <Navbar className="barra" color="warning" light expand="md">
          <NavbarBrand href="/">Il Mio Sitino</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="components">
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    opzione 1
                  </DropdownItem>
                  <DropdownItem>
                    opzione 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    come stai?
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {/*{this.state.post.map((item) =>
          <Post item={item} />

        )
        } */}
        <User id={9}/>
      </div>
    );
  }
}

export default App;