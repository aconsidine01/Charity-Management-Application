import React from "react";
import '../Components/homepagecharities.css';

class UserHomePageDonors extends React.Component {


    state = {
        isLoading: true,
        groups: [],
        photoPath: ""
    };

    async componentDidMount() {

        const response = await fetch('/api/charities/');
        const body = await response.json();
        this.setState({ charities: body, isLoading: false });

    }



    render() {
        const { charities, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (


            <div class="Container">
                <h2>Charity List</h2>
                <div class="row">
                    {charities.map(charities =>
                        <div key={charities.pk_user_id}>
                            <td>
                                <div class="col-md-4" >
                                    <h2>{charities.orgname}</h2>
                                    <a class="nav-item nav-link" href={charities.user_url}><img src={process.env.PUBLIC_URL + '/pictures/' + charities.user_photo}
                                        width="500px" height="500px" /></a>
                                        <a class="btn btn-secondary btn-sm" href="/donorcharities" role="button">View details &raquo;</a>
                                </div>
                            </td>
                        </div>
                    )}
                </div>
            </div>
        );

    }
}

export default UserHomePageDonors;