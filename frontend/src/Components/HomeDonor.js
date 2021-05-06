import NavBarDonor from './NavBarDonor';
import NavBarDonorNotValidated from './NavBarDonorNotValidated';
import React, { Component } from "react";
//import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
//import Table from "./Components/Table";
//import App from './App';
import background from '../charitybackground.jfif';
import ReactDOM from 'react-dom';
import Recipients from "../Components/Recipients";
import UserHomePageDonors from '../Components/UserHomePageDonors';
import { Container, Nav } from 'react-bootstrap';
import Footer from '../Footer';

class Main extends React.Component {
    render() {
        return (
            <div class="page-header" >
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                <div class="jumbotron" style={{ backgroundImage: `url(${background})` }}>
                    <div class="container">
                        <h2 class="display-3">
                            <p class="font-weight-bold">Helping others through Life</p>
                            <p class="font-weight-bold">Featuring the below Charities</p>
                        </h2>
                    </div>
                </div>
            </div>
        );
    }

}

class HomeDonor extends React.Component {




    // get user details from session storage
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        console.log(this.userData)

        if (localStorage.getItem('user')) {
            this.setState({
                userid: this.userData.userid,
                username: this.userData.username,
                usertype: this.userData.usertype,
                regapproval: this.userData.regapproval,
                loggedin: true
            })
        } else {
            this.setState({
                userid: '',
                username: '',
                usertype: '',
                loggedin: false
            })
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            currentPage: "HomePageDonor"
        };
    }

    // set user details to session storage
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        const { usertype, regapproval } = this.state;
        console.log(usertype)


        if (usertype == 1 && regapproval === "approved") {
            return (
                <>
                    <NavBarDonor data={this.state} />
                    <h1><center>Welcome {this.state.username} you have been logged in as a Donor, your application is {this.state.regapproval}</center></h1>
                    <div><center>You can now make donations. Statements can be generated to help witrh claiming of Gift Aid</center></div>
                    <div><center>As a donor one can choose toremain anonymous but please be aware that recipients can only claim gift aid if they have donor details</center></div>
                    <div><Nav.Link active href="https://www.gov.uk/claim-gift-aid"><center>Link to HRMC site for information on rules around donations and claiming of Gift Aid</center></Nav.Link></div>
                    <Main />
                    <UserHomePageDonors />
                    <Footer />
                </>
            )
        }
        else if (usertype == 1 && regapproval === "pending") {
            return (
                <>
                    <NavBarDonorNotValidated data={this.state} />
                    <h2><center>Welcome {this.state.username} you have been logged in as a Donor, your application is pending</center></h2>
                    <div><center>Once approved you shall be able to make donations and generate statements</center></div>
                    <div><Nav.Link active href="https://www.gov.uk/claim-gift-aid"><center>Link to HRMC site for information on rules around donations and claiming of Gift Aid</center></Nav.Link></div>
                    <Main />
                    <UserHomePageDonors />
                    <Footer />
                </>
            )
        }
        else if (usertype == 1 && regapproval === "blocked") {
            return (
                <>
                    <NavBarDonorNotValidated data={this.state} />
                    <h2><center>Welcome {this.state.username} you have been logged in as a Donor</center></h2>
                    <div><center>You have been blocked from this application, please contact the administrators at aconsidine01@qub.ac.uk for more information or if you believe you have been blocked in error</center></div>
                    <Footer />
                </>
            )
        }
        else if (usertype == 1 && regapproval === "rejected") {
            return (
                <>
                    <NavBarDonorNotValidated data={this.state} />
                    <h2><center>Welcome {this.state.username} you have been logged in as a Donor</center></h2>
                    <div><center>Your application has been rejected, please contact the administrators at aconsidine01@qub.ac.uk for more information or if you believe you have been rejected in error</center></div>
                    <Footer />
                </>
            )
        }
        return (
            <div>
                <div>
                    <h2>Users must be logged in with appropriate user type to view this page </h2>
                </div>
                <div>
                    <Nav.Link href="/login">Please login at this link</Nav.Link>
                </div>
            </div>
        )

    }
}

ReactDOM.render(
    <HomeDonor />,
    document.getElementById('root')
);


export default HomeDonor;