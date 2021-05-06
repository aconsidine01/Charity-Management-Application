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
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//import Container from "@material-ui/core/Container";
import {  Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";






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

//const classes = useStyles();

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


async function projectAdd(toInput) {


    const response = await fetch("/api/projects/insert", {
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


function ProjectsList() {
    const classes = useStyles();
  
    const [userData] = React.useState([JSON.parse(localStorage.getItem('user'))]);
    const [userid] = React.useState(userData[0].userid);
    const [username] = React.useState(userData[0].username);
    const [charities, upDateCharities] = React.useState([]);
    const [recipient, upDateRecipient] = React.useState([]);
    const [projects, upDateProjects] = React.useState([]);
    const [projectid, upDateProjectId] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);
    const [allocate, setAllocation] = React.useState(false);
    const [amount, setAmount] = React.useState([]);
    const [message, setMessage] = React.useState([]);
    let isLoading = true;
    console.log(userid)
  
    async function sampleFunc() {
      let response = await fetch("/api/charities/");
      let charities = await response.json();
      upDateCharities(charities);
      let responseDetails = await fetch('/api/recipients/pathbyuserid/' + userid);
      let responseRecipient = await responseDetails.json();
     // this.setState({ recipient: responseRecipient, isLoading: false });
     console.log(responseDetails)
     console.log(responseRecipient[0].pk_recipient_id)
     let recipientid = responseRecipient[0].pk_recipient_id
      upDateRecipient(responseRecipient[0].pk_recipient_id)
      console.log(recipient)
      const responseDetails1 = await fetch('/api/projects/pathbyrecipientid/' + recipientid);
      const responseProjects = await responseDetails1.json();
      //this.setState({ projects: responseProjects, isLoading: false });
      upDateProjects(responseProjects)
      console.log(projects)
    }

    async function addAllocation(toInput) {
        const response = await fetch("/api/allocation/insert", {
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
  
    if (firstLoad) {
      sampleFunc();
      setLoad(false);
    }
  
    if (projects.length > 0) isLoading = false;
  
   
    console.log(projects)
  
    function allocateFunds(e) {
        e.preventDefault();
        //upDateProjectId(e.target.value)
        //setAllocation(true)
        {if(window.confirm('Allocate to this project?')){ {upDateProjectId(e.target.value); setAllocation(true);}};}
        console.log(recipient)
        console.log(e.target.value)

        console.log(amount)
        console.log('The link was clicked. Allocate to ' + projectid);
        let allocation =  {
            fk_recipient_id: recipient, 
            fk_project_id: e.target.value,
            allocation_amount: amount
        };
        {allocate===true? addAllocation(allocation) : addAllocation(allocation)}
        setMessage("Funds allocated to project")
      }

      function onChange(e) {
          setAmount(e.target.value)
          console.log(e.target.value)
      }
  
    return (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Projects belonging to {username}
        </Typography>
  
        {isLoading ? (
          <h4>No projects created</h4>
        ) : (
          <TableContainer
            style={{ width: "80%", margin: "0 10px" }}
            component={Paper}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="centre">Project Name</TableCell>
                  <TableCell align="centre">Project Summary</TableCell>
                  <TableCell align="centre">Photo</TableCell>
                  <TableCell align="centre">Video</TableCell>
                  <TableCell align="centre">Website</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects?.map(projects => 
                  <TableRow key={projects.pk_project_id}>
                    {projects.project_name === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{projects.project_name}</TableCell>}
                    {projects.project_statement === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{projects.project_statement}</TableCell>}
                    {projects.project_photo === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre"><img src={process.env.PUBLIC_URL + '/pictures/' + projects.project_photo} width="100px" height="100px" /></TableCell>}
                    {projects.project_video === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={projects.project_video}>Video</Nav.Link></TableCell>}
                    {projects.project_url === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={projects.projectr_url}>Website</Nav.Link></TableCell>}
                    <TableCell align="centre" ><div className="form-group">
                        <label>Allocate Amount:</label>
                        <input type="double" placeholder="Enter Amount"  name="allocation_amount" onChange={onChange} className="form-control"/>
                    </div></TableCell>
                    <TableCell align="centre" ><Button variant="success" recipient={recipient} value={projects.pk_project_id} projectnumber={projects.pk_project_id} onClick={allocateFunds} >Allocate Funds</Button></TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <br></br>
      </div>
    );
  }

class ExistingProjects extends React.Component {


    constructor(props) {
        super(props);
        this.userData = JSON.parse(localStorage.getItem('user'));
        this.state = {
            userid: this.userData.userid,
            usertype: this.userData.usertype,
            errors: {
                username: '',
                email: '',
                password: '',
                user_type: '',
                selectedFile: ''
            }
        }
        //this.addProject = this.addProject.bind(this);
    }



    //get recipientid and projects
    async componentDidMount() {
        console.log(this.state)        
        const responseDetails = await fetch('/api/recipients/pathbyuserid/' + this.state.userid);
        const responseRecipient = await responseDetails.json();
        this.setState({ recipient: responseRecipient, isLoading: false });
        console.log(responseRecipient[0].pk_recipient_id)
        const responseDetails1 = await fetch('/api/projects/pathbyrecipientid/' + responseRecipient[0].pk_recipient_id);
        const responseProjects = await responseDetails1.json();
        this.setState({ projects: responseProjects, isLoading: false });
        console.log(responseProjects)
    }


        render() {
            return (
                <>
                    <ProjectsList data={this.state}/>
                </>
            )
        }
}

class AddProjectComponent extends Component {


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
        this.addProject = this.addProject.bind(this);
    }


    //get recipientid
    async componentDidMount() {
        const responseDetails = await fetch('/api/recipients/pathbyuserid/' + this.state.userid);
        const responseRecipient = await responseDetails.json();
        this.setState({ recipient: responseRecipient, isLoading: false });
        console.log(responseRecipient)
    }

    validateUser = (e) => {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            console.log('Valid Form')
        } else {
            console.log('Invalid Input')
        }
    }


    handleFileChange = (e) => {
        console.log(e.target.files[0].name)
        this.setState(
            {
                selectedFile: e.target.files[0],
                project_photo: e.target.files[0].name,
                loaded: 0,
            }
        )
        console.log(this.state.selectedFile)

    }


    addProject = (e) => {
        e.preventDefault();
        console.log(this.state)
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.log(this.state.selectedFile)
        console.log(this.state.project_photo)
        console.log(data)
        axios.post("http://localhost:4500/upload", data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
            if (validateForm(this.state.errors)) {
                let projects = {
                    pk_project_id: 5, 
                    fk_recipient_id: this.state.recipient[0].pk_recipient_id,
                    project_photo: this.state.project_photo
                };
                projectAdd(projects).then(res => {
                    console.log(res)
                    console.log(this.state.userid)
    
                });
            } else {
                console.log('Invalid Input')
            }
        if (validateForm(this.state.errors)) {
            let project = {
                fk_recipient_id: this.state.recipient[0].pk_recipient_id,
                project_name: this.state.project_name,
                project_statement: this.state.project_statement,
                project_photo: this.state.project_photo,
                project_video: this.state.project_video,
                project_url: this.state.project_url

            };
            projectAdd(project).then(res => {
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
        console.log(this.state.project_photo)
        console.log(data)
        axios.post("http://localhost:4500/upload", data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
            if (validateForm(this.state.errors)) {
                let projects = {
                    pk_project_id: 5, 
                    fk_recipient_id: this.state.recipient[0].pk_recipient_id,
                    project_photo: this.state.project_photo
                };
                projectAdd(projects).then(res => {
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
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            case 'user_type':
                errors.user_type =
                    value.length === 0
                        ? 'Please select a user type'
                        : '';
                break;
                case 'project_name':
                    errors.project_name =
                        value.length === 0 || value.length > 100
                            ? 'Project name can be a maxmium of 100 characters and cant be empty'
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
                <h2 className="text-center">Add Project</h2>
                <form>
                <div className="form-group">
                        <label>Project Name: </label>
                        <input type="text" placeholder={this.state.project_name} name="project_name" className="form-control" value={this.state.project_name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>About Project: </label>
                        <input type="text" placeholder={this.state.project_statement} name="project_statement" className="form-control" value={this.state.project_statement} onChange={this.handleChange} />
                    </div>
                    <div class="Row">
                        <label>Project Photo: </label>
                        <div>&nbsp;&nbsp;</div>
                        <input type="file" placeholder={this.state.project_photo} name="file"   onChange={this.handleFileChange} />
                        <div>&nbsp;&nbsp;</div>
                    </div>
                    <div className="form-group">
                        <label>Project Video: </label>
                        <input type="text" placeholder={this.state.project_video} name="project_video" className="form-control" value={this.state.project_video} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Project Weblink: </label>
                        <input type="url" placeholder={this.state.project_url} name="project_url" className="form-control" value={this.state.project_url} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-success btn-block" onClick={this.addProject}>Add Project </button>
                        <h2>{this.state.errors.project_name}</h2>
                    </div>
                </form>
                <br></br>
            </div>
        );
    }
}



class ProjectsAddCharity extends React.Component {


    // get user details from session storage
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        console.log(this.userData.userid)

        this.state = {
            userid: this.userData.userid,
            usertype: this.userData.usertype
        }

        console.log(this.state)

    }




    constructor(props) {
        super(props);
        this.userData = JSON.parse(localStorage.getItem('user'));
        this.state = {
            currentPage: "CharityProjects",
            userid: this.userData.userid,
            username: this.userData.username,
            usertype: this.userData.usertype
        };
    }

    render() {
        console.log(this.state)
        if (this.state.usertype==2) {
        return (
            <>
                <NavBarCharity data={this.state} />
                <ExistingProjects data={this.state} />
                <AddProjectComponent data={this.state} />
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
    <ProjectsAddCharity />,
    document.getElementById('root')
);

export default ProjectsAddCharity;