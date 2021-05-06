import React, { Component } from "react";

import { Navbar, Nav} from 'react-bootstrap'
//import Home from './Home';
//import AboutUs from './AboutUs';
//import ContactUs from './ContactUs';
import '../index.css';
import logo from '../acons3.png';


class NavBarCharity extends Component {

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
          <Navbar.Brand href="/HomeCharity"><img src={logo} class="rounded float-left"  /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {this.state.currentPage === "HomePageCharity" ? <Nav.Link active href="#" >Home</Nav.Link> : <Nav.Link href="/HomeCharity" >Home</Nav.Link>}
            {this.state.currentPage === "CharityProjects" ? <Nav.Link active href="#" >Projects</Nav.Link> : <Nav.Link href="/projects" >Projects</Nav.Link>}
            {this.state.currentPage === "CharityAllocations" ? <Nav.Link active href="#" >Allocations</Nav.Link> : <Nav.Link href="/charityallocations" >Allocations</Nav.Link>}
            {this.state.currentPage === "CharityDonations" ? <Nav.Link active href="#" >OurDonations</Nav.Link> : <Nav.Link href="/charitydonations" >OurDonations</Nav.Link>}
            {this.state.currentPage === "CharityStatement" ? <Nav.Link active href="#" >Statement</Nav.Link> : <Nav.Link href="/charitystatement" >Statement</Nav.Link>}
            </Nav>
            <Nav className="mr-sm-2">
            {this.state.currentPage === "CharityEditDetails" ? <Nav.Link active href="#">Edit Details</Nav.Link> : <Nav.Link href="/editdetailscharity">Edit Details</Nav.Link>}
            <Nav.Link href="/logout" className="btn btn-primary">Logout {this.state.username}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        
        );
    }
}

export default NavBarCharity;