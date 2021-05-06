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
import { Nav } from 'react-bootstrap'

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

export default function DonorsList() {
  const classes = useStyles();


  const [donators, upDateDonators] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  let isLoading = true;

  async function sampleFunc() {
    let response = await fetch("/api/donators/");
    let donators = await response.json();
    upDateDonators(donators);   
  }

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  if (donators.length > 0) isLoading = false;

 



  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <GroupIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Donors using Acons Charity Management
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
                <TableCell align="centre">Donor Name</TableCell>
                <TableCell align="centre">About Donor</TableCell>
                <TableCell align="centre">Photo</TableCell>
                <TableCell align="centre">Video</TableCell>
                <TableCell align="centre">Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donators?.map(donators =>  
              (donators.privacy_level==='none' && 
                <TableRow key={donators.pk_user_id}>
                  <TableCell align="centre"><b>{donators.firstname}{donators.middlename}{donators.lastname}</b></TableCell>
                  {donators.user_statement === null ?  <TableCell></TableCell> : <TableCell align="centre">{donators.user_statement}</TableCell>}
                  {donators.user_photo === null ?   <TableCell></TableCell> : <TableCell align="centre"><img src={process.env.PUBLIC_URL + '/pictures/' + donators.user_photo} width="100px" height="100px" /></TableCell> }
                  {donators.user_video === null ?  <TableCell></TableCell> : <TableCell align="centre" ><Nav.Link href={donators.user_video}>Video</Nav.Link></TableCell>}
                  {donators.user_url === null ?  <TableCell></TableCell> : <TableCell align="centre" ><Nav.Link href={donators.user_url}>Website</Nav.Link></TableCell>}
                </TableRow>)
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
            <br></br>
      <h2>Login or Register your Charity to connect with Donors like these</h2>
    </div>
  );
}

/*

<TableBody>"
{recipients?.map(recipients => <div key={recipients.pk_recipient_id}>
{details?.map(details => <div key={details.pk_details_id}>
  {name?.map(name => <div key={name.pk_name_id}>
    {details.fk_user_id === recipients.fk_user_id && name.fk_user_id === recipients.fk_user_id ?
  <TableRow key={name.orgname}>
    <TableCell align="centre">{name.orgname}</TableCell>
    <TableCell align="centre">{details.user_statement}</TableCell>
    <TableCell align="centre">{details.user_photo}</TableCell>
    <TableCell align="centre">{details.user_video}</TableCell>
    <TableCell align="centre" ><Nav.Link href={details.user_url} align="centre">Website</Nav.Link></TableCell>
  </TableRow>
  : null}
</div>
)} </div>
)} </div>
)}
</TableBody>

*/