import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getEntries } from '../actions/RecordsActions'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
  

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
const rows = [
createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
createData('Eclair', 262, 16.0, 24, 6.0),
createData('Cupcake', 305, 3.7, 67, 4.3),
createData('Gingerbread', 356, 16.0, 49, 3.9),
];
//const classes = useStyles();

class Records extends Component {
    componentDidMount() {
        this.props.getEntries({ id: localStorage.getItem('user_id') })
    }
    render() {
        return (
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Entry</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.entries.map((row) => (
                  <TableRow key={row.entry_id}>
                    <TableCell component="th" scope="row">
                      {row.entry_id}
                    </TableCell>
                    <TableCell align="right">{row.location_id}</TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
    }
}

Records.propTypes = {
    getEntries: PropTypes.func.isRequired,
    entries: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    entries: state.records.entries
})

export default connect(mapStateToProps, { getEntries })(Records);