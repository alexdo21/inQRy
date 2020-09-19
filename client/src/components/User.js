import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class User extends Component {
    render() {
        return (
            <div>
                <h1>User</h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(User);