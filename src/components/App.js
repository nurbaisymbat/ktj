import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Login from '../components/Login';
import Sms from '../components/Sms';
import Profile from '../components/Profile/Index';

import '../static/scss/app.scss';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="app-root">
                <Route exact path="/" component={Login}/>
                <Route path="/sms" component={Sms}/>
                <Route path="/profile" component={Profile}/>
            </div>
        );
    }
}
