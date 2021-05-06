import NavBarAdmin from './NavBarAdmin';
import React from "react";


import ReactDOM from 'react-dom';
import Footer from '../Footer';


import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Nav, Button } from 'react-bootstrap'

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



function LockedAccountsList() {
    const classes = useStyles();


    const [accounts, updateAccounts] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);
    let isLoading = true;

    async function lockedAccounts() {
        let response = await fetch("/api/user/");
        let accounts = await response.json();
        updateAccounts(accounts);
    }

    async function resetfailcount(toInput) {
        const response = await fetch("/api/user/update", {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json"
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            body: JSON.stringify(toInput) // body data type must match "Content-Type" header
        });
    }

    function unlockAccount(e) {
        e.preventDefault();
        let unlockrequest = {
            pk_user_id: e.target.value,
            password: e.target.name,
            fail_count: 0
        };
        console.log(unlockrequest)
        resetfailcount(unlockrequest)
    }

    if (firstLoad) {
        lockedAccounts();
        setLoad(false);
    }

    if (accounts.length > 0) isLoading = false;





    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <GroupIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Locked accounts
      </Typography>

            {isLoading ? (
                <CircularProgress />
            ) : (
                <TableContainer
                    style={{ width: "80%", margin: "0 10px" }}
                    component={Paper}
                >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="centre"><b>Username</b></TableCell>
                                <TableCell align="centre"><b>Email</b></TableCell>
                                <TableCell align="centre"><b>Password</b></TableCell>
                                <TableCell align="centre"><b>Registration Status</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {accounts?.map(accounts =>
                            (accounts.fail_count >= 3 &&
                                <TableRow key={accounts.pk_user_id}>
                                    <TableCell align="centre"><b>{accounts.username}</b></TableCell>
                                    {accounts.email === null ? <TableCell></TableCell> : <TableCell align="centre">{accounts.email}</TableCell>}
                                    {accounts.password === null ? <TableCell></TableCell> : <TableCell align="centre">{accounts.password}</TableCell>}
                                    {accounts.reg_approval === null ? <TableCell></TableCell> : <TableCell align="centre" >{accounts.reg_approval}</TableCell>}
                                    <TableCell align="centre" ><Button variant="success" name={accounts.password} value={accounts.pk_user_id} onClick={unlockAccount} >Unlock Account</Button></TableCell>
                                </TableRow>)
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}


class LockedAccounts extends React.Component {




    constructor(props) {
        super(props);
        this.state = {
            currentPage: "LockedAccounts"
        };
    }

    // get user details from session storage
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        console.log(this.userData)

        if (localStorage.getItem('user')) {
            this.setState({
                userid: this.userData.userid,
                username: this.userData.username,
                usertype: this.userData.usertype,
                loggedin: true
            })
        } else {
            this.setState({
                userid: '',
                username: '',
                usertype: '',
                loggedin: false
            })
        }

    }


    render() {
        const { usertype } = this.state;
        console.log(usertype)


        if (usertype == 0) {
            return (
                <>
                    <NavBarAdmin data={this.state} />
                    <LockedAccountsList />
                    <Footer />
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
    <LockedAccounts />,
    document.getElementById('root')
);

export default LockedAccounts;