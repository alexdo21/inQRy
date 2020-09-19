import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { checkIn } from '../actions/UserActions'
import  Container  from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import '../css/CheckIn.css'
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';




class CheckIn extends Component {
    state = {
        redirect: false
    }

    async componentDidMount() {
        //console.log(this.props.userId)
        //console.log(this.props.mostRecentSiteId)

        //await this.props.saveSiteId(Number(this.props.match.params.site))
        
        localStorage.setItem('requestedLocationId', this.props.match.params.site)

        
        //console.log(this.props.mostRecentSiteId)


        // if (this.props.mostRecentSiteId === -1) {
        //     console.log("saving id...")
        //     await this.props.saveSiteId(this.props.match.params)
        // }
       
        console.log("checking in to " + typeof localStorage.getItem("requestdLocationId"))

        await this.props.checkIn({
            userId: localStorage.getItem("user_id"),
            locationId: localStorage.getItem("requestedLocationId"),
            time: new Date().toISOString().slice(0, 19).replace('T', ' ')
        })
        
        this.id = setTimeout(() => this.setState({ redirect: true }), 5000)


    }
    
    componentWillUnmount() {
        clearTimeout(this.id)
    }
    render() {
        if (this.props.isAuthenticated) {
            console.log("MADE IT")
            if (this.state.redirect) {
                return <Redirect to='/main' />
            } else {
                return (
                    <Container>
                        <Paper elevation={5}>
                            <div style={style}>
                                <Box pt={5}>
                                    <Typography variant="h1" >
                                        Check In
                                    </Typography>
                                </Box>
                                <Box mt={15}>
                                    <Typography variant="h2" gutterBottom>
                                        <strong>{localStorage.getItem("user_firstname")}</strong> has checked into <strong>{this.props.mostRecentSite.locationName}</strong>
                                    </Typography>
                                </Box>
                            </div>
                        </Paper>
                    </Container>
                )
            }
            
        }
        else {
            // console.log(this.props.userId)
            // console.log(this.props.mostRecentSiteId)
            // console.log(this.props.isAuthenticated)
            console.log("TWICE PLEASE")
            return <Redirect to='/login' />
        }
        
    }
}

const style = {
    height: '100vh',
    width: '100%',
    textAlign: 'center'
}

CheckIn.propTypes = {
    checkIn: PropTypes.func.isRequired,
    saveSiteId: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    isCheckedIn: PropTypes.bool,
    user: PropTypes.object,
    mostRecentSite: PropTypes.object,
    errorMessage: PropTypes.string
}

const mapStateToProps = state => ({
    isFetching: state.user.isFetching,
    isAuthenticated: state.user.isAuthenticated,
    isCheckedIn: state.user.isCheckedIn,
    user: state.user.user,
    mostRecentSite: state.user.mostRecentSite,
    errorMessage: state.user.errorMessage
})


export default connect(mapStateToProps, { checkIn })(CheckIn);