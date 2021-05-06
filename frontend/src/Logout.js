import TopNavBar from './TopNavBar';
import React, { Component } from "react";
//import AddEmployee from "./Components/AddEmployee";
//import { Route, BrowserRouter as Router } from "react-router-dom";
//import Table from "./Components/Table";
//import App from './App';
//import background from './charitybackground.jfif';
import ReactDOM from 'react-dom';

import Footer from './Footer';

import { makeStyles } from "@material-ui/core/styles";
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(7),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
    }
}));



class Logoff extends React.Component {

    constructor(props) {
        super(props);

      this.state = {
        currentPage: "Logout",
        isLoading: true


    }



}



handleChange(event) {
    this.setState(
        {
            [event.target.name]
                : event.target.value
        }
    )
}



// clear session and local storage
componentWillUpdate() {
    sessionStorage.clear();
    localStorage.clear();
}






    render() {


        return (
//                    {this.state.showSuccessMessage && <div>Login Sucessful for {this.state.username}, user id is {this.state.userid}, user type is {this.state.usertype}</div>}

            
            <div>    
                <div>                     
                <h2>Thank you for visiting</h2>
                </div>
                <div>                     
                <h2>You have been logged out</h2>
                </div>
                <Nav.Link href="/">Return to Home Page</Nav.Link>
            </div>


            /*
                                User Name or Email: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <Redirect  to="/homeadmin"   />}
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    */
            
        )
    }
}



class Logout extends React.Component {


    constructor(props) {
        super(props);
        this.userData = JSON.parse(localStorage.getItem('user'));
        this.state = {
            currentPage: "Logout"
        };
      }




    render() {
        console.log(this.state)

    if (this.state.currentPage==="Logout") {
        return (
            <>
                <TopNavBar data={this.state}/>
                <Logoff data={this.state}/>
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
    <Logout />,
    document.getElementById('root')
);

export default Logout;

