import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import App from '../components/App';

export default class AppRouter extends React.Component{
    render(){
        return (
            <Router>
                <App/>
            </Router>
        )
    }
}
