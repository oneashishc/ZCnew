import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    ...theme.mixins.gutters(),

  },
  heading: {
    padding: '0px',
  },
  innerRow: {
    border: 'none !important'
  },
  outerRow: {
    borderRight: '1px solid #e0e0e0'
  },
  para: {
    marginTop: '0px',
    marginBottom: '0px',
  }
});

function TrackerDetails(props) {
  const { classes, trackerDetails, trackerID, deviceID } = props;
  const data = trackerDetails
  
  return (
    <Paper className={classes.root}>
        <Typography className={classes.heading}>
          <p className={classes.para}>Tracker Details</p>
        </Typography>
        <Table className={classes.table}>
            
            <TableBody>


                      <TableRow>
                      <TableCell className={classes.innerRow} padding="dense">
                      Tracker ID: </TableCell><TableCell>{data.trackerID} 
                      </TableCell>
                      </TableRow>

                      <TableRow>
                      <TableCell className={classes.innerRow} padding="dense">
                      Device ID: </TableCell><TableCell>{data.deviceID} 
                      </TableCell>
                      </TableRow>


                      <TableRow>
                      <TableCell className={classes.innerRow} padding="dense">
                      Mac ID: </TableCell><TableCell>{data.macID} 
                      </TableCell>
                      </TableRow>

                      <TableRow>
                      <TableCell className={classes.innerRow} padding="dense">
                      Current Mode: </TableCell><TableCell>{data.currentMode}
                      </TableCell>
                      </TableRow>

                      <TableRow>
                      <TableCell className={classes.innerRow} padding="dense">
                      Current Angle: </TableCell><TableCell>{parseFloat(data.currentAngle).toFixed(2)}  deg
                      </TableCell>
                      </TableRow>

                      <TableRow>
                      <TableCell className={classes.innerRow} padding="dense">
                      Time Stamp: </TableCell><TableCell>{new Date(Number(data.timeStamp) * 1000).toLocaleDateString('en-US', {timeZone: 'America/Denver'})}-{new Date(Number(data.timeStamp) * 1000).toLocaleTimeString('en-US', {timeZone: 'America/Denver'})}
                      </TableCell>
                      </TableRow>

            </TableBody>
        </Table>  
    </Paper>
  );
}

TrackerDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrackerDetails);
