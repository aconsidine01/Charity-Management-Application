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

function DonorDonationsList() {

  const classes = useStyles();

  const [recipients, upDateRecipients] = React.useState([]);
  const [details, upDateDetails] = React.useState([]);
  const [name, upDateName] = React.useState([]);
  const [donations, upDateDonations] = React.useState([]);
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
  const [userData, UpdateUserData] = React.useState([JSON.parse(localStorage.getItem('user'))]);
  let isLoading = true;
  console.log(userData)


  async function getDonations() {
    let responseDonor = await fetch('/api/donors/pathbyuserid/' + userData[0].userid);
    console.log(responseDonor)
    let donorbody = await responseDonor.json();
    let donorid = donorbody[0].pk_donor_id
    console.log(donorbody)
    console.log(donorbody[0].pk_donor_id)
    upDateDonorId(donorbody[0].pk_donor_id);
    let responseDonations = await fetch('/api/donationsrecords/pathbydonorid/' + donorbody[0].pk_donor_id);
    let donationsList = await responseDonations.json();
    console.log(donationsList)
    upDateDonations(donationsList)
  }



  if (firstLoad) {
    getDonations();
    setLoad(false);
  }

  if (donations.length > 0) isLoading = false;

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




  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <GroupIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Donations made by {userData[0].username}
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
                <TableCell align="centre">Recipient Name</TableCell>
                <TableCell align="centre">Donation Amount</TableCell>
                <TableCell align="centre">Gift Aid</TableCell>
                <TableCell align="centre">Anonymous donation</TableCell>
                <TableCell align="centre">Donation Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donations?.map(donations =>
                <TableRow key={donations.pk_donation_id}>
                  {donations.fk_recipient_id === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{donations.orgname}</TableCell>}
                  {!donations.donation_amount === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">£{donations.donation_amount}</TableCell>}
                  {donations.giftaid === true ? <TableCell align="centre">Yes</TableCell> : <TableCell align="centre">No</TableCell>}
                  {donations.anonymity == "full" ? <TableCell align="centre" >Yes</TableCell> : <TableCell align="centre" >No</TableCell>}
                  {!donations.donation_datetime === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" >{donations.donation_datetime}</TableCell>}
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


class DonorDonations extends React.Component {



  constructor(props) {
    super(props);
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.state = {
      currentPage: "MyDonations",
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
          <DonorDonationsList data={this.state} />
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
  <DonorDonations />,
  document.getElementById('root')
);

export default DonorDonations;