import NavBarCharity from './NavBarCharity';
import React, { Component } from "react";
//import AddEmployee from "./Components/AddEmployee";
//import { Route, BrowserRouter as Router } from "react-router-dom";
//import Table from "./Components/Table";
//import App from './App';
//import background from './charitybackground.jfif';
import ReactDOM from 'react-dom';


import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Nav,  Button } from 'react-bootstrap'


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

function CharityDonationsList() {

  const classes = useStyles();

  const [recipients, upDateRecipients] = React.useState([]);
  const [details, upDateDetails] = React.useState([]);
  const [name, updateName] = React.useState([]);
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
  const [addressData, updateAddressData] = React.useState([]);
  let isLoading = true;
  console.log(nameData)

  async function getCharityDetails() {
    let responseUser = await fetch('/api/recipients/pathbyuserid/' + userData[0].userid);
    let userbody = await responseUser.json();
    console.log(userbody)
    let userid = userData[0].userid
    UpdateUserId(userData[0].userid)
    let responseName = await fetch('/api/name/pathbyuserid/' + userData[0].userid);
    let namebody = await responseName.json();
    let nameid = namebody[0].pk_name_id
    let responseName1 = await fetch('/api/name/pathbynameid/' + nameid);
    let namebody1 = await responseName1.json();
    updateNameData(namebody1)
    let responseAddress = await fetch('/api/address/pathbyuserid/' + userData[0].userid);
    let addressbody = await responseAddress.json();
    let addressid = addressbody[0].pk_address_id
    let responseAddress1 = await fetch('/api/address/pathbyaddressid/' + addressid);
    let addressbody1 = await responseAddress1.json();
    updateAddressData(addressbody1)
    console.log(addressbody1)

  }


  async function getDonations() {
    let responseRecipient = await fetch('/api/recipients/pathbyuserid/' + userData[0].userid);
    let recipientbody = await responseRecipient.json();
    console.log(recipientbody)
    let recipientid = recipientbody[0].pk_recipient_id
    upDateRecipientId(recipientbody[0].pk_recipient_id);
    let responseDonations = await fetch('/api/donationsrecords/pathbyrecipientid/' + recipientbody[0].pk_recipient_id);
    let donationsList = await responseDonations.json();
    console.log(donationsList)
    upDateDonations(donationsList)
  }



  if (firstLoad) {
    getDonations();
    getCharityDetails();
    setLoad(false);
  }

  if (donations.length > 0) isLoading = false;

  function onChange(e) {
    setAmount(e.target.value)
    console.log(e.target.value)
  }




  function printDocument() {
    window.print()

      
      


  }


  return (
    <div className={classes.paper}>
      {isLoading ? (
        <h4>No donations recieved</h4>
      ) : (
        <TableContainer id="pdfdiv"
          style={{ width: "80%", margin: "0 10px" }}
          component={Paper}
        >
          <h3 className={classes.paper}>Antos Charity Management</h3>
          <h4 className={classes.paper}>Donation Statement</h4>
          <Table className={classes.table}>
            <TableRow className={classes.paper}><b>{nameData.orgname}</b></TableRow>
            <TableRow>
              {(addressData.buildingname !== null) && <TableCell align="centre">{addressData.buildingname},</TableCell>}
              {(addressData.address_line1 !== null) && <TableCell align="centre">{addressData.address_line1},</TableCell>}
              {(addressData.address_line2 !== null) && <TableCell align="centre">{addressData.address_line2},</TableCell>}
              {(addressData.area !== null) && <TableCell align="centre">{addressData.area},</TableCell>}
              {(addressData.city !== null) && <TableCell align="centre">{addressData.city},</TableCell>}
              {(addressData.county !== null) && <TableCell align="centre">{addressData.county},</TableCell>}
              {(addressData.postcode !== null) && <TableCell align="centre">{addressData.postcode}</TableCell>}
            </TableRow>
          </Table>
          <br></br>
          <h4 className={classes.paper}>Donations</h4>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="centre">Donor Name</TableCell>
                <TableCell align="centre">Donor Address</TableCell>
                <TableCell align="centre">Donation Amount</TableCell>
                <TableCell align="centre">Gift Aid</TableCell>
                <TableCell align="centre">Anonymous donation</TableCell>
                <TableCell align="centre">Donation Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donations?.map(donations =>
                <TableRow key={donations.pk_donation_id}>
                  {donations.anonymity == "full" ? <TableCell align="centre">Anonymous</TableCell> : <TableCell align="centre">{donations.prefix} {donations.firstname} {donations.middlename} {donations.suffix}</TableCell>}
                  {donations.anonymity == "full" ? <TableCell align="centre">Anonymous</TableCell> : <TableCell align="centre">{donations.buildingname} {donations.address_line1} {donations.address_line2} {donations.area} {donations.city} {donations.county} {donations.postcode}</TableCell>}
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





  function printDocument() {
    window.print()
  }




  return (
    <div className={classes.paper}>

      {isLoading ? (
        <h4>No allocations made</h4>
      ) : (
        <TableContainer id="pdfdiv"
          style={{ width: "80%", margin: "0 10px" }}
          component={Paper}
        >
          <h4 className={classes.paper}>Allocations</h4>
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
              Print Statement</Button>
          </Table>
        </TableContainer>
      )}
      <br></br>
    </div>
  );
}

class CharityStatement extends React.Component {



  constructor(props) {
    super(props);
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.state = {
      currentPage: "CharityStatement",
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
          <CharityDonationsList data={this.state} />
          <CharityAllocationsList data={this.state} />
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
  <CharityStatement />,
  document.getElementById('root')
);

export default CharityStatement;