import React, { Component } from "react";

import { Navbar, Nav } from 'react-bootstrap'
//import Home from './Home';
//import AboutUs from './AboutUs';
//import ContactUs from './ContactUs';
import '../index.css';
import logo from '../acons3.png';


class NavBarAdmin extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currentPage : this.props.data.currentPage,
      username : this.props.data.username
    };
  }


    render() {
        return (
          <Navbar bg="light" expand="lg" position = "fixed">
          <Navbar.Brand href="/homeadmin"><img src={logo} class="rounded float-left"  /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {this.state.currentPage === "Home" ? <Nav.Link active href="#" >Home</Nav.Link> : <Nav.Link href="/homeadmin" >Home</Nav.Link>}
            {this.state.currentPage === "AdminCharities" ? <Nav.Link active href="#" >Charities</Nav.Link> : <Nav.Link href="/admincharities" >Charities</Nav.Link>}
            {this.state.currentPage === "AdminDonors" ? <Nav.Link active href="#" >Donors</Nav.Link> : <Nav.Link href="/admindonors" >Donors</Nav.Link>}
            {this.state.currentPage === "PaymentsPending" ? <Nav.Link active href="#" >Payments-Pending</Nav.Link> : <Nav.Link href="/adminpending" >Payments-Pending</Nav.Link>}
            {this.state.currentPage === "PaymentsProcessed" ? <Nav.Link active href="#" >Payments-Processed</Nav.Link> : <Nav.Link href="/adminprocessed" >Payments-Processed</Nav.Link>}
            </Nav>
            <Nav className="mr-sm-2">
            {this.state.currentPage === "LockedAccounts" ? <Nav.Link active href="#">LockedAccounts</Nav.Link> : <Nav.Link href="/lockedaccounts">Locked Accounts</Nav.Link>}
            <Nav.Link href="/logout" className="btn btn-primary">Logout {this.state.username}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        
        /*<NavDropdown title="Donors" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>*/
        
          /*<nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="new.js">
            <img src={logo} class="rounded float-left" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup" bg-light>
            <div class="navbar-nav">
  
              <a class="nav-item nav-link active" href="#">Home Page<span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">Donors</a>
              <a class="nav-item nav-link" href="#">Charities</a>
              <a class="nav-item nav-link" href="#">Register</a>
              <a class="nav-item nav-link" href="#">Logon</a>
            </div>
          </div>
        </nav>*/
        );
    }
}

export default NavBarAdmin;