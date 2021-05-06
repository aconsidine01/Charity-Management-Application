import React, { Component } from "react";
import linkedin from './linkedin.jfif';
import qublogo from './qublogo.png';
import './footer.css';

//const FooterPage = () => {
    class Footer extends Component {

        render() {
    return (
        <div>
            <footer class="footer" >
                <a href="https://www.qub.ac.uk/" ><img src={qublogo} width="50" height="50" class="rounded float-left"></img></a>
                    <span class="rounded float-right">&emsp;</span>
                    <a href="https://www.linkedin.com/in/anthony-considine-03486056/" ><img src={linkedin} width="25" height="25" class="rounded float-right"></img></a>
                    <span class="rounded float-right"> &copy; 2021 AnthonyConsidine &emsp; &emsp;</span>
            </footer>
        </div>
    );
}

    }

    export default Footer;