import React from "react";
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
import { Nav} from 'react-bootstrap'

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

export default function CharitiesList() {
  const classes = useStyles();

  const [charities, upDateCharities] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  async function sampleFunc() {
    let response = await fetch("/api/charities/");
    let charities = await response.json();
    upDateCharities(charities);
  }

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  if (charities.length > 0) isLoading = false;

 



  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <GroupIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Charities using Acons Charity Management
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
                <TableCell align="centre">Name</TableCell>
                <TableCell align="centre">Charity Summary</TableCell>
                <TableCell align="centre">Photo</TableCell>
                <TableCell align="centre">Video</TableCell>
                <TableCell align="centre">Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {charities?.map(charities => 
                <TableRow key={charities.pk_user_id}>
                  {charities.orgname === null  ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{charities.orgname}</TableCell>}
                  {!charities.user_statement === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre">{charities.user_statement}</TableCell>}
                  {!charities.user_photo === null ? <TableCell align="centre"></TableCell> : <TableCell align="centre"><img src={process.env.PUBLIC_URL + '/pictures/' + charities.user_photo} width="100px" height="100px" /></TableCell>}
                  {!charities.user_video === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={charities.user_video}>Video</Nav.Link></TableCell>}
                  {!charities.user_url === null ? <TableCell align="centre" ></TableCell> : <TableCell align="centre" ><Nav.Link href={charities.user_url}>Website</Nav.Link></TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <br></br>
      <h2>Login or Register to make a Donation</h2>
    </div>
  );
}

