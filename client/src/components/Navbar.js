import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { connect } from 'react-redux';
import { logout } from '../actions/UserActions'
import PropTypes from 'prop-types'


class Navbar extends Component {

    handleClick = e => {
        this.props.logout();
    }
    render() {
        return (
            <div>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="title button" color="inherit">
                            <Button component={Link} to="/main">inQRy</Button>
                        </Typography>
                        <Typography variant="button" color="inherit">
                            <Button component={Link} to="/main/records">My Records</Button>
                        </Typography>
                        <Typography variant="button" color="inherit">
                            <Button component={Link} to="/main/data">Data</Button>
                        </Typography>
                        <Typography variant="button" color="inherit">
                            <Button component={Link} to="/main/user">User</Button>
                        </Typography>
                        <Typography variant="button" color="inherit">
                            <Button component={Link} to="/" onClick={this.handleClick.bind(this)}>Logout</Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { logout })(Navbar);