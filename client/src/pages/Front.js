
import React from 'react'


/**
 * The front page of MixTech. 
 * Gives user the option to login or register.
 */
const Front = () => {
    return (
        <div className="container" style={parentStyle}>
            <div className="container" style={style}>
                <h1>QRona</h1>
                
            </div>
        </div>
    )
}


const parentStyle = {
    textAlign: 'center'
}

const style = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

export default Front