import TopNavBar from './TopNavBar';
import React, { Component } from "react";
import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
//import Table from "./Components/Table";
//import App from './App';
import ReactDOM from 'react-dom';
import HomePageCharities from './Components/HomePageCharities';
import Footer from './Footer';
import Home from './Home';





class Charities extends React.Component {




        constructor(props) {
            super(props);
            this.state = {
                currentPage: "Charities"
            };
          }

    render() {
        return (
            <>
                <TopNavBar data={this.state}/>
                <HomePageCharities />
                <Footer />
            </>
        )
    }
}

ReactDOM.render(
    <Charities />,
    document.getElementById('root')
);

export default Home;