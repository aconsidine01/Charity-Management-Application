import NavBarAdmin from './NavBarAdmin';
import React, { Component } from "react";
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
import { Nav, Button } from 'react-bootstrap'

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

function PendingDonors() {
  const classes = useStyles();

  const [donators, upDateDonators] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  const [reviewuserid, setReview] = React.useState([]);
  const [message, setMessage] = React.useState([]);
  let isLoading = true;

  async function donorList() {
    let response = await fetch("/api/donators/");
    let donators = await response.json();
    upDateDonators(donators);
  }

  async function sendRegistrationEmail(email, approvalstatus) {
    const response = await fetch('/email/' + email + '/' + approvalstatus, {
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

  async function completeRequest(toInput) {
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

  if (firstLoad) {
    donorList();
    setLoad(false);
  }

  if (donators.length > 0) isLoading = false;


  function aproveRequest(e) {
    e.preventDefault();
    setReview(e.target.value)
    console.log('The link was clicked. ' + reviewuserid);
    let approval = { pk_user_id: e.target.value, reg_approval: "approved" }
    completeRequest(approval)
    setMessage("Request Approved")
    console.log(e.target)
    let email = e.target.name
    let approvalstatus = "approved"
    sendRegistrationEmail(email, approvalstatus)
  }

  function rejectRequest(e) {
    e.preventDefault();
    setReview(e.target.value)
    console.log('The link was clicked. ' + reviewuserid);
    let rejection = { pk_user_id: e.target.value, reg_approval: "rejected" }
    completeRequest(rejection)
    setMessage("Request Rejected")
    let email = e.target.name
    let approvalstatus = "rejected"
    sendRegistrationEmail(email, approvalstatus)
  }



  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <GroupIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Pending applications from Donors
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
                <TableCell align="centre">Donor Name</TableCell>
                <TableCell align="centre">UserName</TableCell>
                <TableCell align="centre">About Donor</TableCell>
                <TableCell align="centre">Photo</TableCell>
                <TableCell align="centre">Video</TableCell>
                <TableCell align="centre">Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donators?.map(donators =>
              (donators.reg_approval === 'pending' &&
                <TableRow key={donators.pk_user_id}>
                  <TableCell align="centre"><b>{donators.firstname}{donators.middlename}{donators.lastname}</b></TableCell>
                  {donators.username === null ? <TableCell></TableCell> : <TableCell align="centre">{donators.username}</TableCell>}
                  {donators.user_statement === null ? <TableCell></TableCell> : <TableCell align="centre">{donators.user_statement}</TableCell>}
                  {donators.user_photo === null ? <TableCell></TableCell> : <TableCell align="centre"><img src={process.env.PUBLIC_URL + '/pictures/' + donators.user_photo} width="100px" height="100px" /></TableCell>}
                  {donators.user_video === null ? <TableCell></TableCell> : <TableCell align="centre" ><Nav.Link href={donators.user_video}>Video</Nav.Link></TableCell>}
                  {donators.user_url === null ? <TableCell></TableCell> : <TableCell align="centre" ><Nav.Link href={donators.user_url}>Website</Nav.Link></TableCell>}
                  <Button variant="success" value={donators.pk_user_id} name={donators.email} onClick={aproveRequest} >Approve</Button>
                  <a>&nbsp;</a>
                  <Button variant="danger" value={donators.pk_user_id} name={donators.email} onClick={rejectRequest}>Reject</Button>
                  {message}
                </TableRow>)
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <br></br>
    </div>
  );
}

function PendingCharities() {
  const classes = useStyles();

  const [charities, upDateCharities] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  const [reviewuserid, setReview] = React.useState([]);
  const [message, setMessage] = React.useState([]);
  let isLoading = true;

  async function charitiesList() {
    let response = await fetch("/api/charities/");
    let charities = await response.json();
    upDateCharities(charities);
  }

  async function sendRegistrationEmail(email, approvalstatus) {
    const response = await fetch('/email/' + email + '/' + approvalstatus, {
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


  async function completeRequest(toInput) {
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

  if (firstLoad) {
    charitiesList();
    setLoad(false);
  }

  if (charities.length > 0) isLoading = false;


  function aproveRequest(e) {
    if (window.confirm('Please confirm that you have verified that this charity is registered to operate as a charity in the UK')) {
      {

        e.preventDefault();
        setReview(e.target.value)
        console.log('The link was clicked. ' + e.target.value);
        let approval = { pk_user_id: e.target.value, reg_approval: "approved" }
        completeRequest(approval)
        setMessage("Request Approved")
        let email = e.target.name
        let approvalstatus = "approved"
        sendRegistrationEmail(email, approvalstatus)

      }
    };
    e.preventDefault();
    setReview(e.target.value)
    console.log('The link was clicked. ' + e.target.value);
    let approval = { pk_user_id: e.target.value, reg_approval: "approved" }
    completeRequest(approval)
    setMessage("Request Approved")
    let email = e.target.name
    let approvalstatus = "approved"
    sendRegistrationEmail(email, approvalstatus)
  }

  function rejectRequest(e) {
    e.preventDefault();
    setReview(e.target.value)
    console.log('The link was clicked. ' + reviewuserid);
    let rejection = { pk_user_id: e.target.value, reg_approval: "rejected" }
    completeRequest(rejection)
    setMessage("Request Rejected")
    let email = e.target.name
    let approvalstatus = "rejected"
    sendRegistrationEmail(email, approvalstatus)
  }



  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <GroupIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Pending applications from Charities
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
                <TableCell align="centre">UserName</TableCell>
                <TableCell align="centre">Name</TableCell>
                <TableCell align="centre">Charity Summary</TableCell>
                <TableCell align="centre">Photo</TableCell>
                <TableCell align="centre">Video</TableCell>
                <TableCell align="centre">Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {charities?.map(charities =>
              (charities.reg_approval === 'pending' &&
                <TableRow key={charities.pk_user_id}>
                  {charities.username === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{charities.username}</TableCell>}
                  {charities.orgname === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{charities.orgname}</TableCell>}
                  {!charities.user_statement === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{charities.user_statement}</TableCell>}
                  {!charities.user_photo === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre"><img src={process.env.PUBLIC_URL + '/pictures/' + charities.user_photo} width="100px" height="100px" /></TableCell>}
                  {!charities.user_video === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={charities.user_video}>Video</Nav.Link></TableCell>}
                  {!charities.user_url === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={charities.user_url}>Website</Nav.Link></TableCell>}
                  <Button variant="success" value={charities.pk_user_id} name={charities.email} onClick={aproveRequest} >Approve</Button>
                  <a>&nbsp;</a>
                  <Button variant="danger" value={charities.pk_user_id} name={charities.email} onClick={rejectRequest}>Reject</Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <br></br>
    </div>
  );
}

class HomeAdmin extends React.Component {





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
    } else {
      this.setState({
        userid: '',
        username: '',
        usertype: '',
        loggedin: false
      })
    }

    if (this.state.usertype == '2') {
      this.setState({ loggedin: true })
    }
    else {
      console.log(this.state.usertype)
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      currentPage: "HomePageAdmin"
    };
  }



  render() {
    const { usertype } = this.state;
    console.log(usertype)


    if (usertype == 0) {
      return (
        <>
          <NavBarAdmin data={this.state} />
          <h2>Welcome {this.state.username} you have been logged in as an administrator </h2>
          <h3><Nav.Link href="https://www.gov.uk/find-charity-information" target="_blank">The UK charity register can be checked here</Nav.Link></h3>
          <PendingDonors />
          <PendingCharities />
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
  <HomeAdmin />,
  document.getElementById('root')
);


export default HomeAdmin;