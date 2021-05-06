import TopNavBar from './TopNavBar';
import React  from "react";
//import AddEmployee from "./Components/AddEmployee";
//import { Route, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router-dom';
//import Table from "./Components/Table";
//import App from './App';
//import background from './charitybackground.jfif';
import ReactDOM from 'react-dom';

import Footer from './Footer';
import { makeStyles } from "@material-ui/core/styles";
//import Container from "@material-ui/core/Container";
//import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Logon from "./Components/Logon";


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

async function failedLogon(userId) {
    const response = await fetch("api/user/failedlogon", {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(userId) // body data type must match "Content-Type" header
    });
}

async function successLogon(userId) {
    const response = await fetch("api/user/update", {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
            //X-Content-Type-Options: no-sniff
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(userId) // body data type must match "Content-Type" header
    });
}

class Logon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: "Login",
            username: '',
            password: '',
            email: "",
            isLoading: true,
            hasLoginFailed: false,
            showSuccessMessage: false,
            users: [],
            userid: null,
            usertype: null,
            regapproval: null

        }


        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }



    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {

        const { users, isLoading } = this.state;
        console.log(users);
        /*
        {users.map(users =>
          {(this.state.username===users.username||this.state.username===users.email) && this.state.password==users.password?
            this.setState({
              hasLoginFailed:false, 
              showSuccessMessage:true,
              username: (users.username),
              userid: (users.pk_user_id),
              usertype: (users.user_type),
              regapproval: users.reg_approval,
              failcount: users.fail_count
            }):    
            this.setState({hasLoginFailed:true})
          } 
          )}
          */
        {
            users.map(users => {
                {
                    ((this.state.username === users.username || this.state.username === users.email) && this.state.password === users.password) &&
                    this.setState({
                        hasLoginFailed: false,
                        showSuccessMessage: true,
                        username: (users.username),
                        userid: (users.pk_user_id),
                        usertype: (users.user_type),
                        regapproval: users.reg_approval,
                        failcount: users.fail_count
                    })
                }
            })
        }

        {
            users.map(users => {
                {
                    {
                        ((this.state.username === users.username || this.state.username === users.email) && this.state.password === users.password && users.fail_count <4) &&
                        successLogon({pk_user_id: users.pk_user_id, password: users.password, fail_count: 0})
                    }
                    
                }
            })
        }

        

        /*
        {
            users.map(users => {
                {
                    ((this.state.username === users.username || this.state.username === users.email) && !this.state.password !== users.password) &&
                    this.setState({
                        hasLoginFailed: true,
                        failedId: (users.pk_user_id)
                    })
                }

            })
        }
        */

        {
            users.map(users => {
                {
                    ((this.state.username === users.username || this.state.username === users.email) && this.state.password !== users.password) &&
                    //console.log({ pk_user_id: users.pk_user_id })
                    failedLogon({ pk_user_id: users.pk_user_id })
                }
            })
        }

        {
            users.map(users => {
                {
                    ((this.state.username === users.username || this.state.username === users.email) && !this.state.password !== users.password) &&
                    this.setState({
                        hasLoginFailed: true,
                        failedId: (users.pk_user_id)
                    })
                }

            })
        }

        /*
        console.log(this.state)
        let userId = {
            pk_user_id: this.state.failedId
        };
        console.log(userId)
        failedLogon(userId);
        */

    }



    // set user details to local storage
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    //get userlist
    async componentDidMount() {

        const response = await fetch('/api/user/');
        const body = await response.json();
        this.setState({ users: body, isLoading: false });
    }



    render() {

        const { users, isLoading } = this.state;


        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            //                    {this.state.showSuccessMessage && <div>Login Sucessful for {this.state.username}, user id is {this.state.userid}, user type is {this.state.usertype}</div>}

            <div>
                <h1>Login</h1>
                <div className="container">
                    <form onSubmit={this.loginClicked}>
                        <div className="form-group">
                            <label>Username or Email</label>
                            <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        {this.state.hasLoginFailed && <div className="alert alert-warning" >Invalid Credentials, please contact admin at aconsidine01@qub.ac.uk to request password</div>}
                        {(this.state.showSuccessMessage && this.state.failcount >= 5) && <div className="alert alert-warning">Locked id please contact admin at aconsidine01@qub.ac.uk to unlock id</div>}
                        {(this.state.showSuccessMessage && this.state.usertype == 0 && this.state.failcount < 5) && <Redirect to="/homeadmin" />}
                        {(this.state.showSuccessMessage && this.state.usertype == 1 && this.state.failcount < 5) && <Redirect to="/homedonor" />}
                        {(this.state.showSuccessMessage && this.state.usertype == 2 && this.state.failcount < 5) && <Redirect to="/homecharity" />}
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>

        )
    }
}



class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Login"
        };
    }




    render() {
        return (
            <>
                <TopNavBar data={this.state} />
                <Logon data={this.state} />
                <Footer />

            </>
        )
    }
}

ReactDOM.render(
    <Login />,
    document.getElementById('root')
);

export default Login;

