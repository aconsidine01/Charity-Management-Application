import TopNavBar from '../TopNavBar';
import React from "react";


import ReactDOM from 'react-dom';
import Footer from '../Footer';
import DonorsList from '../Components/DonorsList';





class Donors extends React.Component {




        constructor(props) {
            super(props);
            this.state = {
                currentPage: "Donors"
            };
          }

    render() {
        return (
            <>
                <TopNavBar data={this.state}/>
                <DonorsList />
                <Footer />
            </>
        )
    }
}

ReactDOM.render(
    <Donors />,
    document.getElementById('root')
);

export default Donors;