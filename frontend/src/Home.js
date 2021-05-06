import TopNavBar from './TopNavBar';
import React  from "react";

//import Table from "./Components/Table";
//import App from './App';
import background from './charitybackground.jfif';
import ReactDOM from 'react-dom';

import HomePageCharities from './Components/HomePageCharities';

import Footer from './Footer';


class Main extends React.Component {
    render() {
        return (
            <div class="page-header" >
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                <div class="jumbotron" style={{ backgroundImage: `url(${background})` }}>
                    <div class="container">
                        <h2 class="display-3">
                            <p class="font-weight-bold">Helping others through Life</p>
                            <p class="font-weight-bold">Featuring the below Charities</p>
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}




class Home extends React.Component {




        constructor(props) {
            super(props);
            this.state = {
                currentPage: "Home"
            };
          }

          componentWillUpdate() {
            sessionStorage.clear();
            localStorage.clear();
        }

    render() {
        return (
            <>
                <TopNavBar data={this.state}/>
                <Main />
                <HomePageCharities />
                
                <Footer />
            </>
        )
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);

export default Home;