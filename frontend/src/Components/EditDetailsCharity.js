import NavBarCharity from './NavBarCharity';
import React, { Component } from "react";
//import AddEmployee from "./Components/AddEmployee";
//import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
//import Table from "./Components/Table";
//import App from './App';
//import background from './charitybackground.jfif';
import ReactDOM from 'react-dom';
import axios from 'axios';


//import Registration from "../Components/Registration";

//import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
//import Container from "@material-ui/core/Container";
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCharityNotValidated from './NavBarCharityNotValidated';
//import CircularProgress from "@material-ui/core/CircularProgress";



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

async function nameUpdate(toInput) {
    const response = await fetch("/api/name/update", {
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
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let existingname = await response.json();
    let nameid = existingname.pk_name_id;
    return nameid;
}

async function addressUpdate(toInput) {


    const response = await fetch("/api/address/update", {
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
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    //let existingname = await response.json();
    //let nameid = existingname.pk_name_id;
    //return addressid;
}

async function detailsUpdate(toInput) {


    const response = await fetch("/api/details/update", {
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
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    //let existingname = await response.json();
    //let nameid = existingname.pk_name_id;
    //return addressid;
}

async function userUpdate(toInput) {


    const response = await fetch("/api/user/update", {
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
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
}

class EditUserComponent extends Component {


    constructor(props) {
        super(props);
        this.userData = JSON.parse(localStorage.getItem('user'));
        this.state = {
            userid: this.userData.userid,
            errors: {
                username: '',
                email: '',
                password: '',
                user_type: '',
                selectedFile: ''
            }
        }
        this.saveName = this.saveName.bind(this);
    }

    /*
    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }
    */

    //get user
    /*
    async componentDidMount() {
        const response = await fetch('/api/user/');
        const userbody = await response.json();
        this.setState({ users: userbody, isLoading: false });
    }

    //get name
    async componentDidMount() {
        const response = await fetch('/api/name/pathbyuserid/' + this.state.userid);
        const namebody = await response.json();
        this.setState({ names: namebody, isLoading: false });
        console.log(namebody)
    }

    //get address
    async componentDidMount() {
        const response = await fetch('/api/address/pathbyuserid/' + this.state.userid);
        const addressbody = await response.json();
        this.setState({ addresses: addressbody, isLoading: false });
        console.log(addressbody)
    }
    */

    //get details
    async componentDidMount() {
        const responseDetails = await fetch('/api/details/pathbyuserid/' + this.state.userid);
        const detailbody = await responseDetails.json();
        this.setState({ details: detailbody, isLoading: false });
        console.log(detailbody)
        const responseAddress = await fetch('/api/address/pathbyuserid/' + this.state.userid);
        const addressbody = await responseAddress.json();
        this.setState({ addresses: addressbody, isLoading: false });
        console.log(addressbody)
        const responseName = await fetch('/api/name/pathbyuserid/' + this.state.userid);
        const namebody = await responseName.json();
        this.setState({ names: namebody, isLoading: false });
        console.log(namebody)
        const responseUser = await fetch('/api/user/');
        const userbody = await responseUser.json();
        this.setState({ users: userbody, isLoading: false });
    }

    validateUser = (e) => {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            console.log('Valid Form')
        } else {
            console.log('Invalid Input')
        }
    }

    saveName = (e) => {
        e.preventDefault();


        if (validateForm(this.state.errors)) {
            let name = {
                pk_name_id: this.state.names[0].pk_name_id, fk_user_id: this.props.data.userid, orgname: this.state.orgname
            };
            nameUpdate(name).then(res => {
                console.log(res)
                console.log(this.state.userid)

            });
        } else {
            console.log('Invalid Input')
        }
    }

    handleFileChange = (e) => {
        console.log(e.target.files[0].name)
        this.setState(
            {
                selectedFile: e.target.files[0],
                user_photo: e.target.files[0].name,
                loaded: 0,
            }
        )
    }

    saveAddress = (e) => {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            let address = {
                pk_address_id: this.state.addresses[0].pk_address_id, fk_user_id: this.props.data.userid,
                buildingname: this.state.buildingname,
                address_line1: this.state.address_line1,
                address_line2: this.state.address_line2,
                area: this.state.area,
                city: this.state.city,
                county: this.state.county,
                postcode: this.state.postcode
            };
            addressUpdate(address).then(res => {
                console.log(res)
                console.log(this.state.userid)

            });
        } else {
            console.log('Invalid Input')
        }
    }

    saveDetails = (e) => {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            let details = {
                pk_details_id: this.state.details[0].pk_details_id, fk_user_id: this.props.data.userid,
                user_statement: this.state.user_statement,
                user_url: this.state.user_url,
                user_video: this.state.user_video
            };
            detailsUpdate(details).then(res => {
                console.log(res)
                console.log(this.state.userid)

            });
        } else {
            console.log('Invalid Input')
        }
    }

    savePassword = (e) => {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            let user = {
                pk_user_id: this.props.data.userid,
                password: this.state.password
            };
            userUpdate(user).then(res => {
                console.log(res)
                console.log(this.state.userid)

            });
        } else {
            console.log('Invalid Input')
        }
    }

    saveAccount = (e) => {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            let user = {
                pk_user_id: this.props.data.userid,
                account_name: this.state.account_name,
                sort_code: this.state.sort_code,
                account_number: this.state.account_number
            };
            userUpdate(user).then(res => {
                console.log(res)
                console.log(this.state.userid)

            });
        } else {
            console.log('Invalid Input')
        }
    }

    savePhoto = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.log(this.state.selectedFile)
        console.log(this.state.user_photo)
        axios.post("http://localhost:4500/upload", data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })

        if (validateForm(this.state.errors)) {
            let details = {
                pk_details_id: this.state.details[0].pk_details_id, fk_user_id: this.props.data.userid,
                user_photo: this.state.user_photo
            };
            detailsUpdate(details).then(res => {
                console.log(res)
                console.log(this.state.userid)

            });
        } else {
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
                errors.username = value.length < 5 ? 'Username must be at least 5 characters long!' : '';
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
            case 'user_type':
                errors.user_type =
                    value.length === 0
                        ? 'Please select a user type'
                        : '';
                break;
            case 'account_name':
                errors.account_name =
                    value.length > 100 || value.length === 0
                        ? 'Account name can be 100 characters max and cant be empty!'
                        : '';
                break;
                case 'orgname':
                    errors.account_name =
                        value.length > 100 || value.length === 0
                            ? 'Charity name can be 100 characters max and cant be empty!'
                            : '';
                    break;
            case 'sort_code':
                errors.sort_code =
                    value.length !== 6
                        ? 'Sort code must be 6 characters!'
                        : '';
                break;
            default:
                break;
        }

        if (name === 'username') {
            {
                users.map(users => { (value === users.username) && (errors.username = 'Username already in use, please choose another') }
                )
            }
        }
        if (name === 'email') {
            {
                users.map(users => { (value === users.email) && (errors.email = 'Email already in use, please choose another') }
                )
            }
        }
        this.setState({ errors, [e.target.name]: e.target.value }, () => {
            console.log(errors)
            console.log(errors.username)
        })

    }



    render() {

        console.log(this.state.userid)
        console.log(this.props.data.userid)
        console.log(this.state)
        console.log(this.state.addresses)
        return (
            <div className="container">
                <h2 className="text-center">Update Charity Details</h2>
                <form>
                    <div className="form-group">
                        <label>Charity Name:</label>
                        <input type="text" placeholder={this.state.orgname} name="orgname" className="form-control" value={this.state.orgname} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-success btn-block" onClick={this.saveName}>Update Name </button>
                        <h2>{this.state.errors.orgname}</h2>
                    </div>
                </form>
                <br></br>
                <form>
                    <div className="form-group">
                        <label>Update Password: </label>
                        <input type="password" placeholder={this.state.password} name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Update Password: </label>
                        <input type="password" placeholder={this.state.confirm_password} name="confirm_password" className="form-control" value={this.state.confirm_password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-success btn-block" onClick={this.savePassword}>Update Psssword </button>
                        <h2>{this.state.errors.password}</h2>
                    </div>
                </form>
                <br></br>
                <form>
                    <div className="form-group">
                        <label>Account Name: </label>
                        <input type="test" placeholder={this.state.account_name} name="account_name" className="form-control" value={this.state.account_name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Sort Code: </label>
                        <input type="number" placeholder={this.state.sort_code} name="sort_code" className="form-control" value={this.state.sort_code} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Account Number: </label>
                        <input type="number" placeholder={this.state.account_number} name="account_number" className="form-control" value={this.state.account_number} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-success btn-block" onClick={this.saveAccount}>Update Account </button>
                        <h2>{this.state.errors.account_name}</h2>
                        <h2>{this.state.errors.sort_code}</h2>
                        <h2>{this.state.errors.account_number}</h2>
                    </div>
                </form>
                <br></br>
                <form>
                    <div className="form-group">
                        <label>About Charity: </label>
                        <input type="text" placeholder={this.state.user_statement} name="user_statement" className="form-control" value={this.state.user_statement} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Charity Video: </label>
                        <input type="text" placeholder={this.state.user_video} name="user_video" className="form-control" value={this.state.user_video} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Charity Weblink: </label>
                        <input type="url" placeholder={this.state.user_url} name="user_url" className="form-control" value={this.state.user_url} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-success btn-block" onClick={this.saveDetails}>Update Details </button>
                    </div>
                </form>
                <br></br>
                <form>
                    <div className="form-group">
                        <label>Charity Photo: </label>
                        <input type="file" placeholder={this.state.user_photo} name="file" className="form-control" onChange={this.handleFileChange} />
                        <button type="button" class="btn btn-success btn-block" onClick={this.savePhoto}>Upload</button>
                    </div>
                </form>
                <br></br>
                <form>
                    <div className="form-group">
                        <label>Buildling Name:</label>
                        <input type="text" placeholder={this.state.buildingname} name="buildingname" className="form-control" value={this.state.buildingname} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address Line1:</label>
                        <input type="text" placeholder={this.state.address_line1} name="address_line1" className="form-control" value={this.state.address_line1} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address Line2:</label>
                        <input type="text" placeholder={this.state.address_line2} name="address_line2" className="form-control" value={this.state.address_line2} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Area:</label>
                        <input type="text" placeholder={this.state.area} name="area" className="form-control" value={this.state.area} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Town/City:</label>
                        <input type="text" placeholder={this.state.city} name="city" className="form-control" value={this.state.city} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>County:</label>
                        <input type="text" placeholder={this.state.county} name="county" className="form-control" value={this.state.county} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Post Code:</label>
                        <input type="text" placeholder={this.state.postcode} name="postcode" className="form-control" value={this.state.postcode} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-success btn-block" onClick={this.saveAddress}>Update Address </button>
                        <h2>{this.state.errors.username}</h2>
                        <h2>{this.state.errors.email}</h2>
                        <h2>{this.state.errors.password}</h2>
                    </div>
                </form>
            </div>
        );
    }
}



class EditDetailsCharity extends React.Component {


    // get user details from session storage
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        console.log(this.userData.userid)

        this.state = {
            userid: this.userData.userid
        }

        console.log(this.state)

    }




    constructor(props) {
        super(props);
        this.userData = JSON.parse(localStorage.getItem('user'));
        this.state = {
            currentPage: "CharityEditDetails",
            userid: this.userData.userid,
            username: this.userData.username,
            usertype: this.userData.usertype,
            regapproval: this.userData.regapproval
        };
    }



    render() {
        console.log(this.state)
        if (this.state.usertype == 2 && this.state.regapproval === "approved") {
            return (
                <>
                    <NavBarCharity data={this.state} />
                    <EditUserComponent data={this.state} />
                </>
            )
        }
        else if (this.state.usertype == 2) {
            return (
                <>
                    <NavBarCharityNotValidated data={this.state} />
                    <EditUserComponent data={this.state} />
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
    <EditDetailsCharity />,
    document.getElementById('root')
);

export default EditDetailsCharity;