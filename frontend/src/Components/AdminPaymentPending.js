import NavBarAdmin from './NavBarAdmin';
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

function ProcessedPaymentsList() {

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
    const [nameData, updateNameData] = React.useState([]);
    const [unprocessedPayments, updateUnprocessed] = React.useState([]);
    let isLoading = true;
    console.log(userData)
  
  
    async function getUnproccessedPayments() {
      let responsePayments = await fetch('api/donationsrecords/unprocessed');
      let paymentsbody = await responsePayments.json();
      console.log(paymentsbody)
      updateUnprocessed(paymentsbody);
    }
  
    async function updateDonation(toInput) {
        const response = await fetch("/api/donations/update", {
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

    
    function processPayment(e) {
        e.preventDefault();
        let processrequest = {
            pk_donation_id: e.target.value,
            processed: true
        };
        console.log(processrequest)
        updateDonation(processrequest)
        setMessage("Donation id " + e.target.value + " processed, please refresh page")
    }
  
  
    if (firstLoad) {
      getUnproccessedPayments();
      setLoad(false);
    }
  
    if (unprocessedPayments.length > 0) isLoading = false;
  
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
  
  
    
    function printDocument() {
      window.print()
    }
  
  
  
    return (
      <div className={classes.paper}>
  
  
        {isLoading ? (
          <h2>No payments pending</h2>
        ) : (
          <TableContainer
            style={{ width: "80%", margin: "0 10px" }}
            component={Paper}
          >
            <h3 className={classes.paper}>Antos Charity Management</h3>
            <h4 className={classes.paper}>Pending Payments</h4>
            <br></br>
            <h4 className={classes.paper}>{message}</h4>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="centre"><b>Donor Name</b></TableCell>
                  <TableCell align="centre"><b>Donor Sort Code</b></TableCell>
                  <TableCell align="centre"><b>Donor Acccount Number</b></TableCell>
                  <TableCell align="centre"><b>Recipient Name</b></TableCell>
                  <TableCell align="centre"><b>Recipient Sort Code</b></TableCell>
                  <TableCell align="centre"><b>Recipient Acccount Number</b></TableCell>
                  <TableCell align="centre"><b>Donation Amount</b></TableCell>
                  <TableCell align="centre"><b>Donation Date</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {unprocessedPayments?.map(unprocessedPayments =>
                  <TableRow key={unprocessedPayments.pk_donation_id}>
                    {unprocessedPayments.donorname === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{unprocessedPayments.donorname}</TableCell>}
                    {unprocessedPayments.donorsortcode === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{unprocessedPayments.donorsortcode}</TableCell>}
                    {unprocessedPayments.donoraccountnumber === null ? <TableCell align="centre">Yes</TableCell> : <TableCell align="centre">{unprocessedPayments.donoraccountnumber}</TableCell>}
                    {unprocessedPayments.recipientname === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{unprocessedPayments.recipientname}</TableCell>}
                    {unprocessedPayments.recipientsortcode === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{unprocessedPayments.recipientsortcode}</TableCell>}
                    {unprocessedPayments.recipientaccountnumber === null ? <TableCell align="centre">Yes</TableCell> : <TableCell align="centre">{unprocessedPayments.recipientaccountnumber}</TableCell>}
                    {unprocessedPayments.donation_amount === null ? <TableCell align="centre">Yes</TableCell> : <TableCell align="centre">{unprocessedPayments.donation_amount}</TableCell>}
                    {unprocessedPayments.donation_datetime === null ? <TableCell align="centre">Yes</TableCell> : <TableCell align="centre">{unprocessedPayments.donation_datetime}</TableCell>}
                    <TableCell align="centre" ><Button variant="success"  value={unprocessedPayments.pk_donation_id} onClick={processPayment} >Mark Processed</Button></TableCell>
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

class AdminPaymentPending extends React.Component {



  constructor(props) {
    super(props);
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.state = {
      currentPage: "DonorStatement",
      userid: this.userData.userid,
      username: this.userData.username,
      usertype: this.userData.usertype
    };
  }


  render() {
    console.log(this.state)
    if (this.state.usertype == 0) {
      return (
        <>
          <NavBarAdmin data={this.state} />
          <ProcessedPaymentsList data={this.state} />
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
  <AdminPaymentPending />,
  document.getElementById('root')
);

export default AdminPaymentPending;