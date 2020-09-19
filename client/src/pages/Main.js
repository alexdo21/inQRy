import React from 'react';

import {Route, Switch} from 'react-router-dom'
import Records from '../components/Records';
import Data from '../components/Data';
import Navbar from '../components/Navbar';
import User from '../components/User';
import Landing from '../components/Landing';


const Main = () => {
    return (
        <div id="main">
            <Navbar/>
            <Switch>
                <Route exact path="/main" component={Landing}/>
                <Route path="/main/records" component={Records}/>
                <Route path="/main/data" component={Data} />
                <Route path="/main/user" component={User}/>
            </Switch>

        </div>
    )
}

export default Main;