import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Charities2 from './Components/Charities2';
import Donors from './Components/Donors';
import Register from './Components/Register';
import Login from './Login';
import Logout from './Logout';
import HomeAdmin from "./Components/HomeAdmin";
import HomeDonor from "./Components/HomeDonor";
import HomeCharity from "./Components/HomeCharity";
import EditDetailsCharity from "./Components/EditDetailsCharity";
import EditDetailsDonor from "./Components/EditDetailsDonor";
import ProjectsAddCharity from "./Components/ProjectsAddCharity";
import DonorCharities from "./Components/DonorCharities";
import DonorDonations from "./Components/DonorDonations";
import CharityDonations from "./Components/CharityDonations";
import CharityAllocations from "./Components/CharityAllocations";
import CharityStatement from "./Components/CharityStatement";
import DonorStatement from "./Components/DonorStatement";
import AdminCharities from "./Components/AdminCharities";
import AdminDonors from "./Components/AdminDonors";
import AdminPaymentProcessed from "./Components/AdminPaymentProcessed";
import AdminPaymentPending from "./Components/AdminPaymentPending";
import LockedAccounts from "./Components/LockedAccounts";

class App extends Component {

  
  constructor(props) {
    super(props);
          this.state = {
        currentPage: "",
        username: '',
        password: '',
        email: "",
        isLoading: true,
        hasLoginFailed: false,
        showSuccessMessage: false,
        users: [],
        userid: null,
        usertype: null

    }
  }
  
  
  render() {
      return (
      <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/charities" component={Charities2}>
            <Charities2 />
          </Route>
          <Route exact path="/donors" component={Donors}>
            <Donors />
          </Route>
          <Route exact path="/register" component={Register}>
            <Register />
          </Route>
          <Route exact path="/login" component={Login}>
            <Login />
          </Route>
          <Route exact path="/logout" component={Logout}>
            <Logout />
          </Route>
          <Route exact path="/homeadmin" component={HomeAdmin}>
            <HomeAdmin/>
          </Route>
          <Route exact path="/homedonor" component={HomeDonor}>
            <HomeDonor/>
          </Route>
          <Route exact path="/homecharity" component={HomeCharity}>
            <HomeCharity/>
          </Route>
          <Route exact path="/editdetailscharity" component={EditDetailsCharity}>
            <EditDetailsCharity/>
          </Route>
          <Route exact path="/editdetailsdonor" component={EditDetailsDonor}>
            <EditDetailsDonor/>
          </Route>
          <Route exact path="/projects" component={ProjectsAddCharity}>
            <ProjectsAddCharity/>
          </Route>
          <Route exact path="/donorcharities" component={DonorCharities}>
            <DonorCharities/>
          </Route>
          <Route exact path="/donordonations" component={DonorDonations}>
            <DonorDonations/>
          </Route>
          <Route exact path="/charitydonations" component={CharityDonations}>
            <CharityDonations/>
          </Route>
          <Route exact path="/charityallocations" component={CharityAllocations}>
            <CharityAllocations/>
          </Route>
          <Route exact path="/charitystatement" component={CharityStatement}>
            <CharityStatement/>
          </Route>
          <Route exact path="/donorstatement" component={DonorStatement}>
            <DonorStatement/>
          </Route>
          <Route exact path="/admincharities" component={AdminCharities}>
            <AdminCharities/>
          </Route>
          <Route exact path="/admindonors" component={AdminDonors}>
            <AdminDonors/>
          </Route>
          <Route exact path="/lockedaccounts" component={LockedAccounts}>
            <LockedAccounts/>
          </Route>
          <Route exact path="/adminprocessed" component={AdminPaymentProcessed}>
            <AdminPaymentProcessed/>
          </Route>
          <Route exact path="/adminpending" component={AdminPaymentPending}>
            <AdminPaymentPending/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
