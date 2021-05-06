import NavBarCharity from './NavBarCharity';
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
import axios from 'axios';  
import jsPDF from 'jspdf';   
//import './App.css';  
import html2canvas from 'html2canvas';  

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

function CharityAllocationsList() {

  const classes = useStyles();

  const [recipients, upDateRecipients] = React.useState([]);
  const [details, upDateDetails] = React.useState([]);
  const [name, upDateName] = React.useState([]);
  const [allocations, upDateAllocations] = React.useState([]);
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

  

  async function getAllocations() {
    let responseAllocations = await fetch('/api/allocationsrecords/pathbyuserid/' + userData[0].userid);
    let allocationsList = await responseAllocations.json();
    console.log(allocationsList)
    upDateAllocations(allocationsList)
  }



  if (firstLoad) {
    getAllocations();
    setLoad(false);
  }

  if (allocations.length > 0) isLoading = false;



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
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf");  
      });  
  } 


  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <GroupIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Allocations made by {userData[0].username}
        </Typography>

      {isLoading ? (
        <h4>No allocations made</h4>
      ) : (
        <TableContainer id="pdfdiv"
          style={{ width: "80%", margin: "0 10px" }}
          component={Paper}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="centre">Project Name</TableCell>
                <TableCell align="centre">Allocation Amount</TableCell>
                <TableCell align="centre">Allocation Datetime</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allocations?.map(allocations =>
                <TableRow key={allocations.pk_allocation_id}>
                  {allocations.project_name === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{allocations.project_name}</TableCell>}
                  {!allocations.allocation_amount === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">£{allocations.allocation_amount}</TableCell>}
                  {!allocations.allocation_datetime === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" >{allocations.allocation_datetime}</TableCell>}
                </TableRow>
              )}
            </TableBody>
            <br></br>
            <Button className="btn btn-primary btn-success btn-block" onClick={printDocument}>  
            Download Statement</Button> 
          </Table>
        </TableContainer>
      )}
      <br></br>
    </div>
  );
}


class CharityAllocations extends React.Component {



  constructor(props) {
    super(props);
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.state = {
      currentPage: "CharityAllocations",
      userid: this.userData.userid,
      username: this.userData.username,
      usertype: this.userData.usertype
    };
  }


  render() {
    console.log(this.state)
    if (this.state.usertype == 2) {
      return (
        <>
          <NavBarCharity data={this.state} />
          <CharityAllocationsList data={this.state} />
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
  <CharityAllocations />,
  document.getElementById('root')
);

export default CharityAllocations;