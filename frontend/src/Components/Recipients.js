import React, { Component } from "react";
import ReactDOM from 'react-dom';
import logo from '../acons3.png';
import Details from './Details';

class Recipients extends React.Component {

    state = {
        isLoading: true,
        groups: []
    };

    async componentDidMount() {
        const response = await fetch('/api/recipients/');
        const body = await response.json();
        const response1 = await fetch('/api/details/');
        const body1 = await response1.json();
        this.setState({ recipients: body, details: body1, isLoading: false });
    }

    /*async componentDidMount() {
        const response1 = await fetch('/api/details/');
        const body1 = await response1.json();
        this.setState({ details: body1, isLoading: false });
    }*/




    render() {
        const { recipients, details, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-intro">
                    <h2>Charity List</h2>
                    {recipients.map(recipients =>
                        <div key={recipients.pk_recipient_id}> {details.map(details =>
                            <div key={details.pk_details_id}>
                                <td>{details.fk_user_id===recipients.fk_user_id && recipients.privacy_level==='none'? details.fk_user_id: null}</td>
                            </div> 
                        )}
                        </div> 
                    )}
                </div>
            </header>
        </div>
    );
    /*return (
        <div className="App-intro">
        <h2>Recip List</h2>
        {recipients.map(recipients =>        {details.map(details =>
            <div key={details.pk_details_id}>
                <td>{details.fk_user_id == recipients.fk_user_id? details.fk_user_id: "No"}</td>
                <td>"Hello"</td>
            </div> 
        )}
        )}
    </div>
    );*/

    }
}

export default Recipients;