import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Data extends Component {
    render() {
        return (
            <div>
                <h1>Data</h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Data);