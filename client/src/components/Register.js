import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register, checkIn } from '../actions/UserActions'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'

class Register extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log(new Date().toLocaleString())
        console.log(this.state.firstname)
    }
    handleSubmit = e => {
        console.log("registered")
        e.preventDefault()
        const creds = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }

        this.props.register(creds)
    }
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to={`/site/${localStorage.getItem("requestedLocationId")}`}></Redirect>
        } else if (this.props.isFetching) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div>
                    <Container style={style}>
                        <div>
                            <h2>Register</h2>
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup>
                                <TextField id="firstname" name="firstname" label="First Name" fullWidth required onChange={this.handleChange.bind(this)}/>
                            </FormGroup>
                            <FormGroup>
                                <TextField id="lastname" name="lastname" label="Last Name" fullWidth required onChange={this.handleChange.bind(this)}/>
                            </FormGroup>
                            <FormGroup>
                                <TextField id="email" name="email" label="Email" fullWidth required onChange={this.handleChange.bind(this)}/>
                            </FormGroup>
                            <FormGroup>
                                <TextField id="password" name="password" type="password" label="Password" fullWidth required onChange={this.handleChange.bind(this)}/>
                            </FormGroup>
                            <Button fullWidth type="submit" align="right">Register</Button>
                            <Button fullWidth align="right" component={Link} to="/login">Login</Button>

                        </form>
                    </Container>
                </div>
            );
        }
    }
}

const style = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    errorMessage: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.user.isFetching,
        isAuthenticated: state.user.isAuthenticated,
        mostRecentSiteId: state.user.mostRecentSiteId,
        errorMessage: state.user.errorMessage
    };
}

export default connect(mapStateToProps, { register, checkIn })(Register);