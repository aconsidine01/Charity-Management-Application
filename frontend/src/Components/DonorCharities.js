import NavBarDonor from './NavBarDonor';
import React, { Component } from "react";
//import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
//import Table from "./Components/Table";
//import App from './App';
//import background from './charitybackground.jfif';
import ReactDOM from 'react-dom';
import Recipients from "../Components/Recipients";
import Footer from '../Footer';
import Home from '../Home';


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
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import isFirstDayOfMonth from 'date-fns/isFirstDayOfMonth/index.js';


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

function DonorCharitiesList() {

  const classes = useStyles();

  const [recipients, upDateRecipients] = React.useState([]);
  const [details, upDateDetails] = React.useState([]);
  const [name, upDateName] = React.useState([]);
  const [charities, upDateCharities] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  const [amount, setAmount] = React.useState([]);
  const [recipientid, upDateRecipientId] = React.useState([]);
  const [donorid, upDateDonorId] = React.useState([])
  const [donate, setDonation] = React.useState(false);
  const [giftAid, setGiftAid] = React.useState(true);
  const [anonymity, setAnonymity] = React.useState(true);
  const [isSelected, updateSelected] = React.useState(true);
  const [isSelected1, updateSelected1] = React.useState(true);
  const [message, setMessage] = React.useState([]);
  const [userid, UpdateUserId] = React.useState([]);
  const [donorEmail, updateDonorEmail] = React.useState([]);
  const [recipientEmail, updateRecipientEmail] = React.useState([]);
  const [userData, UpdateUserData] = React.useState([JSON.parse(localStorage.getItem('user'))]);
  let isLoading = true;
  console.log(userData)


  async function sampleFunc() {
    let response = await fetch("/api/charities/");
    let charities = await response.json();
    console.log(userData[0].userid)
    upDateCharities(charities);
    let responseDonor = await fetch('/api/donors/pathbyuserid/' + userData[0].userid);
    console.log(responseDonor)
    let donorbody = await responseDonor.json();
    let donorid = donorbody[0].pk_donor_id
    console.log(donorbody)
    console.log(donorbody[0].pk_donor_id)
    upDateDonorId(donorbody[0].pk_donor_id);
    console.log(donorbody)
    let responseUser = await fetch('/api/user/byuseridpath/' + userData[0].userid);
    let userbody = await responseUser.json();
    console.log(userbody.email)
    updateDonorEmail(userbody.email)
  }

  async function emailDonation(donorEmail, recipientmail, amount) {
    const response = await fetch('/email/' + donorEmail + '/' + recipientmail + '/' + amount, {
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
    console.log(donorEmail, recipientEmail, amount)
  }

  async function addDonation(toInput) {
    const response = await fetch("/api/donations/insert", {
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

  if (charities.length > 0) isLoading = false;

  function onChange(e) {
    setAmount(e.target.value)
    console.log(e.target.value)
  }


  function giftaidChange(e) {
    if (isSelected) {
      updateSelected(false)
      setGiftAid(false)
    }
    else {
      updateSelected(true)
      setGiftAid(true)
    }
  }

  function anonymityChange(e) {
    if (isSelected1) {
      updateSelected1(false)
      setAnonymity("full")
    }
    else {
      updateSelected1(true)
      setAnonymity("none")
    }
  }

  function makeDonation(e) {
    e.preventDefault();
    //upDateProjectId(e.target.value)
    //setAllocation(true)
    if(Number(e.target.value)) {
    console.log(e.target.value)
    let donation = {
      fk_donor_id: donorid, fk_recipient_id: e.target.value,
      donation_amount: amount,
      anonymity: anonymity,
      giftaid: giftAid
    };
    upDateRecipientId(e.target.value);

    {
      if (window.confirm('Donate to this charity? Payment will be processed by admins as soon as possible. Please be aware that if you choose to make an anonymous donation gift aid can not be claimed by the Charity')) {
        {
          setDonation(true);
          console.log(donation)
          console.log(donorid)
          console.log(e.target.value)
          console.log(e.target.name)
          console.log(donorEmail)
          console.log(amount)
          let recipientmail = e.target.name
          console.log(recipientmail)
          updateRecipientEmail(e.target.name)
          addDonation(donation)
          emailDonation(donorEmail, recipientmail, amount)

        }
      };
    }
    }
    

    //{ donate === true ? addDonation(donation) : console.log('Did not allocate') }
    setMessage("Funds allocated to project")
  }


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
              </TableRow>
            </TableHead>
            <TableBody>
              {charities?.map(charities =>
                <TableRow key={charities.pk_user_id}>
                  {charities.orgname === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{charities.orgname}</TableCell>}
                  {!charities.user_statement === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{charities.user_statement}</TableCell>}
                  {!charities.user_photo === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre"><img src={process.env.PUBLIC_URL + '/pictures/' + charities.user_photo} width="100px" height="100px" /></TableCell>}
                  {!charities.user_video === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={charities.user_video}>Video</Nav.Link></TableCell>}
                  {!charities.user_url === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={charities.user_url}>Website</Nav.Link></TableCell>}
                  <TableCell align="centre" ><div className="form-group">
                    <label>Donation Amount:</label>
                    <input type="double" placeholder="Enter Amount" name="donation_amount" onChange={onChange} className="form-control" />
                  </div></TableCell>
                  <TableCell>
                    <label for="subscribeNews">Giftaid</label>
                    <row><input type="checkbox" id="subscribeNews" name="giftaid" checked={isSelected} onChange={giftaidChange} /></row>
                  </TableCell>
                  <TableCell><label> Visible Donation</label>
                    <row><input type="checkbox" name="anonymity" checked={isSelected1} onChange={anonymityChange} /></row> </TableCell>
                  <TableCell align="centre" ><Button variant="success" value={charities.pk_recipient_id} name={charities.email} onClick={makeDonation} >Donate</Button></TableCell>
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


class DonorCharities extends React.Component {



  constructor(props) {
    super(props);
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.state = {
      currentPage: "DonorCharities",
      userid: this.userData.userid,
      username: this.userData.username,
      usertype: this.userData.usertype
    };
  }


  render() {
    console.log(this.state)
    if (this.state.usertype == 1) {
      return (
        <>
          <NavBarDonor data={this.state} />
          <DonorCharitiesList data={this.state} />
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
  <DonorCharities />,
  document.getElementById('root')
);

export default DonorCharities;