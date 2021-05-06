import React, { Component } from "react";

import { Navbar, Nav} from 'react-bootstrap'

//import AboutUs from './AboutUs';
//import ContactUs from './ContactUs';
import '../index.css';
import logo from '../acons3.png';


class NavBarDonor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage : this.props.data.currentPage,
      username : this.props.data.username
    };
  }

  clearConnections  = (e) => {
    console.log("Connections cleared")
    sessionStorage.clear();
    localStorage.clear();
  }



    render() {
        return (
          <Navbar bg="light" expand="lg" position = "fixed">
          <Navbar.Brand href="/homedonor"><img src={logo} class="rounded float-left"  /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {this.state.currentPage === "HomePageDonor" ? <Nav.Link active href="#" >Home</Nav.Link> : <Nav.Link href="/homedonor" >Home</Nav.Link>}
            {this.state.currentPage === "DonorCharities" ? <Nav.Link active href="#" >Charities</Nav.Link> : <Nav.Link href="/donorcharities" >Charities</Nav.Link>}
            {this.state.currentPage === "MyDonations" ? <Nav.Link active href="#" >My Donations</Nav.Link> : <Nav.Link href="/donordonations" >My Donations</Nav.Link>}
            {this.state.currentPage === "DonorStatement" ? <Nav.Link active href="#" >Statement</Nav.Link> : <Nav.Link href="/donorstatement" >Statement</Nav.Link>}
            </Nav>
            <Nav className="mr-sm-2">
            {this.state.currentPage === "DonorEditDetails" ? <Nav.Link active href="#">Edit Details</Nav.Link> : <Nav.Link href="/editdetailsdonor">Edit Details</Nav.Link>}
            <Nav.Link href="/logout" className="btn btn-primary" onClick={this.clearConnections} >Logout {this.state.username}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        
        );
    }
}

export default NavBarDonor;