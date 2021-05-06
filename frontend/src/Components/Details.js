import React, { Component } from "react";
import ReactDOM from 'react-dom';
import logo from '../acons3.png';

class Details extends React.Component {

    state = {
        isLoading: true,
        groups: []
    };

    async componentDidMount() {
        const response = await fetch('/api/details/');
        const body = await response.json();
        this.setState({ details: body, isLoading: false });
    }

    




    render() {
        const { details, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-intro">
                        <h2>Recip List</h2>
                        {details.map(details =>
                            <div key={details.pk_details_id}>
                                <td>{details.pk_recipient_id==1? "Hello": "No"}</td>
                            </div> 
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

export default Details;