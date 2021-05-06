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


  const [firstLoad, setLoad] = React.useState(true);
  const [isSelected, updateSelected] = React.useState(true);
  const [isSelected1, updateSelected1] = React.useState(true);
  const [userData, UpdateUserData] = React.useState([JSON.parse(localStorage.getItem('user'))]);
  const [processedPayments, updateProcessed] = React.useState([]);
  let isLoading = true;
  console.log(userData)


  async function getProccessedPayments() {
    let responsePayments = await fetch('api/donationsrecords/processed');
    let paymentsbody = await responsePayments.json();
    console.log(paymentsbody)
    updateProcessed(paymentsbody);
  }



  if (firstLoad) {
    getProccessedPayments();
    setLoad(false);
  }

  if (processedPayments.length > 0) isLoading = false;



  
  function printDocument() {
    window.print()
  }



  return (
    <div className={classes.paper}>


      {isLoading ? (
        <h2>No payments processed</h2>
      ) : (
        <TableContainer
          style={{ width: "80%", margin: "0 10px" }}
          component={Paper}
        >
          <h3 className={classes.paper}>Antos Charity Management</h3>
          <h4 className={classes.paper}>Proccessed Payments</h4>
          <br></br>
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
                {processedPayments?.map(processedPayments =>
                  <TableRow key={processedPayments.pk_donation_id}>
                    {processedPayments.donorname === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{processedPayments.donorname}</TableCell>}
                    {processedPayments.donorsortcode === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{processedPayments.donorsortcode}</TableCell>}
                    {processedPayments.donoraccountnumber === null ? <TableCell align="centre">Yes</TableCell> : <TableCell align="centre">{processedPayments.donoraccountnumber}</TableCell>}
                    {processedPayments.recipientname === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{processedPayments.recipientname}</TableCell>}
                    {processedPayments.recipientsortcode === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{processedPayments.recipientsortcode}</TableCell>}
                    {processedPayments.recipientaccountnumber === null ? <TableCell align="centre">Yes</TableCell> : <TableCell align="centre">{processedPayments.recipientaccountnumber}</TableCell>}
                    {processedPayments.donation_amount === null ? <TableCell align="centre">Yes</TableCell> : <TableCell align="centre">{processedPayments.donation_amount}</TableCell>}
                    {processedPayments.donation_datetime === null ? <TableCell align="centre">Yes</TableCell> : <TableCell align="centre">{processedPayments.donation_datetime}</TableCell>}
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


class AdminPaymentProcessed extends React.Component {



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
  <AdminPaymentProcessed />,
  document.getElementById('root')
);

export default AdminPaymentProcessed;