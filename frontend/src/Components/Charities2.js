import TopNavBar from '../TopNavBar';
import React, { Component } from "react";
//import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
//import Table from "./Components/Table";
//import App from './App';
//import background from './charitybackground.jfif';
import ReactDOM from 'react-dom';
import Recipients from "../Components/Recipients";
import CharitiesList from '../Components/CharitiesList';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import Home from '../Home';





class Charities2 extends React.Component {




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
                <CharitiesList />
                <Footer />
            </>
        )
    }
}

ReactDOM.render(
    <Charities2 />,
    document.getElementById('root')
);

export default Charities2;