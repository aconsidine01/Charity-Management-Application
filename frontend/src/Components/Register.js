import TopNavBar from '../TopNavBar';
import React, { Component } from "react";

import ReactDOM from 'react-dom';

import Footer from '../Footer';



import { makeStyles } from "@material-ui/core/styles";

import { Nav} from 'react-bootstrap'
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

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

async function userAdd(toInput) {


    const response = await fetch("/api/user/insert", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let newuser = await response.json();
    console.log(newuser.pk_user_id);
    let userid = newuser.pk_user_id;
    return userid;
}

async function detailsAdd(toInput) {
    const response = await fetch("/api/details/insert", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let newdetails = await response.json();
    let newdetailsid = newdetails.pk_details_id;
    return newdetailsid;
}

async function donorAdd(toInput) {
    const response = await fetch("/api/donors/insert", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
}

async function recipientAdd(toInput) {
    const response = await fetch("/api/recipients/insert", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
}

async function nameAdd(toInput) {
    const response = await fetch("/api/name/insert", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
}

async function addressAdd(toInput) {
    const response = await fetch("/api/address/insert", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
}

async function sendRegistrationEmail(email) {
    const response = await fetch('/email/' + email + '/pending', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify() // body data type must match "Content-Type" header
    });
    console.log(email)
}


class AddUserComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmpassword: '',
            email: '',
            message: null,
            userid: '',
            userstatement: null,
            user_type: null,
            user_added: 0,
            errors: {
                username: '',
                email: '',
                password: '',
                user_type: ''
              }
        }
        this.saveUser = this.saveUser.bind(this);
    }

    /*
    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }
    */

    //get userlist
async componentDidMount() {

    const response = await fetch('/api/user/');
    const body = await response.json();
    this.setState({ users: body, isLoading: false });
  }

    validateUser = (e) => {
        e.preventDefault();
        if(validateForm(this.state.errors)) {
          console.log('Valid Form')
        }else{
          console.log('Invalid Input')
        }
    }

    saveUser = (e) => {
        e.preventDefault();
        if(validateForm(this.state.errors)) {
            let user = {
                username: this.state.username, password: this.state.password, email: this.state.email, reg_approval: "pending", user_type: this.state.user_type
            };
            {
                if (window.confirm('If a donor you shall remain anonymous unless you change your privacy settings to public. If a charity your organisation must be listed as a registed charity before admins can approve your request')) {
                  {
                    
                    userAdd(user).then(res => {
                        console.log(res)
                        this.setState({ userid: res })
                        console.log(this.state.userid)
                        let details = { fk_user_id: this.state.userid, user_statement: this.state.userstatement }
                        detailsAdd(details).then(res => {
                            console.log(res)
                        });
                        let name = { fk_user_id: this.state.userid}
                        nameAdd(name)
                        let address = { fk_user_id: this.state.userid}
                        addressAdd(address)
                        this.setState({ user_added: 1 })
                        console.log(this.state.user_type)
                        let donor = {fk_user_id: this.state.userid, privacy_level: "full"}
                        let recipient = {fk_user_id: this.state.userid}
                        {this.state.user_type==1? donorAdd(donor): recipientAdd(recipient)}
                        console.log(this.state.email)
                        sendRegistrationEmail(this.state.email)
        
                    });
          
                  }
                };
              }

          }else{
            console.log('Invalid Input')
          }


    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    // set user details to session storage
    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('user', JSON.stringify(nextState));
    }
    
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name + value)
        let errors = this.state.errors;
        const { users, isLoading } = this.state;
      
        switch (name) {
          case 'username': 
            errors.username = value.length < 5 ? 'Username must be at least 5 characters long!': '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email must be valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 12
                ? 'Password must be at least 12 characters long!'
                : '';
            break;
            case 'confirmpassword': 
            errors.password = 
              value === this.state.password
                ? ''
                : 'Passwords do not match!';
            break;
            case 'user_type': 
            errors.user_type = 
              value.length === 0
                ? 'Please select a user type'
                : '';
            break;
          default:
            break;
        }
      
        if(name==='username') {
            {users.map(users =>   
                {(value===users.username) && (errors.username = 'Username already in use, please choose another')}
            )}
        }
        if(name==='email') {
            {users.map(users =>   
                {(value===users.email) && (errors.email = 'Email already in use, please choose another')}
            )}
        }

        this.setState({errors, [e.target.name]: e.target.value}, ()=> {
            console.log(errors)
            console.log(errors.username)
        })

      }



    render() {

        return (
            <div className="container">
                <h2 className="text-center">Register as Donor or Charity</h2>
                <form>
                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" placeholder="username" name="username" required className="form-control" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" placeholder="password" name="password" required className="form-control" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" placeholder="password" name="confirmpassword" required className="form-control" value={this.state.confirmpassword} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" placeholder="email" name="email" required className="form-control" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>User Statement:</label>
                        <input type="textarea" placeholder="User Statement" name="userstatement" className="form-control" value={this.state.userstatement} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                    <label>Charity &nbsp;</label>
                    <input type="radio" id="charity" name="user_type" value="2" onChange={this.onChange}/>
                    <label>&nbsp; Donor &nbsp;</label>
                    <input type="radio" id="donor" name="user_type" value="1" onChange={this.onChange}/>
                    </div>
                    {!this.state.user_added==1?
                    <div>
                        {this.state.username===null||this.state.password===null||this.state.confirmpassword===null||this.state.email===null||this.state.user_type===null?
                        <button className="btn btn-primary btn-success btn-block" disabled>Register</button>: 
                    <button className="btn btn-primary btn-success btn-block" onClick={this.saveUser}>Register</button>  }
                    <h2>{this.state.errors.username}</h2>
                    <h2>{this.state.errors.email}</h2>
                    <h2>{this.state.errors.password}</h2>
                    </div>:
                    <div><h2>Registration has been received</h2>
                    <Nav.Link href="/login"><h3>Please login</h3></Nav.Link>
                    </div>}
                    <div><h3><Nav.Link href="https://www.gov.uk/setting-up-charity" target="_blank">Please find information on how to register as a charity here</Nav.Link></h3></div>
                </form>
            </div>
        );
    }
}



class Register extends React.Component {





    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Register"
        };
    }

    render() {
        return (
            <>
                <TopNavBar data={this.state} />
                <AddUserComponent data={this.state} />
                <Footer />
            </>
        )
    }
}

ReactDOM.render(
    <Register />,
    document.getElementById('root')
);

export default Register;