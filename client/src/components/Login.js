import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { login } from '../actions/UserActions'

import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'



class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log(new Date().toISOString().slice(0, 19).replace('T', ' '))

    }
    handleSubmit = e => {
        console.log("submitted")
        e.preventDefault()
        const creds = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(creds)
    }
    render() {
        if (this.props.isAuthenticated) {
            console.log("ONCE PLEASE")
            return <Redirect to={`/site/${localStorage.getItem("requestedLocationId")}`} />
        } else if (this.props.isFetching) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div>
                    <Container style={style}>
                        <div>
                            <h2>Login</h2>
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup>
                                <TextField id="email" label="Email" name="email" fullWidth required onChange={this.handleChange.bind(this)}/>
                            </FormGroup>
                            <FormGroup>
                                <TextField id="password" label="Password" type="password" name="password" fullWidth required onChange={this.handleChange.bind(this)}/>
                            </FormGroup>
                            <Button fullWidth type="submit" align="right">Login</Button>
                            <Button fullWidth align="right" component={Link} to="/register">Register</Button>
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

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    mostRecentSite: PropTypes.object,
    errorMessage: PropTypes.string
}

const mapStateToProps = (state) => ({
    isFetching: state.user.isFetching,
    isAuthenticated: state.user.isAuthenticated,
    mostRecentSite: state.user.mostRecentSite,
    errorMessage: state.user.errorMessage
})
        


export default connect(mapStateToProps, { login })(Login);