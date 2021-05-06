import NavBarAdmin from './NavBarAdmin';
import React, { Component } from "react";
//import AddEmployee from "./Components/AddEmployee";
//import { Route, BrowserRouter as Router } from "react-router-dom";
//import Table from "./Components/Table";
//import App from './App';
//import background from './charitybackground.jfif';
import ReactDOM from 'react-dom';
import Footer from '../Footer';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Nav, Button} from 'react-bootstrap'


const useStyles = makeStyles(theme => ({
    table: {
      minWidth: 600
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: `10px`,
      height: "100%",
      width: "99%",
      marginTop: theme.spacing(7)
    },
    link: {
      color: "rgba(0,0,0,0.65)",
      textDecoration: "none",
      marginLeft: "10%",
      alignSelf: "flex-start",
      "&:hover": {
        color: "rgba(0,0,0,1)"
      }
    }
  }));

function AdminCharitiesList() {
    const classes = useStyles();
  
    const [charities, upDateCharities] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);
    let isLoading = true;
  
    async function sampleFunc() {
      let response = await fetch("/api/charities/");
      let charities = await response.json();
      upDateCharities(charities);
    }

    async function updateAccount(toInput) {
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

    
    function activateAccount(e) {
        e.preventDefault();
        let activaterequest = {
            pk_user_id: e.target.value,
            reg_approval: "approved"
        };
        console.log(activaterequest)
        updateAccount(activaterequest)
    }

    function blockAccount(e) {
        e.preventDefault();
        let activaterequest = {
            pk_user_id: e.target.value,
            reg_approval: "blocked"
        };
        console.log(activaterequest)
        updateAccount(activaterequest)
    }
  
    if (firstLoad) {
      sampleFunc();
      setLoad(false);
    }
  
    if (charities.length > 0) isLoading = false;
  
   
  
  
  
    return (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Charities using Acons Charity Management
        </Typography>
  
        {isLoading ? (
          <CircularProgress />
        ) : (
          <TableContainer
            style={{ width: "80%", margin: "0 10px" }}
            component={Paper}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="centre">Name</TableCell>
                  <TableCell align="centre">Charity Summary</TableCell>
                  <TableCell align="centre">Photo</TableCell>
                  <TableCell align="centre">Video</TableCell>
                  <TableCell align="centre">Website</TableCell>
                  <TableCell align="centre">Registration Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {charities?.map(charities => 
                  <TableRow key={charities.pk_user_id}>
                    {charities.orgname === null  ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{charities.orgname}</TableCell>}
                    {!charities.user_statement === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{charities.user_statement}</TableCell>}
                    {!charities.user_photo === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre"><img src={process.env.PUBLIC_URL + '/pictures/' + charities.user_photo} width="100px" height="100px" /></TableCell>}
                    {!charities.user_video === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={charities.user_video}>Video</Nav.Link></TableCell>}
                    {!charities.user_url === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={charities.user_url}>Website</Nav.Link></TableCell>}
                    {!charities.reg_approval === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" >{charities.reg_approval}</TableCell>}
                    {charities.reg_approval=== "approved" ?
                    <TableCell align="centre" ><Button variant="danger"  value={charities.pk_user_id} onClick={blockAccount} >Block</Button></TableCell>
                    : <TableCell align="centre" ><Button variant="success"  value={charities.pk_user_id} onClick={activateAccount} >Activate</Button></TableCell>
                }
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  }
  

class AdminCharities extends React.Component {




        constructor(props) {
            super(props);
            this.state = {
                currentPage: "AdminCharities"
            };
          }

              // get user details from session storage
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        console.log(this.userData)

        if (localStorage.getItem('user')) {
            this.setState({
                userid: this.userData.userid,
                username: this.userData.username,
                usertype: this.userData.usertype,
                loggedin: true
            })
        }else {
            this.setState({
                userid: '',
                username: '',
                usertype: '',
                loggedin: false
            })
        }

    }


render() {
    const { usertype } = this.state;
    console.log(usertype)
    
    
    if (usertype==0) {
        return (
            <>
                <NavBarAdmin data={this.state}/>
                <AdminCharitiesList />
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
    <AdminCharities />,
    document.getElementById('root')
);

export default AdminCharities;